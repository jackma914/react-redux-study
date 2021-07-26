import React from "react";

function DisplayNumber(props) {
  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={props.number} name="" id="" readOnly />
    </div>
  );
}

export default DisplayNumber;
