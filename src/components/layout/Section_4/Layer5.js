import React, { Component } from "react";
import "./Layer5.css";
import Layer_6 from "./Layer_6.png";
import Layer_7 from "./Layer_7.png";
import Layer_8 from "./Layer_8.png";

class Layer5 extends Component {
  render() {
    return (
      <div className="layer-5">
        <div>
          <h1>Our Destinations</h1>
          <p>Our Inaugural Routes</p>
        </div>
        <div className="layer5-container">
          <div className="layer5-route">
            <h2>London</h2>
            <img src={Layer_6} alt="London"></img>
          </div>
          <div className="layer5-route">
            <h2>Manchester</h2>
            <img src={Layer_7} alt="Manchester"></img>
          </div>
          <div className="layer5-route">
            <h2>Edinburgh</h2>
            <img src={Layer_8} alt="Edinburgh"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Layer5;
