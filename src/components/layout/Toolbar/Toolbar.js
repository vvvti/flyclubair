import React, { Component } from "react";
import logo from "./logo.svg";
import DrawerToggleButton from "../RightDrawer/DrawerToggleButton";

import "./Toolbar.css";

class Toolbar extends Component {
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div className="toolbar__logo">
            <img src={logo} alt="logo"></img>
          </div>
          <div>
            <DrawerToggleButton />
          </div>
        </nav>
      </header>
    );
  }
}

export default Toolbar;
