import React, { Component } from "react";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

export default class WeatherItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
     const pressure=this.props.data.length>0?this.props.data[0].main.pressure:'';
     const humidly = this.props.data.length>0? this.props.data[0].main.humidity:'';
     const tempMin =this.props.data.length>0? this.props.data[0].main.temp_min:'';
     const temMax =this.props.data.length>0? this.props.data[0].main.temp_max:'';

    return (
      <div className="card">
        {this.props.data && (
          <>
            <img src={MostlyCloudy} alt="sun" width="200" height="147" />
            <h3>overcast clouds</h3>
            <div className="temp">
              <b>Temperature&nbsp;</b> {tempMin}&#176; to {temMax} &#176;c
            </div>
            <div className="temp1">
              <b>humidly &nbsp;</b>{humidly}% &nbsp; <b>Pressure</b> &nbsp;{pressure}
            </div>
          </>
        )}
      </div>
    );
  }
}
