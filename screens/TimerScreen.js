import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import React, { useState, useContext } from "react";
import HeadingText from "../components/Text/HeadingText";
import Hours from "../components/Timer/Hours";
import Minutes from "../components/Timer/Minutes";
import Seconds from "../components/Timer/Seconds";
import Horizontal from "../components/Text/horizontal";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export default function TimerScreen() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [key, setKey] = useState(0);

  return (
    <View style={styles.container}>
      <HeadingText text={"Select Timer"} />
      <Horizontal w={"75%"} />
      <View style={styles.scrollContainer}>
        <Hours
          onHourChange={(newHour) => {
            setHours(parseInt(newHour));
          }}
        />
        <Minutes
          onMinuteChange={(newHour) => {
            setMinutes(parseInt(newHour));
          }}
        />
        <Seconds
          onSecondChange={(newHour) => {
            setSeconds(parseInt(newHour));
          }}
        />
      </View>
      <Horizontal w={"100%"} />
      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.Btn,
            {
              backgroundColor: pressed ? "#0D1821" : "#F6E8EA", // Change the colors here
              // Add any other styles you want to change on press
            },
          ]}
          onPress={() => {
            setDuration(hours + minutes + seconds);
            setIsPlaying(true);
          }}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.btnText,
                { color: pressed ? "#F6E8EA" : "#0D1821" },
              ]}
            >
              START
            </Text>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.Btn,
            {
              backgroundColor: pressed ? "#0D1821" : "#F6E8EA", // Change the colors here
              // Add any other styles you want to change on press
            },
          ]}
          onPress={() => {
            setIsPlaying(false);
          }}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.btnText,
                { color: pressed ? "#F6E8EA" : "#0D1821" },
              ]}
            >
              PAUSE
            </Text>
          )}
        </Pressable>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.Btn,
            {
              backgroundColor: pressed ? "#0D1821" : "#F6E8EA", // Change the colors here
              // Add any other styles you want to change on press
            },
          ]}
          onPress={() => {
            setIsPlaying(false);
            setKey((prevKey) => prevKey + 1);
            setDuration(0);
          }}
        >
          {({ pressed }) => (
            <Text
              style={[
                styles.btnText,
                { color: pressed ? "#F6E8EA" : "#0D1821" },
              ]}
            >
              RESET
            </Text>
          )}
        </Pressable>
      </View>
      <View style={styles.countDown}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={duration}
          colors={"#0D1821"}
          key={key}
          onComplete={() => {
            setKey((prevKey) => prevKey + 1);
            setDuration(0);
            Alert.alert("Time Has Finished", "", [
              {
                text: "Ok",
              },
            ]);
          }}
        >
          {({ remainingTime }) => (
            <Text style={styles.countdownText}>
              {formatTime(remainingTime)}
            </Text>
          )}
        </CountdownCircleTimer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F6E8EA",
    paddingTop: 20,
    alignItems: "center",
  },
  scrollContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "25%",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginHorizontal: 35,
  },
  Btn: {
    padding: 15,
    width: "50%",
    margin: 5,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#0D1821",
  },
  btnText: {
    color: "#0D1821",
    alignSelf: "center",
    fontSize: 28,
  },
  countDown: {
    paddingTop: 10,
  },
  countdownText: {
    fontSize: 28,
  },
});
