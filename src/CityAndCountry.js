import React from "react";
import "./CityAndCountry.css";

export default function CityAndCountry() {
  let CityAndCountryData = {
    city: "Attleboro",
    country: "US"
  };
  return (
    <h4 className="CityAndCountry">
      {CityAndCountryData.city}, {CityAndCountryData.country}
    </h4>
  );
}
