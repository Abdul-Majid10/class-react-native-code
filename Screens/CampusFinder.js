import { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity } from "react-native";

export default function CampusFinder(props) {
    const [recordCounter, setrecordCounter] = useState(0);

    const [setting, setSetting] = useState(global.setting);

    const availableFillters = [
        {
            key: 0,
            title: "Fillters",
        },
        {
            key: 1,
            title: "City",
        },
        {
            key: 2,
            title: "Rank",
        },
        {
            key: 3,
            title: "Disp",
        },
        {
            key: 4,
            title: "Dev_Test",
        },
    ];

    const appliedFillters = [
        {
            key: 0,
            title: "City",
            value: "Lahore",
        },
        {
            key: 1,
            title: "Rank",
            value: 100,
        },
        {
            key: 2,
            title: "Disp",
            value: "Computer Science",
        },
    ];

    const universites = [
        {
            key: 0,
            name: "PUCIT",
            fee: 12912,
            admission: "Open",
            location: "Lahore",
            rank: "Middel",
            disp: "CS",
            imgPath: require("../images/fb.png"),
        },
        {
            key: 1,
            name: "CUI",
            fee: 817298,
            admission: "Open",
            location: "Lahore",
            rank: "Top",
            disp: "CS",
            imgPath: require("../images/google.jpeg"),
        },
        {
            key: 2,
            name: "Nust",
            fee: 12912,
            admission: "Closed",
            location: "ISB",
            rank: "Top",
            disp: "Machiniacl",
            imgPath: require("../images/linkedin.jpeg"),
        },
        {
            key: 3,
            name: "UMT",
            fee: 23212,
            admission: "Closed",
            location: "Karachi",
            rank: "Lower",
            disp: "IT",
            imgPath: require("../images/fb.png"),
        },
    ];

    useEffect(() => {
        setrecordCounter(universites.length);
    }, [universites]);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener("focus", () => {
            setSetting(global.setting);
        });
        return unsubscribe;
    }, [props.navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.recordsCounterView}>
                <Text style={styles.recordsCounterMessage}>Total Institutes : {recordCounter}</Text>
                <TouchableOpacity
                    style={styles.button(setting)}
                    onPress={() => {
                        props.navigation.navigate("SettingScreen");
                    }}>
                    <Text style={styles.buttonText}>Setting</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.availableFillterView}>
                <FlatList
                    data={availableFillters}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.filtersItems}>
                            <Text style={styles.availableFillters}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
            <View style={styles.appliedFillterView}>
                <FlatList
                    data={appliedFillters}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.filtersItems}>
                            <Text style={styles.appliedFillters(setting)}>
                                {item.title}: {item.value}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
            <View style={styles.records}>
                <FlatList
                    data={universites}
                    renderItem={({ item }) => (
                        <>
                            <View style={styles.universitiesData}>
                                <View style={styles.Imges}>
                                    <Image style={styles.image} source={item.imgPath} />
                                </View>
                                <View style={styles.universityDetails}>
                                    <Text style={styles.details}>{item.name}</Text>
                                    <Text style={styles.details}>Fee: {item.fee}</Text>
                                    <Text style={styles.details}>Admission : {item.admission}</Text>
                                    <Text style={styles.details}>Location : {item.location}</Text>
                                    <Text style={styles.details}>Rank : {item.rank}</Text>
                                </View>
                            </View>
                            <View style={styles.center}>
                                <View style={styles.separator(setting)}></View>
                            </View>
                        </>
                    )}
                    keyExtractor={(item) => item.key}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBFCFC",
    },
    recordsCounterView: {
        flex: 0.07,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    recordsCounterMessage: {
        fontSize: 25,
        color: "Grey",
        backgroundColor: "#F8F9F9",
        paddingLeft: 70,
        paddingRight: 70,
        paddingTop: 5,
        paddingBottom: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    availableFillterView: {
        flex: 0.08,
    },
    filtersItems: {
        justifyContent: "center",
    },
    availableFillters: {
        fontSize: 20,
        borderRadius: 5,
        color: "grey",
        backgroundColor: "#D7DBDD",
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
        paddingTop: 5,
        paddingBottom: 5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.27,
        shadowRadius: 2.65,

        elevation: 6,
    },
    appliedFillterView: {
        flex: 0.08,
        justifyContent: "center",
        backgroundColor: "#F0F3F4",
        borderRadius: 10,
    },
    appliedFillters: (settting) => ({
        fontSize: 18,
        fontWeight: "bold",
        borderRadius: 10,
        color: "white",
        backgroundColor: settting.themeColor,
        paddingLeft: 12,
        paddingRight: 12,
        margin: 10,
        paddingTop: 8,
        paddingBottom: 8,
    }),
    records: {
        flex: 0.7,
    },
    universitiesData: {
        flex: 1,
        flexDirection: "row",
    },
    center: {
        alignItems: "center",
    },
    separator: (setting) => ({
        borderBottomColor: setting.themeColor,
        borderBottomWidth: 2,
        width: 200,
    }),

    Imges: {
        flex: 0.4,
        padding: 20,
    },
    universityDetails: { flex: 0.6, justifyContent: "center" },
    details: {
        fontSize: 18,
    },
    image: {
        borderRadius: 70,
        height: 130,
        width: 130,
    },
    button: (setting) => ({
        backgroundColor: setting.themeColor,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 12,
        paddingTop: 12,
        borderRadius: 5,
    }),
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
});
