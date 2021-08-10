import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

function Views(props) {
  const [number, setNumber] = useState(1);

  return (
    <div className="items">
      <h2>조회 수: {props.count}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.addView(number)}>구독하기!</button>
    </div>
  );
}

//state를 보냅니다
const mapStateToProps = (state) => {
  return {
    count: state.views.count,
  };
};
//dispatch 입니다.
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => {
//       dispatch(addSubscriber());
//     },
//   };
// };

const mapDispatchToProps = { addView: (number) => addView(number) };

export default connect(mapStateToProps, mapDispatchToProps)(Views);
