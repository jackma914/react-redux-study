import DisplayNumber from "../components/DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
  return {
    number: state.number,
  };
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// import React, { useState } from "react";
// import store from "../store";

// export default function () {
//   const [state, setState] = useState({ number: store.getState().number });

//   store.subscribe(() => {
//     setState({ number: store.getState().number });
//   });
//   return <DisplayNumber number={state.number} />;
// }
