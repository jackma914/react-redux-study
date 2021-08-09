import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

//props 대신 디스트럭 처리를 해주었습니다.
//props는 {count: , addSubscriber} 값이 들어있습니다.
function Views({ count, addView }) {
  const [number, setNumber] = useState(1);
  return (
    <div className="items">
      <p>조회 수 : {count}</p>
      <input
        type="text"
        name=""
        id=""
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => addView(number)}>조회하기</button>
    </div>
  );
}

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
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
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
