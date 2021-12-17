import React, { Component } from "react";
import { render } from "react-dom";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

export default class WeatherItem extends Component {
  render() {
    return <div className="card">
    <img src={MostlyCloudy} alt="sun" width="200" height="147" />
    <h3>overcast clouds</h3>
    <div className="temp">
      <b>Temperature&nbsp;</b> 10&#176; to 11 &#176;c{" "}
    </div>

    <div className="temp1">
      <b>humidly &nbsp;</b>78% &nbsp; <b>Pressure</b> &nbsp; 1008.48{" "}
    </div>
  </div>;
  }
}
export class SayHello extends Component {
  render() {
    return (
      <div style={{ color: this.props.color, backgroundColor: "yellow" }}>
        Hello {this.props.name}
      </div>
    );
  }
}
