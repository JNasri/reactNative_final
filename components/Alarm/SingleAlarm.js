import { Alert, StyleSheet, Switch, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function SingleAlarm({ item }) {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // Convert to 12-hour format

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )} ${period}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const alarmTime = item.time;

      if (
        now.getHours() === alarmTime.getHours() &&
        now.getMinutes() === alarmTime.getMinutes()
      ) {
        Alert.alert(`Alarm for ${item.label}`, "Time to wake up!");
        // Clear interval after alert is displayed
        clearInterval(interval);
      }
    }, 3000); // Check every minute (adjust as needed)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <View
      style={{
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 22 }}>{formatTime(item.time)}</Text>
      <Text style={{ fontSize: 18 }}>{item.label ? `${item.label}` : ""}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "green" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
