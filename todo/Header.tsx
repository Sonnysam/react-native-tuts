import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.firstText}>
                Sonny<Text style={[styles.secondText, styles.firstText]}>Do</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 55,
        flexDirection: "row",
    },
    firstText: {
        fontSize: 25,
        fontWeight: "700",
    },
    secondText: {
        color: "#7F27FF",
    },
});
