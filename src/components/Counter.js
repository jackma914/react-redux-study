import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>submit {counter}</button>
    </div>
  );
}

export default Counter;
