import React from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
} from "react-native";
import { Audio } from "expo-av";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/FontAwesome";

function VoiceChat(props) {
    const [setting, setSetting] = useState(global.setting);
    const [recording, setRecording] = useState();
    const [recordings, setRecordings] = useState([]);
    const flatList = React.useRef(null);
    const [chat, setChat] = useState([]);

    async function startRecording() {
        try {
            console.log("Requesting permissions..");
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });

            console.log("Starting recording..");
            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            console.log("Recording started");
        } catch (err) {
            console.error("Failed to start recording", err);
        }
    }

    async function stopRecording() {
        console.log("Stopping recording..");
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        let updatedRecordings = [...recordings];
        const { sound, status } = await recording.createNewLoadedSoundAsync();
        updatedRecordings.push({
            sound: sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI(),
        });

        setRecordings(updatedRecordings);
    }

    function getDurationFormatted(millis) {
        const minutes = millis / 1000 / 60;
        const minutesDisplay = Math.floor(minutes);
        const seconds = Math.round((minutes - minutesDisplay) * 60);
        const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutesDisplay}:${secondsDisplay}`;
    }

    function getRecordingLines({ item }) {
        return (
            <View
                key={item._listenerCount}
                style={[styles.row, styles.messageBubble, styles.sended]}>
                <TouchableOpacity
                    style={{ flex: "start" }}
                    onPress={() => item.sound.replayAsync()}
                    title="Play">
                    <Icon name="play" size={30} color="#E74C3C" />
                </TouchableOpacity>
                <Text style={styles.fill}> --|--|--|--|--|--|--|--|-- {item.duration}</Text>
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
            style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}> {props.route.params.name}</Text>
                <MaterialCommunityIcons
                    style={styles.messageIcon}
                    name="message-text"
                    size={40}
                    color="white"
                />
            </View>
            <View style={styles.chatsContainer}>
                <FlatList
                    ref={flatList}
                    onContentSizeChange={() => {
                        flatList.current.scrollToEnd({ anumation: true });
                    }}
                    data={recordings}
                    renderItem={getRecordingLines}
                    keyExtractor={(item) => item.key}
                />
            </View>
            <View style={styles.bottom}>
                <View style={styles.messageSpace}>
                    <View style={styles.sendIcon}>
                        <TouchableOpacity onPress={recording ? stopRecording : startRecording}>
                            <Feather name="mic" size={40} color={recording ? "green" : "#5DADE2"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5DADE2",
    },
    header: {
        flex: 0.1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 20,
        color: "white",
    },
    messageIcon: {
        marginRight: 20,
    },
    sended: {
        backgroundColor: "#5DADE2",
        alignSelf: "flex-end",
        borderBottomStartRadius: 15,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
    },
    recived: {
        backgroundColor: "grey",
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
    },
    messageBubble: {
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 10,
        width: 280,
    },
    chatsContainer: {
        flex: 0.75,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
    },
    bottom: {
        flex: 0.15,
        margin: 15,
    },
    time: { color: "white", paddingTop: 5, textAlign: "right" },
    message: { color: "white" },
    messageSpace: {
        padding: 10,
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 12,
    },

    sendIcon: {
        alignItems: "center",
        flex: 1,
    },
    row: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    fill: {
        // flex: 1,
        flex: "flex-end",
        margin: 3,
    },
});

export default VoiceChat;
