import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temperature, conditions } = weatherData; // Destructure temperature and conditions from props

  const tempColor = temperature > 20 ? "red" : "blue";
  return (
    <div>
      <p>
        <span style={{ color: tempColor }}>Temperature: {temperature}</span>
      </p>
      <p>
        <span>Conditions: {conditions}</span>
      </p>
    </div>
  );
};

export default WeatherDisplay;
