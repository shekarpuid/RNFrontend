import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, SettingsStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style: {
          backgroundColor: '#000',
        },
        activeTintColor: "#CC0000",
        inactiveTintColor: '#dedede',
      }}
      swipeEnabled
      initialRoute="Home"
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;