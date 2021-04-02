import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription() {
  let WeatherDescriptionData = {
    description: "Clear"
  };

  return (
    <div className="WeatherDescription">
      <p>{WeatherDescriptionData.description}</p>
    </div>
  );
}
