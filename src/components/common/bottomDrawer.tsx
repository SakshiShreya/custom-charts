import * as React from "react";
import { Dimensions, Text, View, Animated, GestureResponderEvent, PanResponderGestureState, PanResponder } from "react-native";
import { theme } from "../../common/commonStyles";

export interface BottomDrawerProps {}

const { height } = Dimensions.get("window");
enum DrawerState {
  Open = height - 230,
  Peek = 230,
  Closed = 0
}

const BottomDrawer: React.FC<BottomDrawerProps> = props => {
  // const { height } = Dimensions.get("window");

  const y = React.useRef(new Animated.Value(DrawerState.Closed)).current;
  const state = React.useRef(new Animated.Value(DrawerState.Closed)).current;
  const margin = 0.05 * height;

  function movementValue(moveY: number) {
    return height - moveY;
  }

  function onPanResponderMove(_: GestureResponderEvent, { moveY }: PanResponderGestureState) {
    const val = movementValue(moveY);
    animateMove(y, val);
  }

  function onPanResponderRelease(_: GestureResponderEvent, { moveY }: PanResponderGestureState) {
    const moveToValue = movementValue(moveY);
    const nextState = getNextState((state as any)._value, moveToValue, margin);
    state.setValue(nextState);
    animateMove(y, nextState);
  }

  function onMoveShouldSetPanResponder(_: GestureResponderEvent, { dy }: PanResponderGestureState) {
    return Math.abs(dy) >= 10;
  }

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder,
      onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
      onPanResponderMove,
      onPanResponderRelease
    })
  ).current;

  return (
    <Animated.View
      style={[
        {
          height: height + 100,
          width: "100%",
          backgroundColor: theme.white,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          position: "absolute",
          bottom: -height + 30,
          zIndex: 1,
          transform: [{ translateY: y }],
          elevation: 10
        }
      ]}
      {...panResponder.panHandlers}
    >
      <View style={{ marginTop: 25, marginBottom: 15, height: 1, backgroundColor: theme.grey.light }} />
      {props.children}
    </Animated.View>
  );
};

export default BottomDrawer;

function animateMove(y: Animated.Value, toValue: number, callback?: any) {
  Animated.spring(y, {
    toValue: -toValue,
    tension: 20,
    useNativeDriver: true
  }).start(finished => {
    finished && callback && callback();
  });
}

function getNextState(currentState: DrawerState, val: number, margin: number): DrawerState {
  switch (currentState) {
    case DrawerState.Peek:
      return val >= currentState + margin ? DrawerState.Open : val <= DrawerState.Peek - margin ? DrawerState.Closed : DrawerState.Peek;
    case DrawerState.Open:
      return val >= currentState ? DrawerState.Open : val <= DrawerState.Peek ? DrawerState.Closed : DrawerState.Peek;
    case DrawerState.Closed:
      return val >= currentState + margin ? (val <= DrawerState.Peek + margin ? DrawerState.Peek : DrawerState.Open) : DrawerState.Closed;
    default:
      return currentState;
  }
}
