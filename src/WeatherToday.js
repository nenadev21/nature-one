import React from "react";
import WeatherDescription from "./WeatherDescription";
import CurrentTemperature from "./CurrentTemperature";
import Conversion from "./Conversion";

export default function WeatherToday() {
  return (
    <div id="weather-conditions" className="col-6">
      <div className="row">
        <CurrentTemperature />
        <Conversion />
        <WeatherDescription />
      </div>
    </div>
  );
}
