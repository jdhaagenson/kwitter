import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/users";

const CREATE_USER = createActions("createUser");
export const createUser = userData => dispatch => {
  dispatch(CREATE_USER.START());

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(CREATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(CREATE_USER.FAIL(err))));
};

const UPDATE_USER = createActions("updateUser");
export const updateUser = userData => (dispatch, getState) => {
  dispatch(UPDATE_USER.START());
  const token=getState().auth.login.result.token
  const username=getState().auth.login.result.username

  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPDATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPDATE_USER.FAIL(err))));
};

const GET_USER = createActions("getUser");
export const getUser = username => dispatch => {
  dispatch(GET_USER.START());

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => dispatch(GET_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_USER.FAIL(err))));
};

const SEARCH_USER = createActions('searchUser');
export const searchUser = username => dispatch => {
  dispatch(SEARCH_USER.START());

  return fetch(url + "?limit=100&offset=0", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      result = Object.keys(result.userData).map(key => result.userData[key]);
      dispatch({
        type: SEARCH_USER.SUCCESS,
        payload: result
      });
    })
    .catch(err => Promise.reject(dispatch(SEARCH_USER.FAIL(err))));
};

const UPLOAD_PHOTO = createActions('uploadPhoto');
export const uploadPhoto = (username, picture) => (dispatch, getState) => {
  dispatch(UPLOAD_PHOTO.START());
  const token = getState().auth.login.result.token;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: picture
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPLOAD_PHOTO.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPLOAD_PHOTO.FAIL(err))))
};

const GET_PHOTO = createActions('getPhoto');
export const getPhoto = username => dispatch => {
  dispatch(GET_PHOTO.START());

  return fetch(url + "/" + username + "/picture", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result=> dispatch(GET_PHOTO.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_PHOTO.FAIL(err))))
};



export const reducers = {
  updateUser: createReducer(asyncInitialState, {
    ...asyncCases(UPDATE_USER)
  }),
  createUser: createReducer(asyncInitialState, {
    ...asyncCases(CREATE_USER)
  }),

  getUser: createReducer(asyncInitialState, {
    ...asyncCases(GET_USER)
  }),
  searchUser: createReducer(asyncInitialState, {
    ...asyncCases(SEARCH_USER)
  }),
  uploadPhoto: createReducer(asyncInitialState, {
    ...asyncCases(UPLOAD_PHOTO)
  }),
  getPhoto: createReducer(asyncInitialState, {
    ...asyncCases(GET_PHOTO)
  })
};
