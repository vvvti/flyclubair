import React, { Component } from "react";
import Layer_9 from "./Layer_9.png";
import "./Layer9.css";

export class Layer9 extends Component {
  render() {
    return (
      <div className="layer-9">
        <div className="layer9-header">
          <h1>How it works</h1>
          <p>Fly as often as you want across the growing FlyClubAir network</p>
        </div>
        <img src={Layer_9} alt="layer9"></img>
      </div>
    );
  }
}

export default Layer9;
