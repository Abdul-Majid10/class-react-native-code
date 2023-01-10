import React from "react";
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { getDatabase,query,get, child,ref,limitToFirst, remove, onValue} from "firebase/database";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";


function RealTimeDBData(props) {

    const db = getDatabase();
    const dbRef = query(ref(db,`QuranAyahs/`),limitToFirst(5));
    

    const [setting, setSetting] = useState(global.setting);
    const [ayah, setAyah] = useState([]);
    

    const renderAyah = ({ item }) => (
        <>
            <View style={styles.ayahSection}>
                <View style={[styles.AyahTopHeader, styles.subSec]}>
                    <AntDesign style={[styles.sound, styles.flexauto]} name="sound" size={30} color="#5DADE2" />
                    <Text style={[styles.ayahTopNumber,styles.flexauto]}> آیت {item.Id}</Text>
                    <Feather style={[styles.menu, styles.flexauto]} name="menu" size={30} color="#5DADE2" />
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
              console.log(snapshot.val());
              setAyah(snapshot.val());
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    
      
    }, [])
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.h1}>الفاتحة</Text>
            </View>
            <View style={styles.ayahContainer}>
                <FlatList data={ayah} renderItem={renderAyah} keyExtractor={(item) => item.key} />
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
        // backgroundColor:'red'
    },

    AyahTopHeader:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    flexauto:{
        flexGrow: 1,
        flexnk: 1,
        flexBasis: "auto",
    },

    sound:{
        paddingLeft: 10
    },

    ayahTopNumber:{
        paddingHorizontal: 130,
        opacity: 0.5,
        fontSize: 15
    },

    menu:{
        textAlign: "flex-end",
    },

    subSec:{
        margin: 8
    },

    AyahDetail: {
         flex: 1,
         flexDirection : "row" 
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
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    AyahArbiText:{
        fontSize: 21,
        fontWeight: "bold",
    },
    AyahTranslationText:{
        fontSize: 15,
    },

    h1: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#5DADE2",
    },
    AyahFooterText:{
        fontSize: 21,
        fontWeight: "bold",
        color: "#5DADE2",
    },
    separator: (setting) => ({
        borderBottomColor: "grey",
        borderBottomWidth: 2,
        width: 300,
    }),
});

export default RealTimeDBData;
