import React from "react";

import { useEffect } from "react";

import { View, StyleSheet, Text, Button } from "react-native";

export default function Home(props) {
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
                    title="Go to SignUp Screen"
                    onPress={() => props.navigation.navigate("SignUp", { name: "Abdul Majid" })}
                />
                <Button
                    title="Product Screen"
                    onPress={() => {
                        props.navigation.navigate("CampusFinder");
                    }}
                />
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
    },
    h1: {
        fontSize: 25,
        marginTop: 40,
        fontWeight: "bold",
        color: "#5DADE2",
    },
});
