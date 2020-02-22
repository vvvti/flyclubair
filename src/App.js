import React from "react";
import Menubar from "./components/layout/header/Menubar";

import "./App.css";
import Layer1 from "./components/layout/Section_1/Layer1";
import Layer4 from "./components/layout/Section_2/Layer4";

function App() {
  return (
    <div className="App">
      <Menubar />
      <Layer1 />
      <Layer4 />
    </div>
  );
}

export default App;
