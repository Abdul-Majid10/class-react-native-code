import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import SignUp from "./SignUp";
import { StyleSheet, Text, FlatList, View, Image, TouchableOpacity, Button } from "react-native";

import axios from "axios";
export default function CampusFinder(props) {
    const [ren, setRender] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(async (data) => {
                await setProducts(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setRender(true);
    }, [ren]);

    return (
        <View style={styles.container}>
            <Button
                    title="All book Marks"
                    onPress={() => props.navigation.navigate("SignUp")}
                />
            <View style={styles.records}>
                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <>
                            <View style={styles.productData}>
                                <Ionicons
                                    style={styles.heart}
                                    name="heart"
                                    size={30}
                                    color="black"
                                />
                                <View style={styles.Imges}>
                                    <Image style={styles.image} source={{ uri: item.image }} />
                                </View>
                                <View style={styles.itemDetail}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.price}>$ {item.price}</Text>
                                    <Text style={styles.buy}>Buy Now</Text>
                                </View>
                            </View>
                        </>
                    )}
                    extraData={ren}
                    keyExtractor={(item) => item.id}
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
    records: {
        justifyContent: "center",
    },
    image: {
        height: 250,
    },
    productData: {
        padding: 20,
        flex: 0.5,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    itemDetail: {
        padding: 15,
        textAlign: "center",
        alignItems: "center",
        flex: 1,
    },
    title: {
        textAlign: "center",
        flex: 0.6,
    },
    price: {
        fontSize: 20,
        padding: 10,
        fontWeight: "bold",
        flex: 0.2,
    },
    buy: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "black",
        padding: 8,
        flex: 0.2,
    },
    heart: {
        marginLeft: "auto",
    },
});
