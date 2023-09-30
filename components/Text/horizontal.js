import { StyleSheet, View } from "react-native";
import React from "react";

export default function Horizontal(props) {
  return (
    <View
      style={{
        borderColor: props.color || "#0D1821",
        borderWidth: props.bw || 2,
        marginVertical: props.m || 20,
        width: props.w,
      }}
    />
  );
}

const styles = StyleSheet.create({});
