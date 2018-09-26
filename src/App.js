import React, { Component } from "react";
import Ninjas from "./Ninjas";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome Home</p>
        <Ninjas name="Ryu" age="25" belt="black" />
      </div>
    );
  }
}

export default App;
