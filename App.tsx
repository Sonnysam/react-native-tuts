import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

import Todo from "./todo/Todo";

export default function App() {


  return (
    <View style={styles.container}>
      {/* <Text>hello</Text> */}
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  }
});
