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

const LIKE_MESSAGE = createActions("likeMessage");
const likeMessage = messageData => (dispatch, getState) => {
  dispatch(LIKE_MESSAGE.START());
  const token = getState().auth.login.result.token;
  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ text: messageData })
  })
    .then(handleJsonResponse)
    .then(result => dispatch(LIKE_MESSAGE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(LIKE_MESSAGE.FAIL(err))));
};

// export const likeMessage = messageData => dispatch => {
//   dispatch(likeMessage(messageData)).then(() => {
//     dispatch(likeMessage());
//   });
// };

const UNLIKE_MESSAGE = createActions("unlikeMessage");
export const unlikeMessage = messageData => (dispatch, getState) => {
  dispatch(UNLIKE_MESSAGE.START());
  const token = getState().auth.login.result.token;
  return fetch(url)
    .then(handleJsonResponse)
    .then(result => {
      result = Object.keys(result.messages).map(key => result.messages[key]);
      dispatch({
        type: UNLIKE_MESSAGE.SUCCESS,
        payload: result
      });
    })
    .catch(err => Promise.reject(dispatch(UNLIKE_MESSAGE.FAIL(err))));
};

export const reducers = {
  likeMessage: createReducer(asyncInitialState, {
    ...asyncCases(LIKE_MESSAGE)
  }),
  unlikeMessage: createReducer(asyncInitialState, {
    ...asyncCases(UNLIKE_MESSAGE)
  })
};
