import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/private/Home"
import Profile from "../screens/private/Profile"
import Settings from "../screens/private/Settings";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#CC0000",fontFamily: 'Lobster-Regular'
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: "#CC0000",
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontFamily: 'Lobster-Regular',fontSize: 25
            }
        }}>
            <Stack.Screen name="Posts" component={Home} />
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