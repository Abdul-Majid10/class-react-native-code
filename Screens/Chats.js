import React from "react";
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

function Chats(props) {
    const [setting, setSetting] = useState(global.setting);
    const [chats, setChats] = useState([
        {
            key: 0,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 1,
            image: require("../images/Majidprofile.jpeg"),
            name: "Farhan Ali",
            messae: "Loern impsum , Dummy text here ...",
            batch: 10,
            time: "12:10",
        },
        {
            key: 2,
            image: require("../images/Majidprofile.jpeg"),
            name: "Nabeel Amir",
            messae: "Loern impsum , Dummy text here ...",
            batch: 22,
            time: "12:10",
        },
        {
            key: 3,
            image: require("../images/Majidprofile.jpeg"),
            name: "Waseem bajwa",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 4,
            image: require("../images/Majidprofile.jpeg"),
            name: "Suleman",
            messae: "Loern impsum , Dummy text here ...",
            batch: 2,
            time: "12:10",
        },
        {
            key: 5,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 11,
            time: "12:20",
        },
        {
            key: 6,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 11,
            time: "12:10",
        },
        {
            key: 7,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 8,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 9,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 10,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 11,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 12,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
        {
            key: 13,
            image: require("../images/Majidprofile.jpeg"),
            name: "Abdul Majid",
            messae: "Loern impsum , Dummy text here ...",
            batch: 5,
            time: "12:10",
        },
    ]);

    const renderChats = ({ item }) => (
        <>
            <View style={styles.chatSection}>
                <View style={styles.chatLeftSection}>
                    <Image style={styles.image} source={item.image} />
                </View>
                <TouchableOpacity
                    style={styles.chatMiddleSection}
                    onPress={() => {
                        props.navigation.navigate(
                            "SMSChat",
                            { name: item.name }
                            // (props.chatinfo = { name: item.name })
                        );
                    }}>
                    <Text style={styles.name}> {item.name}</Text>
                    <Text style={styles.messagePart}> {item.messae}</Text>
                </TouchableOpacity>
                <View style={styles.chatRightSection}>
                    <View style={styles.batchContainer}>
                        <Text style={styles.batch}> {item.batch}</Text>
                    </View>
                    <Text style={styles.time}> {item.time}</Text>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.separator(setting)}></View>
            </View>
        </>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}> Fake Chat Box</Text>
            </View>
            <View style={styles.chatsContainer}>
                <FlatList data={chats} renderItem={renderChats} keyExtractor={(item) => item.key} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
    },
    chatsContainer: { flex: 0.8 },
    chatSection: {
        padding: 12,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    chatLeftSection: { flex: 0.22 },
    chatRightSection: {
        flex: 0.1,
    },
    chatMiddleSection: {
        paddingHorizontal: 10,
        flex: 0.68,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    messagePart: {
        opacity: 0.5,
    },
    batchContainer: {
        borderRadius: 50,
        alignItems: "center",
        paddingVertical: 5,
        backgroundColor: "#28B463",
        marginBottom: 5,
    },
    batch: {
        fontWeight: "bold",
        color: "white",
    },

    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#5DADE2",
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    center: {
        alignItems: "center",
    },
    separator: (setting) => ({
        borderBottomColor: setting.themeColor,
        borderBottomWidth: 2,
        width: 200,
    }),
});

export default Chats;
