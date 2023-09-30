import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Horizontal from "./horizontal";

export default function AlarmsText() {
  return (
    <>
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20 }}>Time</Text>
        <Text style={{ fontSize: 20, marginLeft: 50 }}>Label</Text>
        <Text style={{ fontSize: 20 }}>Active</Text>
      </View>
      <Horizontal w={"100%"} color={"#0D1821"} m={"0%"} bw={0.5} />
    </>
  );
}

const styles = StyleSheet.create({});
