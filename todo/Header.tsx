import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>Sonny<Text>Do</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 55,
        flexDirection: "row",
    }
})