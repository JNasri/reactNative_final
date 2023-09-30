import {
  StyleSheet,
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Horizontal from "../Text/horizontal";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function AlarmModal({ modalV, setModalV, setAlarm }) {
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [lable, setLable] = useState("");

  const handleTimeChange = (event, selectedTime) => {
    setSelectedTime(selectedTime);
  };

  const handleConfirm = (selectedTime) => {
    setSelectedTime(selectedTime);
  };

  const handleSaveAlarm = () => {
    setAlarm(selectedTime, lable);
  };

  return (
    <Modal
      visible={modalV}
      onRequestClose={() => {
        setModalV(false);
      }}
      animationType="slide"
      presentationStyle="formSheet"
    >
      <View style={styles.modal}>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={({ pressed }) => [
              styles.modalClose,
              {
                backgroundColor: pressed ? "#F6E8EA" : "#0D1821",
                marginLeft: 20, // Change the colors here
                // Add any other styles you want to change on press
              },
            ]}
            onPress={() => {
              setModalV(false);
              setSelectedTime(new Date());
            }}
          >
            {({ pressed }) => (
              <Text
                style={[
                  styles.addAlarmText,
                  {
                    color: pressed ? "#0D1821" : "#F6E8EA",
                    fontSize: 18,
                    paddingVertical: 10,
                  },
                ]}
              >
                X
              </Text>
            )}
          </Pressable>
          <Text
            style={{
              color: "#F6E8EA",
              fontSize: 18,
              padding: 5,
              marginLeft: 15,
              fontSize: 28,
              alignSelf: "center",
            }}
          >
            Customize Alarm
          </Text>
        </View>
        <Horizontal w={"100%"} color={"#F6E8EA"} />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderRadius: 20,
            borderColor: "#F6E8EA",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontSize: 22, color: "#F6E8EA" }}>Time</Text>
          <Horizontal w="25%" m={"0%"} color={"#F6E8EA"} />
          <DateTimePicker
            value={selectedTime}
            mode="time"
            is24Hour={true}
            display="spinner"
            onConfirm={handleConfirm}
            onChange={handleTimeChange}
          />
          <Text style={{ fontSize: 22, color: "#F6E8EA", paddingTop: 5 }}>
            Lable
          </Text>
          <Horizontal w="25%" m={"0%"} color={"#F6E8EA"} />
          <TextInput
            style={{
              marginVertical: 10,
              color: "#F6E8EA",
              width: "50%",
              height: "10%",
              textAlign: "center",
              fontSize: 18,
              backgroundColor: "#0D1821",
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#F6E8EA",
            }}
            placeholder="Lable"
            value={lable}
            onChangeText={useCallback((e) => {
              setLable(e);
            }, [])}
          ></TextInput>
        </View>
        <Pressable
          style={({ pressed }) => [
            styles.modalClose,
            {
              backgroundColor: pressed ? "#F6E8EA" : "#0D1821",
              alignSelf: "center",
              margin: 80,
              width: "75%", // Change the colors here
              // Add any other styles you want to change on press
            },
          ]}
          onPress={() => {
            handleSaveAlarm();
            setSelectedTime(new Date());
            setModalV(false);
          }}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.addAlarmText,
                {
                  color: pressed ? "#0D1821" : "#F6E8EA",
                  fontSize: 18,
                  paddingVertical: 10,
                },
              ]}
            >
              Set Alarm
            </Text>
          )}
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: "100%",
    backgroundColor: "#0D1821",
    paddingTop: 20,
  },
  modalClose: {
    width: "15%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#F6E8EA",
    borderRadius: 20,
  },
});
