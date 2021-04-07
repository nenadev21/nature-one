import React from "react";
import "./CityAndCountry.css";

export default function CityAndCountry({city, defaultCity}) {
  let country = "USA";
  if (city) {

  
  return (
    <h4 className="CityAndCountry">
      {city}, {country}
    </h4>
    );
  } else {
    <h4 className="CityAndCountry">
      {defaultCity}, {country}
    </h4>
  }
}
