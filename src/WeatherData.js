import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherDescription from "./WeatherDescription";



export default function WeatherData({ data }) {
    return (
        <div>
            <h4>
                {data.city}, {data.country}
            </h4>
            <div className="row">
                <div className="col-6">
                    <div>
                        <FormattedDate date={data.date} />
                    </div>
        
                </div>
      
                <div className="col-6">
      
                    <div className="CurrentTemperature">
                        <img className="icon" src={data.iconUrl} alt="clear" />
                        <span> {Math.floor(data.temperature)} </span>
                    </div>
                    <WeatherDescription description={data.description} />
                    {/* this data gets passed to the child component and comes from response */}
                </div>
            </div>
            <div className="Conditions">
                <ul>
                    <li>
                        {" "}
                        <strong>Humidity: </strong>
                        {Math.round(data.humidity)}&#x0025;
        </li>
                    <li>
                        <strong>Wind: </strong>
                        {Math.round(data.wind)} mph{" "}
                    </li>
                    <li>
                        <strong>Feels like: </strong>
                        {Math.round(data.feelsLike)}&deg;
        </li>
                </ul>
            </div>
        </div>
    );
}