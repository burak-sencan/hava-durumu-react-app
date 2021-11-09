import "./App.css";
import React, { useState } from "react";
import WheatherResult from "./WheatherResult";

function App() {
  const APP_KEY = "b7d7776cc54f4485802213430210911";
  let cityInput = "";
  const [wheatherData, setWheatherData] = useState([]);
  function cityText() {
    document.querySelector("input").addEventListener("input", (e) => {
      cityInput = e.target.value;
      //console.log(cityInput);
    });
  }

  async function getData(value) {
    if (value==="") return;
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`
    );
    const result = await data.json();
    setWheatherData(result.forecast.forecastday);
    console.log(result.forecast.forecastday);
  }
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Enter the city" onChange={cityText} />
        <button  onClick={() => getData(cityInput)}>Search</button>
      </div>
      {wheatherData.map((item) => (
        <WheatherResult
          key={item.date}
          date={item.date}
          mintemp={item.day.mintemp_c}
          maxtemp={item.day.maxtemp_c}
          condition={item.day.condition.text}
          icon={item.day.condition.icon}
        />
      ))}
    </div>
  );
}

export default App;
