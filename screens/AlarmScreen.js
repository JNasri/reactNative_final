import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeadingText from "../components/Text/HeadingText";
import AlarmModal from "../components/Alarm/AlarmModal";
import SingleAlarm from "../components/Alarm/SingleAlarm";
import AlarmsText from "../components/Text/AlarmsText";
import LangButton from "../components/LangButton/LangButton";

export default function AlarmScreen() {
  const [Alarms, setAlarms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSetAlarm = (selectedTime, selectedLabel) => {
    const newAlarm = {
      time: selectedTime,
      label: selectedLabel,
    };
    setAlarms([...Alarms, newAlarm]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.alarmHead}>
        
        <Pressable
          style={({ pressed }) => [
            styles.addAlarm,
            {
              backgroundColor: pressed ? "#0D1821" : "#F6E8EA", // Change the colors here
              // Add any other styles you want to change on press
            },
          ]}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.addAlarmText,
                { color: pressed ? "#F6E8EA" : "#0D1821" },
              ]}
            >
              Add Alarm
            </Text>
          )}
        </Pressable>
      </View>
      <View style={styles.alarmBody}>
        <HeadingText text="Alarms" />
        <AlarmsText></AlarmsText>
        <FlatList
          style={{ width: "100%" }}
          data={Alarms}
          renderItem={({ item }) => <SingleAlarm item={item} />}
          ListHeaderComponent={""}
          ItemSeparatorComponent={
            <View
              style={{ width: "100%", height: 2, backgroundColor: "black" }}
            ></View>
          }
        ></FlatList>
      </View>
      <AlarmModal
        modalV={modalVisible}
        setModalV={setModalVisible}
        setAlarm={handleSetAlarm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F6E8EA",
  },
  alarmHead: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    padding: 15,
  },
  alarmBody: {
    width: "100%",
    height: "85%",
    padding: 20,
    // backgroundColor: "green",
  },
  addAlarm: {
    width: "50%",
    height: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0D1821",
    backgroundColor: "#0D1821",
    justifyContent: "center",
  },
  addAlarmText: {
    fontSize: 28,
    textAlign: "center",
  },
});
