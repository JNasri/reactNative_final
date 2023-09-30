import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import SecondText from "../Text/SecondText";
import Horizontal from "../Text/horizontal";

export default function Hours({ onHourChange }) {
  return (
    <View style={styles.Hourpicker}>
      <SecondText text="Hours" />
      <ScrollPicker
        dataSource={[
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ]}
        selectedIndex={0}
        renderItem={(data, index) => {
          return (
            <View key={index}>
              <Text style={styles.picker}>{data}</Text>
            </View>
          );
        }}
        onValueChange={(data) => {
          onHourChange(data * 60 * 60);
        }}
        wrapperHeight={135}
        wrapperColor="#0D1821"
        wrapperBackground="#F6E8EA"
        highlightColor="#0D1821"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Hourpicker: {
    height: "100%",
    width: "25%",
    borderColor: "#0D1821",
    borderWidth: 3,
    borderRadius: 5,
  },
});
