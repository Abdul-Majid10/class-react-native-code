import React from "react";
import SignUp from "./Screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import CampusFinder from "./Screens/CampusFinder";
import SettingScreen from "./Screens/SettingScreen";
import Chats from "./Screens/Chats";
import VoiceChat from "./Screens/VoiceChat";
import VoiceChats from "./Screens/VoiceChats";
import SMSChat from "./Screens/SMSChat";

const Stack = createNativeStackNavigator();

function App(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
                <Stack.Screen
                    name="CampusFinder"
                    component={CampusFinder}
                    options={{ title: "Campus Finder" }}></Stack.Screen>
                <Stack.Screen
                    name="SettingScreen"
                    component={SettingScreen}
                    options={{ title: "Setting Screen" }}></Stack.Screen>
                <Stack.Screen
                    name="Chats"
                    component={Chats}
                    options={{ title: "Chats" }}></Stack.Screen>
                <Stack.Screen
                    name="SMSChat"
                    component={SMSChat}
                    options={{ title: "SMS Chat" }}></Stack.Screen>
                <Stack.Screen
                    name="VoiceChats"
                    component={VoiceChats}
                    options={{ title: "Voice Chats" }}></Stack.Screen>
                <Stack.Screen
                    name="VoiceChat"
                    component={VoiceChat}
                    options={{ title: "Voice Chat" }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
