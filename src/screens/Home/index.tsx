import * as S from "./styles"

import SunLogo from '../../assets/Sun-icon.svg'
import DayCloudLogo from '../../assets/DayClouds.svg'
import CalendarLogo from '../../assets/calendar.svg'
import WindLogo from '../../assets/noun-wind.svg'
import HumidityLogo from '../../assets/humidity.svg'

import {  ScrollView } from "react-native"
import { useEffect, useState } from "react"
import * as Location from 'expo-location';
 
import {SvgUri } from 'react-native-svg'
import { Search } from "../../components/Search"
import { api } from "../../services/api"
import { SECRET_API_KEY } from "../../services/SECRET_API_KEY"
import { converterMetersForKilometer } from "../../utils/convertMetersForKilometer"
import { convertkelvinToCelsius } from "../../utils/converterKelvinToCelsius"
import { formattedDataToString } from "../../utils/formattedData"
import { ReturnImageRef } from "../../utils/imagesReturns"


export function Home() {
  const [inputValue,setInputValue]= useState('');
  const [location, setLocation] = useState({
  });


  

const hoursNow = new Date().getHours();
  const isModeNight = hoursNow >= 18;

      useEffect(()=> {
        async function getUserLocation(){
          const {status} = await Location.requestForegroundPermissionsAsync();

          if(status !== 'granted'){
            return;
          }

          const locationUser = await Location.getCurrentPositionAsync({});
          try {
          const [current,forecast] = await Promise.all([
              await api.get(`data/2.5/weather?lat=${locationUser.coords.latitude}&lon=${locationUser.coords.longitude}&appid=${SECRET_API_KEY}`).then((data)=> data.data),
              await api.get(`data/2.5/forecast?lat=${locationUser.coords.latitude}&lon=${locationUser.coords.longitude}&cnt=24&appid=${SECRET_API_KEY}`).then((data)=> data.data),
            ])

            setLocation({
              current,
              forecast
            })
            
          } catch (error) {
            console.log(error)
          }
        }

        getUserLocation()
      },[])


  return (
    <>
     
      <S.Linear
        colors={isModeNight ? ["#08244F","#134CB5","#0B42AB"]: ['#7abcff', '#59abf8', '#4096ee']}
      />
      <S.Container>
          <Search value={inputValue} onChangeText={setInputValue}/>
          <S.NameCity>{location.current?.name}</S.NameCity>
         <ReturnImageRef weather={location.current?.weather[0].main} />
        <S.Title>
          {convertkelvinToCelsius(location.current?.main.temp).toFixed(0)}º
        </S.Title>

        <S.PrecipitationsText>Precipitations</S.PrecipitationsText>
        <S.PrecipitationsText>Max: {convertkelvinToCelsius(location.current?.main.temp_max).toFixed(0)}º Min: {convertkelvinToCelsius(location.current?.main.temp_min).toFixed(0)}º</S.PrecipitationsText>
      <ScrollView>

        <S.WrapperCondition isModeNight={isModeNight}>
          <S.PrecipitationsText>{location.current?.weather[0].description}</S.PrecipitationsText>
          <S.PrecipitationsText>
            <HumidityLogo width={20} height={20} />
            {location.current?.main.humidity}%</S.PrecipitationsText>
          <S.PrecipitationsText>
            <WindLogo width={20} height={20} />
            {converterMetersForKilometer(location?.current?.wind.speed)} km/h</S.PrecipitationsText>
        </S.WrapperCondition>
{/* 
        <S.WrapperTodayAllCondition isModeNight={isModeNight}>
          <S.WrapperDayNow>
            <S.TextDayNow>Today</S.TextDayNow>
            <S.TextDay>Mar,10</S.TextDay>
          </S.WrapperDayNow>

          <S.ListDayWrapper>
            <S.WrapperDateTime>
              <S.TextTemperature>
                31C
              </S.TextTemperature>
              <DayCloudLogo width={40} height={40} />

              <S.TextHour>15:00</S.TextHour>
            </S.WrapperDateTime>

            <S.WrapperDateTime>
              <S.TextTemperature>
                31C
              </S.TextTemperature>
              <DayCloudLogo width={40} height={40} />

              <S.TextHour>15:00</S.TextHour>
            </S.WrapperDateTime>

            <S.WrapperDateTime>
              <S.TextTemperature>
                31C
              </S.TextTemperature>
              <DayCloudLogo width={40} height={40} />

              <S.TextHour>15:00</S.TextHour>
            </S.WrapperDateTime>

            <S.WrapperDateTime>
              <S.TextTemperature>
                31C
              </S.TextTemperature>
              <DayCloudLogo width={40} height={40} />

              <S.TextHour>15:00</S.TextHour>
            </S.WrapperDateTime>

            <S.WrapperDateTime>
              <S.TextTemperature>
                31C
              </S.TextTemperature>
              <DayCloudLogo width={40} height={40} />

              <S.TextHour>15:00</S.TextHour>
            </S.WrapperDateTime>
          </S.ListDayWrapper>
        </S.WrapperTodayAllCondition> */}


        <S.WrapperNextForecast isModeNight={isModeNight}>
          <S.WrapperDayNow>
            <S.TextDayNow>Next Forecast</S.TextDayNow>
            <CalendarLogo width={24} height={24} />
          </S.WrapperDayNow>

          {location.forecast?.list.map(weather => (
            <S.WrapperListDay key={weather.dt}>
            <S.TextDayList>{formattedDataToString(weather.dt_txt)}</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>{convertkelvinToCelsius(weather?.main.temp).toFixed(0)}º</S.TextTemperatureList>
          </S.WrapperListDay>
          ))}
        </S.WrapperNextForecast>
        </ScrollView>
      </S.Container>
    </>
  )
}