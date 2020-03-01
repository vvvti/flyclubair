import React, { Component } from "react";
import Layer_3 from "./Layer_3.png";
import "./Layer3.css";

class Layer3 extends Component {
  render() {
    return (
      <div className="layer-3">
        <div className="layer3-text">
          <h1>Unlimited Travel</h1>
          <p>
            An all-you-can-fly membership with FlyClubAir allows you to book
            four flights at a time. Fly as often as you want and enjoy the
            simplicity of quick booking and flexible changes through the
            FlyClubAir app or concierge.
          </p>
        </div>
        <div>
          <img src={Layer_3} alt="layer_3"></img>
        </div>
      </div>
    );
  }
}

export default Layer3;
