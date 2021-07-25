import "./App.css";
import React, { useState } from "react";

import DisplayNumberRoot from "./components/DisplayNumberRoot";
import AddNumberRoot from "./components/AddNumberRoot";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot onClick={(size) => setNumber(number + size)} />
      <DisplayNumberRoot number={number} />
    </div>
  );
}

export default App;
