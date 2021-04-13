import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay({ data }) {

    function minTemperature () {
        return (
            <div>
                {Math.round(data.temp.min)}&#176;
            </div>
        );
    }
    function maxTemperature () {
        return (
            <div>
                {Math.round(data.temp.max)}&#176;
            </div>
        );
    }
    
    function day() {
        let date = new Date(data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    console.log(data);
    return (
        <div>

<h5 className="card-title"> {day()} </h5>
              <WeatherIcon code={data.weather[0].icon} color="#363053" size={36} />

              <div className="row">
                <div className="col">
                  <h5 className="card-title p-1">
                    {minTemperature()}
              </h5>
                </div>
                <div className="col">
                  <h5 className="card-title p-1">
                    {maxTemperature()}
              </h5>


                </div>
            </div>
              </div>

    );
}