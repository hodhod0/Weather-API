import React, { Component } from "react";
import { render } from "react-dom";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Clear from "../img/weather-icons/clear.svg";

export default function Card(props) {
  return (
    <div className="listItem">
      {props.data.map((x,i) => {
        // const img = x.weather[0].main === "Clouds" ? MostlyCloudy : Clear;
        const weatherMain = x.weather[0].main;
        const img = weatherMain === "clouds" ? MostlyCloudy : Clear;

        if(i<=7){return (
          
            <div key={i}> 
            <p>{x.dt_txt}</p>
            <img src={img} alt="sun" width="75" height="75" />
            <p>{x.main.temp_kf} &#176;C</p>
          </div>
          
          
        );}
      })}
    </div>
  );
}
