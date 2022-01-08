import React, { useState, useEffect} from "react";
import Search from "./components/Search";

import WeatherItem from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import Card from "./components/Card";
import "./App.css";

const ApiKey = "1aace99e59c7ac9a9fbe3122569409af";

export default function App() {
  const [name, setname] = useState("Hodhod");
  const [data, setdata] = useState([]);
  const [City, setCity] = useState("Paris");
  const handleInputChange = (value) => {
    
    setCity(value);
     
  };

  const fetchMyAPI = () => {
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${ApiKey}`
      )
        .then((response) => response.json())
        .then((res) => {
          setdata(res.list);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      return err;
    }
  };
useEffect(() => {
  fetchMyAPI();
}, [City])
  return (
    <div className="app">
      <Search handleInputChange={(e) => handleInputChange(e)} />
      <div className="all">
        <WeatherItem data={data} />
        <Card data={data} />
      </div>
    </div>
  );
}
