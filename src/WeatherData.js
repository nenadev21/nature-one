import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Conversion from "./Conversion";
import "./WeatherData.css";



export default function WeatherData({ data }) {
    return (
        <div className="WeatherData">



            <h4>
                {data.city}, {data.country}
            </h4>




            <div className="row">


                <div className="col-6 WeatherInfo">
                    <div>
                        <FormattedDate date={data.date} />
                    </div>
                    <div>
                        April, 2021
                    </div>
                </div>

      
                <div className="col-6 WeatherDataCol">

                    <div className="row">
                        <div className="col-6 WeatherDataCol">
                            <WeatherIcon code={data.icon} />
                            </div>
                        <div className="col-6 WeatherDataCol">
                            <Conversion celsius={data.temperature} description={data.description} />
                        </div>
                        

                    </div>

                        

                </div>

                
            </div>
            </div>
    );
}