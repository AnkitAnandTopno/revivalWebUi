import { createActions, handleActions } from "redux-actions";
import _ from "lodash";
const defaultState = {
  songs: []
};

export const { setSongs } = createActions({
  SET_SONGS: songs => songs
});

// Reducer
const reducer = handleActions(
  {
    SET_SONGS: (state, action) => _.assign({}, state, action.payload)
  },
  defaultState
);
export default reducer;
