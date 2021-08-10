import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux/index";

const Comments = (props) => {
  useEffect(() => {
    props.fetchComments();
  }, []);

  const commentsItems = props.loading ? (
    <div>is loading...</div>
  ) : (
    props.comments.map((comment) => (
      <div key={comment.id}>
        <h3>{comment.name}</h3>
      </div>
    ))
  );

  return <div className="items">{commentsItems} </div>;
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments.items,
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
