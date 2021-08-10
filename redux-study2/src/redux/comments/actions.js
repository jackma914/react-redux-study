import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./types";

const fetchCommentsSuccess = (commments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: commments,
  };
};
const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};
const fetchCommentsFailure = (err) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: err,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res
        .json()
        .then((commments) => dispatch(fetchCommentsSuccess(commments)))
        .catch((err) => dispatch(fetchCommentsFailure(err)))
    );
  };
};
