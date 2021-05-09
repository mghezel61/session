import "../css/seasonDisplay.css";
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
  const { icon, text } = Config[season]; // Object distructuring
  return (
      <div className={`season-display ${season}`}>
        <i className={`${icon} huge icon icon-left`}></i>
        <h2 style={{ margin: "10px 0" }}>{text}</h2>
        <i className={`${icon} huge icon icon-right`}></i>
    </div>
  );
}

export default SessionDisplay;
