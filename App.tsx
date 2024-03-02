import { StyleSheet, View } from "react-native";
import React from "react";

import Todo from "./todo/Todo";

export default function App() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
