import { combineReducers } from "redux";
import Home from "./home/reducer.js";
const allReducers = combineReducers({
  home: Home
});
export default allReducers;
