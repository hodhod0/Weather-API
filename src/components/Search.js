import React from "react";

import clear from "../img/weather-icons/clear.svg";
// import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
         <div className="nav">
          <div className="innerNav">
            <input
              type="text"
              className="search"
              placeholder="Type in a city name"
            ></input>
            <button type="button" className="myButton">
              FIND WEATHER
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
