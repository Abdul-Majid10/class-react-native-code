import React from "react";
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function SMSChat(props) {
    const [setting, setSetting] = useState(global.setting);
    const [textMessage, setTextMessage] = useState("");
    const flatList = React.useRef(null);
    const [chat, setChat] = useState([
        {
            key: 0,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "send",
            time: "12:10",
        },
        {
            key: 1,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "recived",
            time: "12:10",
        },
        {
            key: 2,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "recived",
            time: "12:10",
        },
        {
            key: 3,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "send",
            time: "12:10",
        },
        {
            key: 4,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "recived",
            time: "12:10",
        },
        {
            key: 5,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "send",
            time: "12:10",
        },
        {
            key: 6,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "send",
            time: "12:10",
        },
        {
            key: 7,
            message:
                "Loern impsum , Dummy text here, Loern impsum , Dummy text here, Loern impsum , Dummy text here",
            tag: "recived",
            time: "12:10",
        },
    ]);

    const renderChat = ({ item }) => (
        <>
            <View style={styles.chatSection}>
                <View
                    style={[
                        item.tag == "send" ? styles.sended : styles.recived,
                        styles.messageBubble,
                    ]}>
                    <Text style={styles.message}> {item.message}</Text>
                    <Text style={styles.time}> {item.time}</Text>
                </View>
            </View>
        </>
    );

    const onChangeMessage = (text) => {
        setTextMessage(text);
    };

    const sendMessage = (text) => {
        if (text.trim()) {
            let newMessage = {
                key: chat.length,
                message: text,
                tag: "send",
                time: "12:10", //dummy
            };
            let newChat = [...chat, newMessage];
            setChat(newChat);
            setTextMessage("");
        } else {
            alert("Empty message Can't be send ");
        }
    };

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
                    data={chat}
                    renderItem={renderChat}
                    keyExtractor={(item) => item.key}
                />
            </View>
            <View style={styles.bottom}>
                <View style={styles.messageSpace}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => onChangeMessage(text)}
                        value={textMessage}
                        placeholder="Type Message here..."
                    />
                    <View style={styles.sendIcon}>
                        <TouchableOpacity onPress={() => sendMessage(textMessage)}>
                            <Ionicons name="send-sharp" size={40} color="#5DADE2" />
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
    input: {
        padding: 15,
        flex: 0.85,
    },
    sendIcon: {
        alignItems: "flex-end",
        flex: 0.15,
    },
});

export default SMSChat;
