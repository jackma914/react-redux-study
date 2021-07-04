import { combineReducers } from "redux";

import subscribersReducer from "../redux/reducer/subscribersReducer";
import viewsReducer from "../redux/reducer/viewsReducer";

const rootReducer = combineReducers({
  views: viewsReducer,
  subscribers: subscribersReducer,
});

export default rootReducer;
