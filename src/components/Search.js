import React from "react";

import clear from "../img/weather-icons/clear.svg";
// import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };
constructor(props){
  super(props);
  console.log(props);
}
  render() {
    return (
      <div>
         <div className="nav">
          <div className="innerNav">
            <input
              type="text"
              className="search"
              placeholder="Type in a city name"  onChange={event => {
                this.setState({ input: event.target.value });
              }}/>
            <button type="button" className="myButton" onClick={event => {
            this.props.handleInputChange(this.state.input);
          }}>
              FIND WEATHER
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
