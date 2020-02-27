import React from "react";
import "./MenuDrawer.css";

const MenuDrawer = props => {
  let drawerClasses = ["menu-drawer"];
  if (props.show) {
    drawerClasses = "menu-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul className>
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
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <a href="/">Tweeter</a>
        </li>
        <li>
          <a href="/">LinkedIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDrawer;
