import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription({description}) {
  

  return (
    <div className="WeatherDescription">
      <p>{description}</p>
    </div>
  );
}
