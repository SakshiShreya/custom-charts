import * as React from "react";
import { StyleSheet, Text, TextInput, TextStyle, View } from "react-native";
import { em, fonts, theme } from "../../common/commonStyles";

export interface InputProps {
  label: string;
  value?: string;
  onChangeText: (val: string) => void;
  style?: TextStyle;
}

const Input: React.FC<InputProps> = props => {
  const [isFocus, setIsFocus] = React.useState(false);

  function handleFocus() {
    setIsFocus(true);
  }

  function handleBlur() {
    setIsFocus(false);
  }

  function handleChange(val: string) {
    props.onChangeText(val);
  }

  return (
    <View style={styles.cont}>
      <Text style={[styles.label, isFocus || props.value ? styles.focusLabel : styles.blurLabel]}>{props.label}</Text>
      <TextInput
        value={props.value}
        style={[styles.input, isFocus ? styles.focusInput : styles.blurInput, props.style]}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  cont: {
    position: "relative"
  },
  label: {
    position: "absolute",
    fontFamily: fonts.regular,
    color: theme.grey.light
  },
  blurLabel: {
    top: 0,
    paddingTop: 0.5 * em + 3,
    fontSize: em
  },
  focusLabel: {
    top: -0.2 * em,
    paddingTop: 0,
    fontSize: 0.7 * em
  },
  input: {
    borderBottomWidth: 1,
    fontSize: em,
    paddingVertical: 0.5 * em,
    marginBottom: em
  },
  blurInput: {
    borderBottomColor: theme.grey.normal
  },
  focusInput: {
    borderBottomColor: theme.primary.normal
  }
});
