import React, { Component } from "react";
import "./Toolbar.css";
import logo from "./logo.svg";

class Toolbar extends Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Introduction</a>
              </li>
              <li>
                <a href="/">Why fly with us?</a>
              </li>
              <li>
                <a href="/">Our Destinations</a>
              </li>
              <li>
                <a href="/">How it works</a>
              </li>
              <li>
                <a href="/">Sign up</a>
              </li>
            </ul>
            <div></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
