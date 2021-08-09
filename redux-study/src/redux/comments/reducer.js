import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUST,
  FETCH_COMMENTS_SUCCESS,
} from "./types";

const init = {
  items: [],
  loding: false,
  err: null,
};

const commentsReducer = (state = init, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUST:
      return {
        ...state,
        loding: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loding: false,
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        err: action.payload,
        loding: false,
      };
    default:
      return state;
  }
};

export default commentsReducer;
