import React, { Component } from "react";
import Looder from "./Looder";
import SessionDisplay from "./SessionDisplay";

class GeoFindeMe extends Component {
  state = {
    lat: null,
    month: "",
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage) {
      return (
        <div className="ui container">
          <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
              We're sorry we can't access to your location
            </div>
            <p>Error Message: {this.state.errorMessage}</p>
          </div>
        </div>
      );
    }
    if (this.state.lat && this.state.long) {
      return <SessionDisplay lat={this.state.lat} long={this.state.month} />;
    }
    return (
      <Looder />
    );
  }
}

export default GeoFindeMe;
