import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temperature, conditions } = weatherData; // Destructure temperature and conditions from props

  const tempColor = temperature > 20 ? "red" : "blue";
  return (
    <div>
      <span style={{ color: tempColor }}>Temperature: {temperature}</span>
      <span>Conditions: {conditions}</span>
    </div>
  );
};

export default WeatherDisplay;
