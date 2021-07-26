import "./App.css";
import React, { useState } from "react";

import DisplayNumberRoot from "./components/DisplayNumberRoot";
import AddNumberRoot from "./components/AddNumberRoot";

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </div>
  );
}

export default App;
