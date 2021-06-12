import * as React from "react";
import { Animated, Dimensions, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { em, theme } from "../../common/commonStyles";

export interface PopupProps {
  visible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = props => {
  const bounceValue = new Animated.Value(0);
  const { height } = Dimensions.get("window");

  React.useEffect(() => {
    Animated.timing(bounceValue, {
      toValue: props.visible ? height : 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [props.visible]);

  return (
    <Modal animationType="fade" visible={props.visible} onRequestClose={props.onClose} transparent={true}>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPressOut={props.onClose}>
          <View style={styles.overlayCont}></View>
        </TouchableWithoutFeedback>
        <Animated.View style={{ ...styles.container, maxHeight: bounceValue }}>{props.children}</Animated.View>
      </View>
    </Modal>
  );
};

export default Popup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.grey.light + "99",
    justifyContent: "flex-end",
    display: "flex"
  },
  overlayCont: {
    height: "100%"
  },
  container: {
    maxHeight: 0,
    backgroundColor: theme.white,
    elevation: 9,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    padding: em,
    paddingBottom: 3 * em
  }
});
