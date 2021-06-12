import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { em, fonts } from "../../common/commonStyles";

export interface TypographyProps {
  style?: TextStyle;
}

export const H1: React.FC<TypographyProps> = props => {
  return <Text style={{ ...styles.h1, ...props.style }}>{props.children}</Text>;
};

export const H2: React.FC<TypographyProps> = props => {
  return <Text style={{ ...styles.h2, ...props.style }}>{props.children}</Text>;
};

export const H3: React.FC<TypographyProps> = props => {
  return <Text style={{ ...styles.h3, ...props.style }}>{props.children}</Text>;
};

export const H4: React.FC<TypographyProps> = props => {
  return <Text style={{ ...styles.h4, ...props.style }}>{props.children}</Text>;
};

export const H5: React.FC<TypographyProps> = props => {
  return <Text style={{ ...styles.h5, ...props.style }}>{props.children}</Text>;
};

export const H6: React.FC<TypographyProps> = props => {
  return <Text style={{ ...styles.h6, ...props.style }}>{props.children}</Text>;
};

export const P: React.FC<TypographyProps> = props => {
  return <Text style={[styles.p, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 2 * em,
    marginBottom: 1.5 * em,
    fontFamily: fonts.bold
  },
  h2: {
    fontSize: 1.5 * em,
    marginBottom: 1 * em,
    fontFamily: fonts.bold
  },
  h3: {
    fontSize: 1.2 * em,
    marginBottom: 1 * em,
    fontFamily: fonts.medium
  },
  h4: {
    fontSize: 1 * em,
    marginBottom: 0.5 * em,
    fontFamily: fonts.medium
  },
  h5: {
    fontSize: 0.8 * em,
    marginBottom: 0.5 * em
  },
  h6: {
    fontSize: 0.7 * em,
    marginBottom: 0.5 * em
  },
  p: {
    fontSize: 1 * em,
    marginBottom: 0.5 * em,
    fontFamily: fonts.regular
  }
});
