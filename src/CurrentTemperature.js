import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  let CurrentTemperatureData = {
    temperature: 18.2,
    icon: "http://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
    <h1 className="CurrentTemperature">
      <img className="icon" src={CurrentTemperatureData.icon} alt="clear" />
      <span> {Math.floor(CurrentTemperatureData.temperature)} </span>
    </h1>
  );
}
