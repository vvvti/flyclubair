import React from "react";
import logo from "./logo.svg";
import DrawerToggleButton from "../RightDrawer/DrawerToggleButton";

import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default toolbar;
