import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temperature, conditions } = weatherData; // Destructure temperature and conditions from props

  const tempColor = temperature > 20 ? "red" : "blue";
  return (
    <div>
      <p>
        <span style={{ color: tempColor }}>Temperature: {temperature}</span>
      </p>
      <p> Conditions: {conditions}</p>
    </div>
  );
};

// export default WeatherDisplay;
// import React from "react";
// const WeatherDisplay = ({ weather }) => {
//   const { temperature, conditions } = weather;
//   const tempStyle = {
//     color: temperature > 20 ? "red" : "blue",
//   };
//   return (
//     <div>
//       <p>
//         <span style={tempStyle}>Temperature: {temperature}</span>
//       </p>
//       <p>Conditions: {conditions}</p>
//     </div>
//   );
// };
// export default WeatherDisplay;
