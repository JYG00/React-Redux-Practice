import React, { Component } from "react";
import DisplayNumber from "../containers/displayNumber";

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber unit="kg" />
      </div>
    );
  }
}
