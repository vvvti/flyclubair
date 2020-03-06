import React, { Component } from "react";

import "./App.css";

import Toolbar from "./components/layout/Toolbar/Toolbar";
import Layer1 from "./components/layout/Section_1/Layer1";
import Layer4 from "./components/layout/Section_3/Layer4";
import MenuDrawer from "./components/layout/RightDrawer/MenuDrawer";
import Layer2 from "./components/layout/Section_2/Layer2";
import Layer3 from "./components/layout/Section_2/Layer3";
import Layer5 from "./components/layout/Section_4/Layer5";

class App extends Component {
  state = {
    menuDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { menuDrawerOpen: !prevState.menuDrawerOpen };
    });
  };

  render() {
    return (
      <div className="App" style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <MenuDrawer show={this.state.menuDrawerOpen} />
        <main style={{ marginTop: "100px" }}>
          <Layer1 />
          <Layer2 />
          <Layer3 />
          <Layer4 />
          <Layer5 />
        </main>
      </div>
    );
  }
}
export default App;
