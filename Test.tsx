import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    name: string;
    age: number;
};

export const TestComponent = (props: Props) => {
    return <Text>Hello, {props.name} you're {props.age} years</Text>;
}

const styles = StyleSheet.create({})

