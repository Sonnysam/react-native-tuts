import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";
import { fontSize } from "../constants/fontSize";

interface todoProp {
    // id: string;
    todoItem: string;
    onPress: () => void;
}

const TodoItems: React.FC<todoProp> = ({ todoItem, onPress }) => {
    return (
        <View style={styles.todoContainer}>
            {/* <S></S> */}
            <View style={styles.item}>
                <Text style={styles.todoItem}>{todoItem}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={onPress}>
                    <Text>
                        <MaterialIcons
                            name="delete-outline"
                            size={24}
                            color={Colors.primary}
                        />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    todoContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.light,
        borderRadius: 8,
        paddingHorizontal: 16,
        elevation: 2,
        borderWidth: 1,
        borderColor: Colors.secondary,
        height: 70,
        alignItems: "center",
        marginVertical: 10,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    todoItem: {
        fontSize: fontSize.medium,
    },
});

export default TodoItems;
