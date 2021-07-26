import React, { useState } from "react";

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
          props.onClick(size);
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
