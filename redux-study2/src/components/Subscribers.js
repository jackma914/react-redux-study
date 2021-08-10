import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/subscribers/actions";

function Subscribers(props) {
  return (
    <div className="items">
      <h2>구독자 수: {props.count}</h2>
      <button onClick={() => props.addSubscriber()}>구독하기!</button>
    </div>
  );
}

//state를 보냅니다
const mapStateToProps = (state) => {
  return {
    count: state.subscribers.count,
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

const mapDispatchToProps = { addSubscriber };

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
