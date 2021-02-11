import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { SettingsStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator"
import Counter from "../screens/hoc/Counter";
import FetchHook from "../screens/useFetch/FetchHook"
import TabNavigator from "./TabNavigator";
import Counter from "../screens/hoc/Counter";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      <Drawer.Screen name="Counter HOC" component={Counter} />
      <Drawer.Screen name="Fetch Hook" component={FetchHook} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;