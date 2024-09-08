import { combineReducers } from "redux";

// reducers.
import counterSlice from ".";


const counterReducer = combineReducers({
  counter: counterSlice,
});

export default counterReducer;
