import React from "react";
import "./Conditions.css";

export default function Conditions() {
  let ConditionsData = {
    humidity: 50.2,
    wind: 6.6,
    feelsLike: 13.3
  };
  return (
    <div className="Conditions">
      <ul>
        <li>
          {" "}
          <strong>Humidity: </strong>
          {Math.round(ConditionsData.humidity)}&#x0025;
        </li>
        <li>
          <strong>Wind: </strong>
          {Math.round(ConditionsData.wind)} mph{" "}
        </li>
        <li>
          <strong>Feels like: </strong>
          {Math.round(ConditionsData.feelsLike)}&deg;
        </li>
      </ul>
    </div>
  );
}
