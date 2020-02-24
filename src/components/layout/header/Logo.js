import React, { Component } from "react";
import logo from "./logo.svg";

export class Logo extends Component {
  render() {
    return (
      <div className="header-logo">
        <img src={logo} alt="logo"></img>
      </div>
    );
  }
}

export default Logo;
