import Dayclouds from "../assets/DayClouds.svg";
import Nightclouds from "../assets/NightClouds.svg";
import Dayrain from "../assets/DayRain.svg";
import Nightrain from  "../assets/NightRain.svg";
import Daythunderstorm from  "../assets/DayStorm.svg";
import Nightthunderstorm from  "../assets/NightStorm.svg";
import Dayclear from  "../assets/Sun.svg";
import Nightclear from  "../assets/Night.svg";
import Othernight from  "../assets/DayClouds.svg";
import Otherday from  "../assets/NightClouds.svg";

type Props ={
  weather: string
  widht?: number;
}

export function ReturnImageRef ({weather,widht=40}:Props){

  if(!weather)return;

    const isNight= new Date().getHours() >=18; 

  if(isNight){
    if(weather === 'Thunderstorm')return <Nightthunderstorm  width={widht} height={widht} />;
    if(weather === 'Rain')return <Nightrain  width={widht} height={widht} />;
    if(weather === 'Clear')return <Nightclear  width={widht} height={widht} />;
    if(weather === 'Clouds') return  <Nightclouds  width={widht} height={widht}/>;
    else{
      return  <Otherday  width={widht} height={widht}/>;
    }
  }else{
    if(weather === 'Thunderstorm')return <Daythunderstorm width={widht} height={widht}/>;
    if(weather === 'Rain')return <Dayrain  width={widht} height={widht}/>;
    if(weather === 'Clear')return <Dayclear width={widht} height={widht}/>;
    if(weather === 'Clouds') return <Dayclouds width={widht} height={widht}/>
    else{
      return <Othernight width={widht} height={widht}/>
    }
  }
}