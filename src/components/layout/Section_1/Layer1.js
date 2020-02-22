import React, { Component } from "react";
import layer_1 from "./layer_1.png";

class Layer1 extends Component {
  render() {
    return (
      <div className="layer-1">
        <img src={layer_1} alt="layer_1"></img>
      </div>
    );
  }
}

export default Layer1;
