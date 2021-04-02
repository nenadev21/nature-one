import React from "react";
import WeatherDescription from "./WeatherDescription";

export default function DayAndTime() {
  let DayAndTimeData = {
    day: "Tuesday",
    time: "09:54",
    meridian: "AM"
  };
  return (
    <div className="DayAndTime">
      <div className="row">
        {" "}
        {DayAndTimeData.day}, {DayAndTimeData.time} {DayAndTimeData.meridian}
        {WeatherDescription.description}
      </div>
    </div>
  );
}
