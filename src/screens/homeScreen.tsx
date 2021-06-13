import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, View, Button } from "react-native";

export interface HomeScreenProps {
  navigation: StackNavigationProp<any, "">;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View>
      <Button title="Charts List" onPress={() => props.navigation.navigate("ChartList")} />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
