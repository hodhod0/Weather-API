import React, { Component } from "react";
import Search from "./components/Search";

import WeatherItem from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import MostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import Clear from "./img/weather-icons/clear.svg";
import Card from "./components/Card";
import "./App.css";
import FakeWeather from "./data/FakeWeather.json";

const ApiKey = "1aace99e59c7ac9a9fbe3122569409af";
 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hodhod",
      data: [],
      City:'Paris'
    };
  }

  async componentDidMount() {
    // fetch().then().catch().finally();
    this.fetchMyAPI();
  }

  handleInputChange = (value) => {
    console.log(value);
    this.setState({ City: value });
    this.fetchMyAPI();
  };

  fetchMyAPI() {
    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.City}&appid=${ApiKey}`
      )
        .then((response) => response.json())
        .then((res) => {
          this.setState({ data: res.list });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  render() {
    return (
      <div className="app">
        <Search handleInputChange={(e)=>this.handleInputChange(e)} />
        <div className="all">
          <WeatherItem data={this.state.data} />
          <Card data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
