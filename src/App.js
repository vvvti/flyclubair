import React from "react";

import "./App.css";

import Toolbar from "./components/layout/Toolbar/Toolbar";
import Layer1 from "./components/layout/Section_1/Layer1";
import Layer4 from "./components/layout/Section_2/Layer4";
import MenuDrawer from "./components/layout/RightDrawer/MenuDrawer";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <Toolbar />
      <MenuDrawer />
      <main style={{ marginTop: "100px" }}>
        <Layer1 />
        <Layer4 />
      </main>
    </div>
  );
}

export default App;
