import React from "react";

export default function DateAndYear() {
  let DateAndYearData = {
    month: "March",
    day: 9,
    year: 2021
  };
  return (
    <div className="DateAndYear">
      <div className="row">
        {DateAndYearData.month} {DateAndYearData.day} {DateAndYearData.year}
      </div>
    </div>
  );
}
