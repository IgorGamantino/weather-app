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
}

export function ReturnImageRef ({weather}:Props){

    const isNight= new Date().getHours() >= 18; 

  if(isNight){
    if(weather === 'Thunderstorm')return <Nightthunderstorm  width={200} height={200} />;
    if(weather === 'Rain')return <Nightrain  width={200} height={200} />;
    if(weather === 'Clear')return <Nightclear  width={200} height={200} />;
    if(weather === 'Clouds') return  <Nightclouds  width={200} height={200}/>;
    else{
      return  <Nightclouds  width={200} height={200}/>;
    }
  }else{
    if(weather === 'Thunderstorm')return <Daythunderstorm width={200} height={200}/>;
    if(weather === 'Rain')return <Dayrain  width={200} height={200}/>;
    if(weather === 'Clear')return <Dayclear width={200} height={200}/>;
    if(weather === 'Clouds') return <Dayclouds width={200} height={200}/>
    else{
      return <Dayclouds width={200} height={200}/>
    }
  }
}