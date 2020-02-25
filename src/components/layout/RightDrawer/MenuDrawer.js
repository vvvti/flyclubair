import React, { Component } from "react";
import "./MenuDrawer.css";

class MenuDrawer extends Component {
  render() {
    return (
      <nav className="menu-drawer">
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
      </nav>
    );
  }
}

export default MenuDrawer;
