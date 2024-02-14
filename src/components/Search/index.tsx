import * as S from "./styled"
import React from "react";

import {  Text } from "react-native";
import Animated,{useAnimatedStyle, useSharedValue, withTiming,Easing} from "react-native-reanimated";
export function Search() {

  const randomWidth = useSharedValue(0);
  const randomOpacity = useSharedValue(0)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
      opacity: withTiming(randomOpacity.value, config)
    };
  });
  return (
    <S.Container>
      <Animated.View
      style={[{ width: 100,opacity:0,flexDirection:"row" }, style]}
      >
      <S.Input />
      </Animated.View>
   
      <S.ButtonSearch onPress={() => {
          randomWidth.value = 300;
          randomOpacity.value = 1;
        }}>
        <Text>Press</Text>
      </S.ButtonSearch>
     
    </S.Container>
  )
}
