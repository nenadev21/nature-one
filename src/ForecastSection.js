import React from "react";
import ForecastByTime from "./ForecastByTime";

export default function ForecastSection() {
  return (

    <div className="container">
      <div className="row">
        <ForecastByTime />
        <ForecastByTime />
        <ForecastByTime />
        <ForecastByTime />
        <ForecastByTime />
      </div>
    </div>
  );
}
