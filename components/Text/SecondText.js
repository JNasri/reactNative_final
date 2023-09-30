import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SecondText(props) {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
      }}
    >
      {props.text}
    </Text>
  );
}

const styles = StyleSheet.create({});
