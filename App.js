import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import AlarmScreen from "./screens/AlarmScreen";
import TimerScreen from "./screens/TimerScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Alarm") {
                iconName = focused ? "alarm" : "alarm-outline";
              } else if (route.name === "Timer") {
                iconName = focused ? "timer" : "timer-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: "#F6E8EA",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: { backgroundColor: "#0D1821" },
            headerStyle: { backgroundColor: "#0D1821" },
            headerTintColor: "#F6E8EA",
          })}
        >
          <Tab.Screen name={"Alarm"} component={AlarmScreen} />
          <Tab.Screen name={"Timer"} component={TimerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0D1821",
  },
});
