import { StyleSheet } from "react-native";

export const em = 14;
export const sides = 10;
export const theme = {
  primary: {
    lighter: "#feede7",
    light: "#fbc8b8",
    normal: "#f8a488",
    dark: "#956252",
    darker: "#32211b"
  },
  accent: {
    lighter: "#deeeea",
    light: "#9ccbc1",
    normal: "#5aa897",
    dark: "#36655b",
    darker: "#12221e"
  },
  grey: {
    lighter: "#dadce2",
    light: "#8f97a7",
    normal: "#45526c",
    dark: "#293141",
    darker: "#0e1016"
  },
  white: "#ffffff",
  black: "#0e1016"
};

export const fonts = {
  thin: "Roboto_100Thin",
  thinItalic: "Roboto_100Thin_Italic",
  light: "Roboto_300Light",
  lightItalic: "Roboto_300Light_Italic",
  regular: "Roboto_400Regular",
  regularItalic: "Roboto_400Regular_Italic",
  medium: "Roboto_500Medium",
  mediumItalic: "Roboto_500Medium_Italic",
  bold: "Roboto_700Bold",
  boldItalic: "Roboto_700Bold_Italic",
  black: "Roboto_900Black",
  blackItalic: "Roboto_900Black_Italic"
};

const commonStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: sides,
    paddingTop: em
  }
});

export default commonStyles;
