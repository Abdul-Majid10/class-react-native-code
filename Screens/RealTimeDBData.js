import React from "react";
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import {
    getDatabase,
    query,
    get,
    startAfter,
    limit,
    child,
    ref,
    limitToFirst,
    remove,
    onValue,
} from "firebase/database";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";

function RealTimeDBData(props) {
    const db = getDatabase();
    const dbRef = query(ref(db, `QuranAyahs/`), limitToFirst(5));

    const [setting, setSetting] = useState(global.setting);
    const [ayah, setAyah] = useState([]);

    const storeData = async (value, update = false) => {
        if (update) {
            let pre = [...ayah];

            Array.prototype.push.apply(pre, value);
            try {
                await AsyncStorage.setItem("AyahsData", JSON.stringify(pre));
                getData();
            } catch (e) {
                console.log("Error data saving in local storage");
            }
        } else {
            try {
                await AsyncStorage.setItem("AyahsData", JSON.stringify(value));
                getData();
            } catch (e) {
                console.log("Error data saving in local storage");
            }
        }
    };

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("AyahsData");
            console.log("data is get from local");
            jsonValue != null ? setAyah(JSON.parse(jsonValue)) : null;
        } catch (e) {
            console.log("Error getting on local");
        }
    };

    const renderAyah = ({ item }) => (
        <>
            <View style={styles.ayahSection}>
                <View style={[styles.AyahTopHeader, styles.subSec]}>
                    <AntDesign
                        style={[styles.sound, styles.flexauto]}
                        name="sound"
                        size={30}
                        color="#5DADE2"
                    />
                    <Text style={[styles.ayahTopNumber, styles.flexauto]}> آیت {item.Id}</Text>
                    <Feather
                        style={[styles.menu, styles.flexauto]}
                        name="menu"
                        size={30}
                        color="#5DADE2"
                    />
                </View>
                <View style={[styles.AyahArbi, styles.subSec]}>
                    <Text style={styles.AyahArbiText}> بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</Text>
                </View>
                <View style={[styles.AyahTranslation, styles.subSec]}>
                    <Text style={styles.AyahTranslationText}> {item.Translation}</Text>
                </View>
                <View style={[styles.AyahDetail, styles.subSec]}>
                    <Text style={styles.AyahNumber}> ایت {item.AyahNumber}</Text>
                    <Text style={styles.AyahSorahNumber}>سورہ {item.SurahNumber}</Text>
                </View>
                <View style={[styles.AyahFooter, styles.subSec]}>
                    <Text style={styles.AyahFooterText}>تفہیم القرآن</Text>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.separator(setting)}></View>
            </View>
        </>
    );

    useEffect(() => {
        get(dbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    storeData(snapshot.val());
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function getNewData() {
        console.log(ayah.length);
        const newDbRef = query(ref(db, `QuranAyahs/`), limitToFirst(5));
        get(newDbRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    storeData(snapshot.val(), true);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>الفاتحة</Text>
            </View>
            <View style={styles.ayahContainer}>
                <FlatList
                    data={ayah}
                    renderItem={renderAyah}
                    onEndReached={getNewData}
                    keyExtractor={(item) => item.id}
                />
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
    ayahContainer: {
        flex: 0.8,
    },
    ayahSection: {
        padding: 12,
        flex: 1,
        alignItems: "center",
    },

    AyahTopHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    flexauto: {
        flexGrow: 1,
        flexnk: 1,
        flexBasis: "auto",
    },

    sound: {
        paddingLeft: 10,
    },

    ayahTopNumber: {
        paddingHorizontal: 130,
        opacity: 0.5,
        fontSize: 15,
    },

    menu: {
        textAlign: "flex-end",
    },

    subSec: {
        margin: 8,
    },

    AyahDetail: {
        flex: 1,
        flexDirection: "row",
    },
    AyahNumber: {
        paddingHorizontal: 20,
    },
    ayahRightSection: {
        flex: 0.1,
    },
    ayahMiddleSection: {
        paddingHorizontal: 10,
        flex: 0.68,
    },
    AyahArbiText: {
        fontSize: 21,
        fontWeight: "bold",
    },
    AyahTranslationText: {
        fontSize: 16,
    },

    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#5DADE2",
    },
    AyahFooterText: {
        fontSize: 21,
        fontWeight: "bold",
        color: "#5DADE2",
    },
    center: {
        alignItems: "center",
    },
    separator: (setting) => ({
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        width: 300,
    }),
});

export default RealTimeDBData;
