import React from "react";

const Loader = (props) => {
  return (
    <div className="ui segment" style={{ padding: "100px 0" }}>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Loader.defaultProps = {
  message : "from farmooooooo"
}

export default Loader;
