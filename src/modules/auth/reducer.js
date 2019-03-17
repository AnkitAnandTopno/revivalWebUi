import { createActions, handleActions } from "redux-actions";
import _ from "lodash";
const defaultState = {
  accessToken: ""
};

export const { setAccessToken } = createActions({
  SET_ACCESS_TOKEN: accessToken => accessToken
});

// Reducer
const reducer = handleActions(
  {
    SET_ACCESS_TOKEN: (state, action) => {
      return _.assign({}, state, action.payload);
    }
  },
  defaultState
);
export default reducer;

export const getAccessToken = state => state.auth.accessToken;
