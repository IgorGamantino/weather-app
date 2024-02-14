import styled, { css } from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient';

type ModeNight = {
  isModeNight: boolean;
}


export const Container = styled.View`
  flex: 1;
  padding-top:80px;
  width: 100%;
  padding-bottom:30px;
  justify-content: center;
  align-items: center;
  paddingHorizontal: 30px;
  text-align: center;
`;

export const Linear = styled(LinearGradient)`

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 64px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const PrecipitationsText = styled.Text`
font-size: 18px;
color: #fff;
`;

export const WrapperCondition = styled.View<ModeNight>`
 height: 47px;
 margin-top: 20px;
 border-radius: 20px;
 width: 100%;

 flex-direction: row;
 align-items: center;
 paddingHorizontal: 15px;
 justify-content: space-between;
  
 ${({isModeNight}) => css`
 background-color: ${isModeNight ?  "rgba(8,36,79,0.5)" : "rgba(0,128,255,0.5)"};
 ` }

`;

export const TextCondition = styled.Text``;

export const WrapperTodayAllCondition = styled.View<ModeNight>`
 height: 217px;
 margin-top: 20px;
 border-radius: 20px;
 width: 100%;

 padding: 15px;

 ${({isModeNight}) => css`
 background-color: ${isModeNight ?  "rgba(8,36,79,0.5)" : "rgba(0,128,255,0.5)"};
 ` }
`;

export const WrapperDayNow = styled.View`
flex-direction: row;
justify-content: space-between;
align-items:center;
margin-bottom: 10px;
`;

export const ListDayWrapper = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator: false
})`

`

export const TextDayNow = styled.Text`
font-size: 20px;
font-weight: bold;
color: #fff;


`;

export const TextDay = styled.Text`
  font-size: 18px;
  color: #fff;
`;


export const WrapperDateTime = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
  height: 155px;
  justify-content:space-between;
  margin-right: 34px;
`;

export const TextTemperature = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const TextHour = styled.Text`
  color: #fff;
  font-size: 18px;
`;


export const WrapperNextForecast = styled.View<ModeNight>`
 margin-top: 20px;
 border-radius: 20px;
 width: 100%;
 ${({isModeNight}) => css`
 background-color: ${isModeNight ?  "rgba(8,36,79,0.5)" : "rgba(0,128,255,0.5)"};
 ` }
 padding: 15px;
`;

export const ListDays = styled.ScrollView``;


export const WrapperListDay = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items:center;
 margin-bottom: 20px;
`;

export const TextDayList = styled.Text`
 color: #fff;
 font-size: 18px;
 font-weight: bold;
`;


export const TextTemperatureList = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;