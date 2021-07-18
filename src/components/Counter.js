import React, { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const clickString = props.click || "click1";

  return (
    <div>
      <button onClick={increment}>
        {clickString} {counter}
      </button>
    </div>
  );
}

export default Counter;
