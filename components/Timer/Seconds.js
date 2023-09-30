import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SecondText from "../Text/SecondText";
import ScrollPicker from "react-native-wheel-scrollview-picker";

export default function Seconds({ onSecondChange }) {
  return (
    <View style={styles.Hourpicker}>
      <SecondText text="Seconds" />
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
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
        ]}
        selectedIndex={0}
        renderItem={(data, index) => {
          return (
            <View>
              <Text style={styles.picker}>{data}</Text>
            </View>
          );
        }}
        onValueChange={(data) => {
          onSecondChange(data);
          //
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
