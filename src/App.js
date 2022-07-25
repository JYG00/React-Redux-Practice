import React, { Component } from "react";
import "./App.css";
import AddNumber from "./components/AddNumber";
import DisplayNumber from "./components/displayNumber";
class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber></AddNumber>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot />
    </div>
  );
}

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber />
      </div>
    );
  }
}

export default App;
