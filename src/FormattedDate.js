import React from "react";


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
    


    return <div className="FormattedDate"> {day}, {hours}:{minutes} {meridian} 
    </div>;
}