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
import TodoItem from "./TodoItem";
import Bottom from "./Bottom";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";


export default function Todo() {
    //   use states
    // add todo
    // deletetodo

    const [todo, setTodo] = useState<string>("");
    const [TodoItems, setTodoItems] = useState<any[]>([]);

    const addTodo = () => {
        setTodoItems([...TodoItems, todo]);
        setTodo("") // setTodo(null)
    };

    const deleteTodo = (index: number) => {
        // console.log("hello delete");
        const newTodos = [...TodoItems];
        newTodos.splice(index, 1);
        setTodoItems(newTodos)
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.todos}>
                <FlatList
                    data={TodoItems}
                    renderItem={({ item, index }) => (
                        <TodoItem items={item} onPress={() => deleteTodo(index)} />
                    )}
                    keyExtractor={(_item, index) => index.toString()}
                />
                {/* <TodoItem items="Please Subscribe 🚀" onPress={() => addTodo()} /> */}
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={100}
                enabled={true}
                style={styles.inputContainer}
            >
                <TextInput
                    placeholder="Type todo here..."
                    style={styles.input}
                    placeholderTextColor="black"
                    value={todo}
                    onChangeText={(e) => setTodo(e)}
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
        marginHorizontal: 15,
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
