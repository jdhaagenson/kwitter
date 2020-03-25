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
export const searchUser = () => dispatch => {
  dispatch(SEARCH_USER.START());

  return fetch(url + "?limit=100&offset=0", {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      result = Object.keys(result.users).map(key => result.users[key]);
      dispatch({
        type: SEARCH_USER.SUCCESS,
        payload: result
      });
    })
    .catch(err => Promise.reject(dispatch(SEARCH_USER.FAIL(err))));
};

const SET_PHOTO = createActions('setPhoto');
export const setPhoto = (username, picture) => (dispatch, getState) => {
  dispatch(SET_PHOTO.START());
  const token = getState().auth.login.result.token;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, "Content-Location":picture, Accept:"multipart/form-data" },
    body: picture
  })
    .then(handleJsonResponse)
    .then(result => dispatch(SET_PHOTO.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(SET_PHOTO.FAIL(err))))
};

const GET_PHOTO = createActions('getPhoto');
export const getPhoto = username => dispatch => {
  dispatch(GET_PHOTO.START());

  return fetch(url + "/" + username + "/picture", {
    method: "GET",
    headers: {
      "Content-Disposition":"inline",
      Accept: "image/png"
    }
  })
    .then(handleJsonResponse)
    .then(result=> dispatch(GET_PHOTO.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_PHOTO.FAIL(err))))
};

const DELETE_USER = createActions('deleteUser');
export const deleteUser = username => (dispatch, getState) => {
  const token = getState().auth.login.result.token
  dispatch(DELETE_USER.START());

  return fetch(url + '/' + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => dispatch(DELETE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(DELETE_USER.FAIL(err))))
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
  setPhoto: createReducer(asyncInitialState, {
    ...asyncCases(SET_PHOTO)
  }),
  getPhoto: createReducer(asyncInitialState, {
    ...asyncCases(GET_PHOTO)
  }),
  deleteUser: createReducer(asyncInitialState, {
    ...asyncCases(DELETE_USER)
  })
};
