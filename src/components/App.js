// import React, { useState, useEffect } from "react";
// import "./../styles/App.css";
// import WeatherDisplay from "./WeatherDisplay";

// const App = () => {
//   const [weatherData, setweatherData] = useState({
//     temperature: 0,
//     conditions: "",
//   });

//   useEffect(() => {
//     const weatherInput = {
//       temperature: 25,
//       conditions: "Sunny",
//     };
//     setweatherData(weatherInput);
//   }, []);
//   return (
//     <div>
//       <WeatherDisplay weatherData={weatherData} />

//       {/* Do not remove the main div */}
//     </div>
//   );
// };

// export default App;
import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import WeatherDisplay from "./WeatherDisplay";
const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: "" });
  useEffect(() => {
    // Simulate fetching weather data
    const weatherData = { temperature: 25, conditions: "Sunny" };
    setWeather(weatherData);
  }, []);
  return (
    <div>
      <WeatherDisplay weather={weather} />
    </div>
  );
};
export default App;
