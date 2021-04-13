import React, { useState, useEffect } from "react";
import "./ForecastByTime.css";
import ForecastDay from "./ForecastDay";
import axios from "axios";

export default function ForecastByTime({ coordinates }) {

  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [coordinates]);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }




  if (ready) {
    return (
      <div className="ForecastByTime" >
        <div className="row">
        
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-sm outsideCard" key={index}>
                  <div className="card text-center externalCard">
                    <div className="card-body bg-transparent insideCard">
                
                      <ForecastDay data={dailyForecast} />
                          
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );

  } else {

    const lat = coordinates.lat;
    const lon = coordinates.lon;
    const apiKey = `94bcf4525ee36710c20e6e22fa4bdc5e`;
    const apiEndPointForecast = `https://api.openweathermap.org/data/2.5/onecall`;
    const apiUrlForecast = `${apiEndPointForecast}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrlForecast).then(handleResponse);
    return null;
  } 
    
}


