import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Platform, NativeModules } from "react-native";
const { StatusBarManager } = NativeModules;

// _____ NAVIGATION MODULES _____ //
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

// _____ SCREENS_____ //
import Actus from "./screens/Actus";
import Infos from "./screens/Infos";
import Authentication from "./screens/Authentication";
import Map from "./screens/Map";

export default function App() {
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 30 : StatusBarManager.HEIGHT;

  const StackNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="Actus"
        screenOptions={() => ({
          "tabBarIndicatorStyle": {
            "backgroundColor": "#54BECA"
          },
          headerShown: false,
          tabBarInactiveTintColor: "#909090",
          tabBarStyle:{
            backgroundColor: "#99DBE2",
          },
        })}
        style={{ marginTop: STATUSBAR_HEIGHT }}
      >
        <Tab.Screen name="Actus" component={Actus} />
        <Tab.Screen name="Infos" component={Infos} />
        <Tab.Screen name="Register" component={Authentication} />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
        
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={StackNavigator} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
