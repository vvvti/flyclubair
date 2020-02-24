import React from "react";

import "./App.css";
import Layer1 from "./components/layout/Section_1/Layer1";
import Layer4 from "./components/layout/Section_2/Layer4";
import Toolbar from "./components/layout/Toolbar/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <main>
        <Layer1 />
        <Layer4 />
      </main>
    </div>
  );
}

export default App;
