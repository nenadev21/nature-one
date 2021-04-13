import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Conditions from "./Conditions";
import "./WeatherData.css";



export default function WeatherData({ data }) {
    return (
        <div className="WeatherData">
            <h4>
                {data.city}, {data.country}
            </h4>


            <div className="row">


                <div className="col-3">
                        <FormattedDate date={data.date} />
                </div>

                <div className="col-5 Now">
                       <WeatherIcon code={data.icon} color="#363053" size={40} /> 
                        
                        <div className="Current-Temp"> {Math.round(data.temperature)}&#176; C </div>
                        <div className="Description"> {data.description} </div>
                </div>
                
                <div className="col-4">
                        <Conditions data={data} />
                </div>
           
            </div>
            
        </div>
    );
}