import { REMOVE_SUBSCRIBER, ADD_SUBSCRIBER } from ".//types";

const init = {
  count: 370,
};

const subscribersReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      };
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: (state.count = 1),
      };
    default:
      return state;
  }
};

export default subscribersReducer;
