import React from "react";
import "./ForecastByTime.css";

export default function ForecastByTime() {
  let forecast = null; // this is to clean up the document with each search 
  let ForecastByTimeData = {
    time: "12:00",
    tempMin: 15.3,
    tempMax: 17.9,
    icon: "http://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
  // for (let index = 0; index > 5; index++) {
  
  //   forecast = response.data.list[index];

    <div className="ForecastByTime" >
      <div className="col-sm outsideCard">
        <div className="card text-center externalCard">
          <div className="card-body bg-transparent insideCard">
            <h5 className="card-title"> {ForecastByTimeData.time} </h5>
            <img src={ForecastByTimeData.icon} alt="clear" />

            <div className="row">
              <div className="col">
                <h5 className="card-title p-1">
                  {Math.round(ForecastByTimeData.tempMin)}°
              </h5>
              </div>
              <div className="col">
                <h5 className="card-title p-1">
                  {Math.round(ForecastByTimeData.tempMax)}°
              </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
