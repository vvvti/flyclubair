import React, { Component } from "react";
import "./Layer1.css";
import layer_1 from "./layer_1.png";

class Layer1 extends Component {
  render() {
    return (
      <div className="layer-1">
        <img src={layer_1} alt="layer1 background"></img>
        <div className="layer1-desc">
          <h1>Members Only Executive Airline</h1>
          <p>Fly all you want from £1495 a month</p>
        </div>
      </div>
    );
  }
}

export default Layer1;
