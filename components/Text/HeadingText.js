import React from "react";
import { Text } from "react-native";
export default function HeadingText(props) {
  return (
    <Text
      style={{
        fontSize: 32,
        fontWeight: "bold",
      }}
    >
      {props.text}
    </Text>
  );
}
