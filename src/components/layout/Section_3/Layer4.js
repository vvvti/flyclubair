import React, { Component } from "react";
import layer_4 from "./layer_4.png";
import "./Layer4.css";

class Layer4 extends Component {
  render() {
    return (
      <div className="layer-4">
        <div class="layer4-content">
          <div className="layer4-header">
            <h1>Why fly with us?</h1>
          </div>
          <div className="layer4-list">
            <ul>
              <li>Book in seconds</li>
              <li>Flexible changes</li>
              <li>No fees</li>
              <li>No lines or waiting</li>
            </ul>
          </div>
          <div className="layer4-list">
            <ul>
              <li>Personalised concierge</li>
              <li>Private aviation terminals</li>
              <li>Executive aircraft</li>
              <li>Beverages and amenities</li>
            </ul>
          </div>
        </div>
        <div className="layer4-list"></div>
        <img src={layer_4} alt="layer_4"></img>
      </div>
    );
  }
}

export default Layer4;
