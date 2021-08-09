import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

// state=initialState 의 뜻은 state 값이 어떠한 값도 들어오지 안으면 사용할 초기값을 설정해준것입니다.

const initialState = {
  count: 31,
};

const SubscribersReducer = (state = initialState, action) => {
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

export default SubscribersReducer;
