
import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherDescription from "./WeatherDescription";



export default function Weather({defaultCity}) {
  const [weatherData, setWeatherData] = useState({ready:false}); //weatherData is set as an empty object in the beginning
  

  function handleResponse(response) {
    console.log(response.data)
    
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png"

    })
  }

  if (weatherData.ready) {
    
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-success"
                type="submit"
              >
                Search
              </button>
            </div>
            <div class="col-3">
              <button
                className="btn btn-info location"
                type="submit"
              >
                Location
              </button>
            </div>
         
          </div>
        </form>
        <h4>
          {weatherData.city}, {weatherData.country}
        </h4>
        <div className="row">
          <div className="col-6">
            <div>
              April 4th, 2021
            </div>
            <div>
              Monday, 7:38 PM
            </div>
        
          </div>
      
          <div className="col-6">
      
            <div className="CurrentTemperature">
              <img className="icon" src={weatherData.iconUrl} alt="clear" />
              <span> {Math.floor(weatherData.temperature)} </span>
            </div>
            <WeatherDescription description={weatherData.description} />
            {/* this data gets passed to the child component and comes from response */}
          </div>
        </div>
        <div className="Conditions">
          <ul>
            <li>
              {" "}
              <strong>Humidity: </strong>
              {Math.round(weatherData.humidity)}&#x0025;
        </li>
            <li>
              <strong>Wind: </strong>
              {Math.round(weatherData.wind)} mph{" "}
            </li>
            <li>
              <strong>Feels like: </strong>
              {Math.round(weatherData.feelsLike)}&deg;
        </li>
          </ul>
        </div>
      </div>
    );
  } else {

    const unit = `metric`;
    const apiKey = `271356899704dafebcd929dfba41015b`;
    const apiEndPointWeather = `https://api.openweathermap.org/data/2.5/weather`;
    const apiUrlWeather = `${apiEndPointWeather}?q=${defaultCity}&appid=${apiKey}&units=${unit}`;
  
    axios.get(apiUrlWeather).then(handleResponse);
    return `Loading...`
  }
}
