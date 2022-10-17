import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SettingScreen(props) {
    const [selectedColor, setSelectedColor] = useState(global.setting.themeColor);
    const [selectedFont, setSelectedFont] = useState(global.setting.font);
    const [selectedMode, setSelectedMode] = useState(global.setting.mode);

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.h1}>Setting</Text>
            </View>
            <ScrollView style={styles.middle}>
                <Text style={styles.h3(selectedColor)}>Color</Text>
                <Picker
                    selectedValue={selectedColor}
                    onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}>
                    <Picker.Item label="red" value="red" />
                    <Picker.Item label="blue" value="blue" />
                    <Picker.Item label="orage" value="orange" />
                    <Picker.Item label="grey" value="grey" />
                    <Picker.Item label="SkyBlue" value="#5DADE2" />
                </Picker>
                <Text style={styles.h2(selectedFont)}>Font Size</Text>
                <Picker
                    selectedValue={selectedFont}
                    onValueChange={(itemValue, itemIndex) => setSelectedFont(itemValue)}>
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="20" value={20} />
                    <Picker.Item label="30" value={30} />
                    <Picker.Item label="40" value={40} />
                    <Picker.Item label="50" value={50} />
                </Picker>

                <Text style={styles.h3_nonColored}>Mode ( {selectedMode})</Text>
                <Picker
                    selectedValue={selectedMode}
                    onValueChange={(itemValue, itemIndex) => setSelectedMode(itemValue)}>
                    <Picker.Item label="Default" value="Default" />
                    <Picker.Item label="Developer" value="Developer" />
                    <Picker.Item label="Production" value="Production" />
                </Picker>
            </ScrollView>

            <View style={styles.buttom}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        global.setting = { themeColor: selectedColor, mode: selectedMode };
                        props.navigation.navigate("CampusFinder");
                    }}>
                    <Text style={styles.buttonText}>Apply Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFCFC",
    },
    top: {
        flex: 0.15,
        alignItems: "center",
        justifyContent: "center",
    },

    h1: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#5DADE2",
    },

    h3: (selectedColor) => ({
        fontSize: 30,
        padding: 20,
        fontWeight: "bold",
        color: selectedColor,
    }),

    h2: (selectedFont) => ({
        fontSize: selectedFont,
        padding: 20,
        fontWeight: "bold",
        color: "#5DADE2",
    }),

    h3_nonColored: {
        fontSize: 30,
        padding: 20,
        fontWeight: "bold",
        color: "#5DADE2",
    },

    middle: {
        flex: 0.65,
        overflow: "hidden",
    },
    buttom: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
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
