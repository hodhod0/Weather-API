import React, { Component } from "react";
import { render } from "react-dom";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Clear from "../img/weather-icons/clear.svg";


export default function Card() {
    return (
        <div className="listItem">
            <div>
              <p>03.00</p>
              <img src={MostlyCloudy} alt="sun" width="75" height="75" />
              <p>8 &#176;C</p>
            </div>
            <div>
              <p>06.00</p>
              <img src={MostlyCloudy} alt="sun" width="75" height="75" />
              <p>9 &#176;C</p>
            </div>
            <div>
              <p>09.00</p>
              <img src={Clear} alt="sun" width="75" height="75" />
              <p>14 &#176;C</p>
            </div>
            <div>
              <p>12.00</p>
              <img src={Clear} alt="sun" width="75" height="75" />
              <p>17 &#176;C</p>
            </div>
            <div>
              <p>15.00</p>
              <img src={Clear} alt="sun" width="75" height="75" />
              <p>18 &#176;C</p>
            </div>
            <div>
              <p>17.00</p>
              <img src={Clear} alt="sun" width="75" height="75" />
              <p>16 &#176;C</p>
            </div>
            <div>
              <p>21.00</p>
              <img src={MostlyCloudy} alt="sun" width="75" height="75" />
              <p>13 &#176;C</p>
            </div>
          </div>
    )
}



