import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temperature, conditions } = weatherData; // Destructure temperature and conditions from props

  const tempColor = temperature > 20 ? "red" : "blue";
  return (
    <div>
      <p style={{ color: tempColor }}>Temperature: {temperature}°C</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
