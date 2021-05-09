import React from "react";
import GeoFidMe from "./components/GeoFidMe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <GeoFidMe />
      </React.Fragment>
    );
  }
}

export default App;
