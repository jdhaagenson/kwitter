import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";
const url = domain + "/messages";
const CREATE_MESSAGE = createActions("createMessage");
const _createMessage = messageData => (dispatch, getState) => {
  dispatch(CREATE_MESSAGE.START());
  const token = getState().auth.login.result.token;
  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageData })
  })
    .then(handleJsonResponse)
    .then(result => dispatch(CREATE_MESSAGE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(CREATE_MESSAGE.FAIL(err))));
};
const GET_MESSAGE = createActions("getMessage");
export const getMessage = messageData => (dispatch, getState) => {
  dispatch(GET_MESSAGE.START());
  const token = getState().auth.login.result.token;
  return fetch(url + "?limit=65&offset=0")
    .then(handleJsonResponse)
    .then(result => {
      result = Object.keys(result.messages).map(key => result.messages[key]);
      dispatch({
        type: GET_MESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => Promise.reject(dispatch(GET_MESSAGE.FAIL(err))));
};
export const createMessage = messageData => dispatch => {
  dispatch(_createMessage(messageData)).then(() => {
    dispatch(getMessage());
  });
};
export const reducers = {
  createMessage: createReducer(asyncInitialState, {
    ...asyncCases(CREATE_MESSAGE)
  }),
  getMessage: createReducer(asyncInitialState, {
    ...asyncCases(GET_MESSAGE)
  })
};
