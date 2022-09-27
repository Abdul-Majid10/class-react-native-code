import React from "react";
import SignUp from "./SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import CampusFinder from "./CampusFinder";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
