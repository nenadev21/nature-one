
import React, { useState } from "react";
import WeatherData from "./WeatherData";
import "./Weather.css";
import axios from "axios";

export default function Weather({ defaultCity }) {

  const [city, setCity] = useState(defaultCity); //city is first set with the default value at least updated
  const [weatherData, setWeatherData] = useState({ready: false}); //weatherData is set as an empty object in the beginning

  function search() {
    const unit = `metric`;
    const apiKey = `173ed25e9ec2ac3422ba210874fee46d`; 
    const apiEndPointWeather = `https://api.openweathermap.org/data/2.5/weather`;
    const apiUrlWeather = `${apiEndPointWeather}?q=${city}&appid=${apiKey}&units=${unit}`;
  
    axios.get(apiUrlWeather).then(handleResponse);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }

  function handleCityChange(event) {
    setCity(event.target.value); //this is the route from where the updated value is taken
  }


  function handleResponse(response) {
    console.log(response.data);
    
    
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000)

    })
  }

  if (weatherData.ready) { //this is what is returned once the search function have found a default city or a submitted city
    
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                onChange={handleCityChange}
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
        <WeatherData data={weatherData} />
      </div>
    );
  } else {

    search();
    return `Loading...`
  }
}
