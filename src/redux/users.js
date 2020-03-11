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

  const { username, token } = getState().auth.login.result;
  return fetch(url + "/" + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPDATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPDATE_USER.FAIL(err))));
};

const GET_USER = createActions("updateUser");
export const getUser = username => (dispatch, getState) => {
  dispatch(GET_USER.START());

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => dispatch(GET_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_USER.FAIL(err))));
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
  })
};
