import * as S from "./styled"
import React, { useState } from "react";
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { API_GOOGLE_MAP } from "../../services/SECRET_API_KEY";

import IconSearch from '../../assets/icon-search.svg'

type SearchProps = {
  onChangeText: (value: any) => void;
}

export function Search({ onChangeText }: SearchProps) {

  function OnchangeTextInput(data: GooglePlaceData, detail: GooglePlaceDetail | null) {
    const value = {
      detail
    }
    onChangeText(value)
    opacityButton.value = 0
    setIsActiveInput(false)
  }

  const [isActiveInput, setIsActiveInput] = useState(false)

  const widthButton = useSharedValue(0);
  const opacityButton = useSharedValue(0)

  const config = {
    duration: 500,
    easing: Easing.bezier(1, 0, 0.01, 0.5),

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
        style={[{ width: 100, opacity: 0, flexDirection: "row" }, style]}
      >
        <GooglePlacesAutocomplete
          minLength={3}
          styles={{
            textInputContainer: {
              borderRadius: 0
            },
            textInput: {
              borderRadius: 0,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20
            }
          }}
          placeholder="Search city"
          GooglePlacesDetailsQuery={{
            fields: 'Geometry'
          }}
          onPress={OnchangeTextInput}
          query={{
            key: API_GOOGLE_MAP,
            language: 'pt-BR'
          }}
        />
      </Animated.View>

      <S.ButtonSearch isActiveAnimation={isActiveInput} onPress={() => {
        widthButton.value = 293;
        setIsActiveInput(true)
        opacityButton.value = 0.5;
      }}>
        <IconSearch width={20} height={20} />
      </S.ButtonSearch>

    </S.Container>
  )
}
