// import { store } from "../redux/index";
import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";
import { getMessage } from "./messages";

const url = domain;

const LIKE_MESSAGE = createActions("likeMessage");

export const likeMessage = (e, id) => (dispatch, getState) => {
  dispatch(LIKE_MESSAGE.START());

  const token = getState().auth.login.result.token;
  console.log(token);

  return fetch(url + "/likes", {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId: id })
  })
    .then(handleJsonResponse)
    .then(result => {
      if (result.statusCode === 200) {
        dispatch(getMessage());
      } else {
      }
      dispatch(LIKE_MESSAGE.SUCCESS(result));
    })

    .catch(err => Promise.reject(dispatch(LIKE_MESSAGE.FAIL(err))));
};

const UNLIKE_MESSAGE = createActions("unlikeMessage");
export const unlikeMessage = (e, id) => (dispatch, getState) => {
  dispatch(UNLIKE_MESSAGE.START());
  const token = getState().auth.login.result.token;
  return fetch(url + "/likes", {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId: id })
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UNLIKE_MESSAGE.SUCCESS(result)))
    .ctach(err => Promise.reject(dispatch(UNLIKE_MESSAGE.FAIL(err))));
};

export const reducers = {
  like: createReducer(asyncInitialState, {
    ...asyncCases(LIKE_MESSAGE)
  }),
  unlike: createReducer(asyncInitialState, {
    ...asyncCases(UNLIKE_MESSAGE)
  })
};
