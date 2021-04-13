import React from "react";
import "./FormattedDate.css";


export default function FormattedDate({ date }) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let meridian = ["AM", "PM"];
    if (hours < 12) {
        meridian = `AM`;
    } else {
        meridian = `PM`;
    }

    let monthsIndex = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ];
  let month = monthsIndex[date.getMonth()];
  let yy = date.getFullYear();
  let fecha = date.getDate();
    


    return (
        <ul className="FormattedDate">
            <li>
                {day}, {hours}:{minutes} {meridian}
            </li>
            <li>
                { month } { fecha}, {yy}
            </li>
    </ul >
    );
}