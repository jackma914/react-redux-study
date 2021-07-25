import React, { useState } from "react";
import store from "../store";

function AddNumber(props) {
  const [size, setSize] = useState(1);

  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        name=""
        id=""
        onClick={() => {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      />
      <input
        type="text"
        value={size}
        name=""
        id=""
        onChange={(e) => setSize(Number(e.target.value))}
      />
    </div>
  );
}

export default AddNumber;
