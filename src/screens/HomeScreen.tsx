import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import { Text, View, Button } from "react-native";

export interface HomeScreenProps {
  navigation: StackNavigationProp<any, "">;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <View>
      <Button title="Projects" onPress={() => props.navigation.navigate("Projects")} />
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
