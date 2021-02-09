import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/private/Home"
import Profile from "../screens/private/Profile"
import Settings from "../screens/private/Settings";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}

const SettingsStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}

export { MainStackNavigator, SettingsStackNavigator };