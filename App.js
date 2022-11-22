import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Home";
import SignUp from "./Screens/SignUp";
import Login from "./Screens/Login";
import CampusFinder from "./Screens/CampusFinder";
import SettingScreen from "./Screens/SettingScreen";
import Chats from "./Screens/Chats";
import VoiceChat from "./Screens/VoiceChat";
import VoiceChats from "./Screens/VoiceChats";
import SMSChat from "./Screens/SMSChat";
import Home2 from "./Screens/Home2";
import { getAuth } from "firebase/auth";
import { Splash } from "./Screens/Splash";

import { useState, useEffect } from "react";

const AuthStack = createNativeStackNavigator();
const LogedOutUserStack = () => {
    return (
        <AuthStack.Navigator initialRouteName="Home">
            <AuthStack.Screen name="Home" component={Home}></AuthStack.Screen>
            <AuthStack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: "SignUp" }}></AuthStack.Screen>
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{ title: "Login Screen" }}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

const HomeStack = createNativeStackNavigator();
const LogedInUserStack = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home2" component={Home2}></HomeStack.Screen>
            <HomeStack.Screen
                name="CampusFinder"
                component={CampusFinder}
                options={{ title: "Campus Finder" }}></HomeStack.Screen>
            <HomeStack.Screen
                name="SettingScreen"
                component={SettingScreen}
                options={{ title: "Setting Screen" }}></HomeStack.Screen>
            <HomeStack.Screen
                name="Chats"
                component={Chats}
                options={{ title: "Chats" }}></HomeStack.Screen>
            <HomeStack.Screen
                name="SMSChat"
                component={SMSChat}
                options={{ title: "SMS Chat" }}></HomeStack.Screen>
            <HomeStack.Screen
                name="VoiceChats"
                component={VoiceChats}
                options={{ title: "Voice Chats" }}></HomeStack.Screen>
            <HomeStack.Screen
                name="VoiceChat"
                component={VoiceChat}
                options={{ title: "Voice Chat" }}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

function App(props) {
    // Set an initializing state whilst Firebase connects
    const auth = getAuth();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
        return <Splash />;
    }

    return (
        <NavigationContainer>
            {user ? LogedInUserStack() : LogedOutUserStack()}
            {/* <RootStackScreen userToken={userToken}></RootStackScreen> */}
        </NavigationContainer>
    );
}

export default App;
