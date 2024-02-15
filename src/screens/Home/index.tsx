import * as S from "./styles"

import SunLogo from '../../assets/Sun-icon.svg'
import DayCloudLogo from '../../assets/DayClouds.svg'
import CalendarLogo from '../../assets/calendar.svg'

import {  ScrollView } from "react-native"
import { useEffect, useState } from "react"
import * as Location from 'expo-location';


import { Search } from "../../components/Search"

export function Home() {
  const [inputValue,setInputValue]= useState('');
  const [location, setLocation] = useState(null || {});




const hoursNow = new Date().getHours();
  const isModeNight = hoursNow >= 18;

      useEffect(()=> {

        async function getUserLocation(){
          const {status} = await Location.requestForegroundPermissionsAsync();

          if(status !== 'granted'){
            return;
          }

          const locationUser = await Location.getCurrentPositionAsync({});

          setLocation(locationUser)
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
        <SunLogo width={200} height={200} />
        <S.Title>
          28º
        </S.Title>

        <S.PrecipitationsText>Precipitations</S.PrecipitationsText>
        <S.PrecipitationsText>Max: 34 Min: 28</S.PrecipitationsText>

      <ScrollView>

        <S.WrapperCondition isModeNight={isModeNight}>
          <S.PrecipitationsText>18%</S.PrecipitationsText>
          <S.PrecipitationsText>18%</S.PrecipitationsText>
          <S.PrecipitationsText>18%</S.PrecipitationsText>
        </S.WrapperCondition>

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
        </S.WrapperTodayAllCondition>


        <S.WrapperNextForecast isModeNight={isModeNight}>
          <S.WrapperDayNow>
            <S.TextDayNow>Next Forecast</S.TextDayNow>
            <CalendarLogo width={24} height={24} />
          </S.WrapperDayNow>

          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
          <S.WrapperListDay>

            <S.TextDayList>Monday</S.TextDayList>
            <DayCloudLogo width={40} height={40} />

            <S.TextTemperatureList>13</S.TextTemperatureList>
          </S.WrapperListDay>
        </S.WrapperNextForecast>
        </ScrollView>
      </S.Container>
    </>
  )
}