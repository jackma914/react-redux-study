import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addView } from "../redux/action/viewsAction";

function Views({ count, addView }) {
  return (
    <Container>
      <div>
        <h2>조회 수 : {count}</h2>
        <button onClick={() => addView()}>조회하기</button>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

const mapDispatchToProps = {
  addView,
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);

const Container = styled.div`
  margin-bottom: 1rem;
`;
