import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.h1}>Sign up</Text>
            </View>
            <View style={styles.middle}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setFirstName}
                    value={firstName}
                    placeholder="First Name"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setLastName}
                    value={lastName}
                    placeholder="Last Name"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    placeholder="Phone No"
                    keyboardType="numeric"
                />
                <TextInput
                    secureTextEntry={true}
                    style={styles.textInput}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                />
            </View>
            <View style={styles.buttom}>
                <Text style={styles.h3}>Sign up with social Account</Text>
                <View style={styles.buttomSocial}>
                    <Image style={styles.image} source={require("./images/fb.png")} />
                    <Image style={styles.image} source={require("./images/google.jpeg")} />
                    <Image style={styles.image} source={require("./images/linkedin.jpeg")} />
                </View>
                <View style={styles.buttom}>
                    <TouchableOpacity style={styles.button} onPress={() => {}}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                    <Text style={styles.h2}>Read User License Agrement</Text>
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
        flex: 1.3,
        color: "#5DADE2",
        alignItems: "center",
        justifyContent: "center",
    },
    h1: {
        fontSize: 60,
        marginTop: 30,
        fontWeight: "bold",
        color: "#5DADE2",
    },

    middle: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    textInput: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 20,
        fontSize: 20,
        width: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    buttom: {
        flex: 2,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    h3: {
        fontSize: 15,
        color: "grey",
    },
    h2: {
        marginTop: 30,
        fontSize: 15,
        color: "#3498DB",
    },
    buttomSocial: {
        marginTop: 20,
        flexDirection: "row",
    },
    image: {
        height: 30,
        width: 30,
        borderRadius: 50,
        padding: 20,
        margin: 8,
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
