import React, { Component } from "react";
import Layer_2 from "./Layer_2.png";
import "./Layer2.css";

class Layer2 extends Component {
  render() {
    return (
      <div className="layer-2">
        <div>
          <img src={Layer_2} alt="layer_2"></img>
        </div>
        <div className="layer2-text">
          <h1>Luxury Service</h1>
          <p>
            Fly comfortably from private aviation terminals on a Beechcraft King
            Air executive aircraft. A FlyClubAir concierge welcomes you and
            provides assistance with ground transportation, travel logistics,
            and amenities.
          </p>
        </div>
      </div>
    );
  }
}

export default Layer2;
