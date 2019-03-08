export const GET_REQUEST = "get";
export const POST_REQUEST = "post";

const ACCOUNT = "auth";
const SONGS = "songs";

const authApi = {
  login: {
    type: POST_REQUEST,
    path: `${ACCOUNT}/login`
  },
  logOut: {
    type: POST_REQUEST,
    path: `${ACCOUNT}/logout`
  }
};
const songApi = {
  update: {
    type: GET_REQUEST,
    path: `${SONGS}/updated`
  }
};
export { authApi, songApi };
