import React from "react";
import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import store from "../store";

// export default function () {
//   return (
//     <AddNumber
//       onClick={(size) => {
//         store.dispatch({ type: "INCREMENT", size: size });
//       }}
//     />
//   );
// }
