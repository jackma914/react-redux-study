import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/action/subscribeAction";

function Subscribers({ count, addSubscriber }) {
  return (
    <Container>
      <div>
        <h2>구독자 수 : {count}</h2>
        <button onClick={() => addSubscriber()}>구독</button>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber),
//   };
// };

const mapDispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);

const Container = styled.div`
  margin-bottom: 1rem;
`;
