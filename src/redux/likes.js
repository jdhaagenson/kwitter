import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/likes";

const LIKE = createActions("like");
export const like = messageData => (dispatch, getState) => {
  dispatch(LIKE.START());
  const token = getState().auth.login.result.token;
  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageData })
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LIKE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LIKE.FAIL(err))));
};

const UNLIKE = createActions("unlike");
export const unlike = messageData => (dispatch, getState) => {
  dispatch(UNLIKE.START());
  const token = getState().auth.login.result.token;
  return fetch(url, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageData })
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UNLIKE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UNLIKE.FAIL(err))));
};

export const reducers = {
  like: createReducer(asyncInitialState, {
    ...asyncCases(LIKE)
  }),
  unlike: createReducer(asyncInitialState, {
    ...asyncCases(UNLIKE)
  })
};
