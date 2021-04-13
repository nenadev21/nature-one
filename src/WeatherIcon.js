import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./WeatherIcon.css";


export default function WeatherIcon({ code, size, color }) {
    const iconMapping = {
        "01d": "CLEAR_DAY",
        "02d": "PARTLY_CLOUDY_DAY",
        "03d": "CLOUDY",
        "04d": "FOG",
        "09d": "RAIN",
        "10d": "RAIN",
        "11d": "RAIN",
        "13d": "SNOW",
        "50d": "WIND",
        "01n": "CLEAR_DAY",
        "02n": "PARTLY_CLOUDY_DAY",
        "03n": "CLOUDY",
        "04n": "FOG",
        "09n": "RAIN",
        "10n": "RAIN",
        "11n": "RAIN",
        "13n": "SNOW",
        "50n": "WIND"
    };
    return <div className="WeatherIcon">
          <ReactAnimatedWeather
    icon={iconMapping[code]}
    color={color}
    size={size}
    animate={true}
  />
    
</div>

    
}

//how can I connect the code of the icon with the object of this external component?