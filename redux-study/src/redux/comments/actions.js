import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUST,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

const fetchCommentSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};
const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};
const fetchCommentRequst = () => {
  return {
    type: FETCH_COMMENTS_REQUST,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentRequst());

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => dispatch(fetchCommentSuccess(comments)))
      .catch((error) => dispatch(fetchCommentFailure(error)));
  };
};
