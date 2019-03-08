import { combineReducers } from "redux";
import Home from "./home/reducer.js";
import songs from "./songs/reducer.js";
import auth from "./auth/reducer.js";
const allReducers = combineReducers({
  home: Home,
  songs: songs,
  auth: auth
});
export default allReducers;
