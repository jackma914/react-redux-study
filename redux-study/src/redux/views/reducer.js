import { ADD_VIEW } from "./types";

const init = {
  count: 0,
};

const viewsReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload,
      };
    default:
      return state;
  }
};

export default viewsReducer;
