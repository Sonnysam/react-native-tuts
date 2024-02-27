import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Platform,
    FlatList
} from "react-native";
import Header from "./Header";
import TodoItems from "./TodoItems";
import Bottom from "./Bottom";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";

export default function Todo() {
    const [todos, setTodos] = useState<string[]>([]);
    const [todoItem, setTodoItem] = useState<string>("");

    const addTodo = () => {
        setTodos([...todos, todoItem]);
        setTodoItem("");
    };

    const deleteTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };


    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.todos}>
                <FlatList
                    data={todos}
                    renderItem={({ item, index }) => (
                        <TodoItems onPress={() => deleteTodo(index)} todoItem={item} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                {/* <TodoItems todoItem="Go to the park" onPress={() => addTodo()} /> */}
            </View>


            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={100}
                enabled={true}
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder="Type todo here..."
                    onChangeText={(text) => setTodos(text)}
                    value={todoItem}
                    style={styles.input}
                    placeholderTextColor="black"
                />
                <TouchableOpacity style={styles.addIcon} onPress={() => addTodo()}>
                    <Text>
                        <Entypo name="plus" size={24} color="white" />
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    todos: {
        marginVertical: 20,
    },
    inputContainer: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        padding: 15,
        width: "80%",
        backgroundColor: Colors.light,
        borderWidth: 1,
        borderRadius: 10,
        elevation: 2,
        borderColor: Colors.secondary,
    },
    addIcon: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
        elevation: 2,
        borderWidth: 1,
        borderColor: Colors.secondary,
    },
});
