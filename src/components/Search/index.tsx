import * as S from "./styled"
import React, { useState } from "react";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import {  Text } from "react-native";
import Animated,{useAnimatedStyle, useSharedValue, withTiming,Easing} from "react-native-reanimated";
import { API_GOOGLE_MAP } from "../../services/SECRET_API_KEY";

type SearchProps = {
  onChangeText: (value:any) => void;
}



export function Search({onChangeText}:SearchProps) {

  function OnchangeTextInput (data:GooglePlaceData,detail:GooglePlaceDetail | null ){
    const value = {
      detail
    }
    onChangeText(value)
}
  
  const [isActiveInput,setIsActiveInput]=useState(false)

  const widthButton = useSharedValue(0);
  const opacityButton = useSharedValue(0)

  const config = {
    duration: 500,
    easing: Easing.bezier(1,0,0.01,0.5),
    
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(widthButton.value, config),
      opacity: withTiming(opacityButton.value, config)
    };
  });
  return (
    <S.Container>
      <Animated.View
      style={[{ width: 100,opacity:0,flexDirection:"row" }, style]}
      >
        <GooglePlacesAutocomplete
        placeholder="Search city"
        GooglePlacesDetailsQuery={{
          fields: 'Geometry'
        }}
        onPress={OnchangeTextInput}
        query={{
          key: API_GOOGLE_MAP,
          language:'pt-BR'
        }}
        />
      </Animated.View>
   
      <S.ButtonSearch isActiveAnimation={isActiveInput} onPress={() => {
          widthButton.value = 293;
          setIsActiveInput(true)
          opacityButton.value = 0.5;
        }}>
        <Text>Press</Text>
      </S.ButtonSearch>
     
    </S.Container>
  )
}
