import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./src/screens/homeScreen";
import ChartListScreen from "./src/screens/chartListScreen";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { theme } from "./src/common/commonStyles";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
  });

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ChartList">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ChartList" component={ChartListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <ActivityIndicator size="large" color={theme.accent.normal} />;
  }
}
