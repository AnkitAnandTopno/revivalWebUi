import { createActions, handleActions } from "redux-actions";
import _ from "lodash";
const defaultState = {
  songs: [],
  isUnsaved: false
};

export const { setSongs, addSongs, saveUnsaved } = createActions({
  SET_SONGS: songs => songs,
  ADD_SONGS: songs => songs,
  SAVE_UNSAVED: undefined
});

// Reducer
const reducer = handleActions(
  {
    SET_SONGS: (state, action) => _.assign({}, state, action.payload),
    ADD_SONGS: (state, action) =>
      _.assign({}, state, action.payload, { isUnsaved: true }),
    SAVE_UNSAVED: (state, action) => _.assign({}, state, { isUnsaved: false })
  },
  defaultState
);
export default reducer;

export const getSongs = state => state.songs.songs;
export const getIsUnsaved = state => state.songs.isUnsaved;
