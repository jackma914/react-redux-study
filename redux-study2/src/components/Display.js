import React from "react";
import { connect } from "react-redux";

const Display = (props) => {
  return (
    <div>
      <p>구독자 수 : {props.count}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    //이 값이 Display의 props로 들어갑니다.
    count: state.subscribers.count,
  };
};

export default connect(mapStateToProps)(Display);
