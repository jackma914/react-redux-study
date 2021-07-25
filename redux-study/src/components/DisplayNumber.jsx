import React, { useState } from "react";
import store from "../store";

function DisplayNumber() {
  const [state, setState] = useState({ number: store.getState().number });
  store.subscribe(() => {
    setState({ number: store.getState().number });
  });

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={state.number} name="" id="" readOnly />
    </div>
  );
}

export default DisplayNumber;
