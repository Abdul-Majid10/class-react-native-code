import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
// import { AuthContext } from "../context";
// import { useContext } from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

export default function Home2(props) {
    // const { signOutMajid } = useContext(AuthContext);
    const auth = getAuth();
    const logOutUser = () => {
        console.log("logout call");
        signOut(auth)
            .then(() => {
                // console.log("logout");
                // signOutMajid;
                console.log("logout suc");
                // props.navigation.navigate("Root");
            })
            .catch((error) => {
                console.log("An error happened");
                console.log(error);
            });
    };
    useEffect(() => {
        global.setting = {
            themeColor: "#E74C3C",
            font: 10,
            mode: "Default",
        };
    });
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.h1}>Welcome to React Native</Text>
            </View>
            <View style={styles.middel}>
                <Button
                    title="Go to Campus Finder Screen"
                    onPress={() => {
                        props.navigation.navigate("CampusFinder");
                    }}
                />
                <Button
                    title="Go to Chat Screens"
                    onPress={() => {
                        props.navigation.navigate("Chats");
                    }}
                />
                <Button
                    title="Go to Voice Chat Screens"
                    onPress={() => {
                        props.navigation.navigate("VoiceChats");
                    }}
                />
                <Button
                    title="Go to RTDB data"
                    onPress={() => {
                        props.navigation.navigate("RealTimeDBData");
                    }}
                />
            </View>
            <View style={styles.buttom}>
                <View style={styles.buttom}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            logOutUser();
                        }}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    top: {
        alignItems: "center",
        flex: 0.2,
    },
    middel: {
        flex: 0.6,
    },
    h1: {
        fontSize: 25,
        marginTop: 40,
        fontWeight: "bold",
        color: "#5DADE2",
    },

    buttom: {
        flex: 0.3,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "green",
        paddingTop: 10,
        paddingLeft: 90,
        paddingBottom: 10,
        paddingRight: 90,
        borderRadius: 30,
        backgroundColor: "#2E86C1",
    },
    buttonText: {
        color: "white",
        fontSize: 25,
    },
});
