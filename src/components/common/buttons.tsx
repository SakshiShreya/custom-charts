import * as React from "react";
import { Button, StyleSheet, Text, TextStyle, TouchableHighlight } from "react-native";
import { em, theme, fonts } from "../../common/commonStyles";

export interface ButtonProps {
  mini?: boolean;
  style?: TextStyle;
  onPress: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = props => {
  return (
    <TouchableHighlight onPress={props.onPress} activeOpacity={0.5} underlayColor={theme.primary.dark}>
      <Text style={[styles.primary, props.mini ? styles.mini : undefined, props.style]}>{props.children}</Text>
    </TouchableHighlight>
  );
};

export const NoBgButton: React.FC<ButtonProps> = props => {
  return (
    <TouchableHighlight onPress={props.onPress} activeOpacity={0.5} underlayColor={theme.grey.lighter}>
      <Text style={[styles.noBg, props.mini ? styles.mini : undefined, props.style]}>{props.children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  primary: {
    fontSize: em,
    borderRadius: 2,
    padding: 0.5 * em,
    textAlign: "center",
    fontFamily: fonts.medium,
    elevation: 2,
    color: theme.black,
    backgroundColor: theme.primary.normal
  },
  noBg: {
    fontSize: em,
    borderRadius: 2,
    padding: 0.5 * em,
    textAlign: "center",
    fontFamily: fonts.medium,
    color: theme.black,
  },
  mini: {
    padding: 0.25 * em
  }
});
