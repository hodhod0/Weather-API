import React, { useEffect, useState } from "react";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Clear from "../img/weather-icons/clear.svg";


export default function Card(props) {
  console.log(props.data);
   return (
    <div className="listItem">
      {props.data && props.data.map((x, i) => {
         // const img = x.weather[0].main === "Clouds" ? MostlyCloudy : Clear;
        const id = x.weather[0].id;
        const weatherMain = x.weather[0].main;
        const img = weatherMain === "Clouds" ? MostlyCloudy : Clear;
console.log(x.main);
        if (i <= 6) {
          return (
            <div key={i}>
              <p>{x.dt_txt.split(" ")[1].slice(0, 5)}</p>
              <img src={img} alt="sun" width="75" height="75" />
              <p>{Math.floor(x.main.temp - 273.15)} &#176;C</p>
            </div>
          );
        }
      })}
    </div>
  );
}



