import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/index";

//props 대신 디스트럭 처리를 해주었습니다.
//props는 {count: , addSubscriber} 값이 들어있습니다.
function Subscribers({ count, addSubscriber }) {
  return (
    <div className="items">
      <p>구독자 수 : {count}</p>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  );
}

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

//mapDispatchToProps 에는 두가지 인자가 들어갈수있습니다. 함수와 객체입니다.
// 두가지를 구현해보았습니다.

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

const mapDispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
