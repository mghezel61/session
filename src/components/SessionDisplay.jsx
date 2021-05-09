import React from "react";
import Config from "./Config";

const getSession = (latitude, month) => {
  if (month > 2 && month <= 5) {
    return latitude > 0 ? "Spring" : "Fall";
  }

  if (month > 5 && month <= 8) {
    return latitude > 0 ? "Summer" : "Winter";
  }

  if (month > 8 && month <= 10) {
    return latitude > 0 ? "Fall" : "Spring";
  }

  if (month > 10 && month <= 12) {
    return latitude > 0 ? "Winter" : "Summer";
  }
};



function SessionDisplay(props) {
  const season = getSession(props.lat, new Date().getMonth());
  const { icon, text  } = Config[season];
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <h1>I am Here</h1>

      <h2 style={{ margin: "10px 0" }}>
        <i className={`${icon} icon`}></i>
        {text}
        <i className={`${icon} icon`}></i>
      </h2>
      <p>Latitude: {props.lat}</p>
      <p>Session: {season}</p>
    </div>
  );
}

export default SessionDisplay;
