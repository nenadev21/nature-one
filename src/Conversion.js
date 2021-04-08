import React, {useState} from "react";
import "./Conversion.css";

export default function Conversion({ celsius, description }) {
  const [unit, setUnit] = useState("celsius");

  function toFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function toCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.floor(celsius * 1.8 + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="Conversion">
        <div className="Current"> {Math.floor(celsius)} </div>
        <div className="Description"> {description} </div>
        <div>
          <a href="/" className="Unit" className="btn disabled"  role="button" data-bs-toggle="button" aria-disabled="true"> °C</a>
          <a href="/" className="Unit" onClick={toFahrenheit}  className="btn active" tabindex="-1" aria-pressed="true"  role="button" data-bs-toggle="button"> <strong> °F</strong> </a>
        </div>
      </div>

    );
  } else {
    return (
      <div className="Conversion">
        <div className="Current"> {fahrenheit()} </div>
        <div className="Description"> {description} </div>
        <div>
          <a href="/" className="Unit" onClick={toCelsius} className="btn active" role="button" data-bs-toggle="button" aria-pressed="true"> <strong> °C </strong></a>
          <a href="/" className="Unit"  className="btn disabled" tabindex="-1" aria-disabled="true" role="button" data-bs-toggle="button"> °F</a>
        </div>
      </div>
    );
  }
}
