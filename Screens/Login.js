import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const loginUser = () => {
        if (requiredFielsValidation()) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("login suc");
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
    };

    const requiredFielsValidation = () => {
        if (!email.trim) {
            alert("Email is required.");
        } else if (!password.trim) {
            alert("Password is required.");
        } else {
            return true;
        }
        return false;
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.h1}>Login</Text>
            </View>
            <View style={styles.middle}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
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
                <View style={styles.buttom}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            loginUser();
                        }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.h2}>Forgot Password</Text>
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
