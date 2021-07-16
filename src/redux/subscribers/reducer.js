import { REMOVE_SUBSCRIBER, ADD_SUBSCRIBER } from "./types";

const initialState = {
  count: 360,
};
const addSubscribersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default addSubscribersReducer;
