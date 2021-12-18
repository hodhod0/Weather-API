import React, { Component } from "react";
import Search from "./components/Search";

import WeatherItem, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import MostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import Clear from "./img/weather-icons/clear.svg";
import Card from "./components/Card";
import "./App.css";
import FakeWeather from "./data/FakeWeather.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hodhod",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search />
        <div className="all">
          <WeatherItem />
          <Card data={FakeWeather.list} />
        </div>
      </div>
    );
  }
}

export default App;
