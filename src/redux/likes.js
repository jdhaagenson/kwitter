// import { store } from "../../redux/index";
// import {
//   domain,
//   jsonHeaders,
//   handleJsonResponse,
//   getInitStateFromStorage,
//   asyncInitialState,
//   asyncCases,
//   createActions,
//   createReducer
// } from "./helpers";
// import { getMessage } from "./messages";

// const url = domain;

<<<<<<< HEAD
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
=======
// const LIKE_MESSAGE = createActions("likeMessage");
// export const likeMessage = (e, messageID) => dispatch => {
//   const state = store.getState();
//   const token = state.auth.login.result.token;

//   dispatch(LIKE_MESSAGE).START();

//   return fetch(url + "/likes", {
//     method: "POST",
//     headers: { Authorization: "Bearer " + token, ...jsonHeaders },
//     body: JSON.stringify({ messageId: messageID })
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       if (result.statusCode === 200) {
//         dispatch(getMessage());
//       } else if (result.statusCode === 400) {
//         dispatch(unlikeMessage(messageID));
//       }
//       dispatch(LIKE_MESSAGE.SUCCESS(result));
//     })
//     .catch(err => {
//       if (err.statusCode === 400) {
//         dispatch(unlikeMessage(messageID));
//       }
//       Promise.reject(dispatch(LIKE_MESSAGE.FAIL(err)));
//     });
// };
// const UNLIKE_MESSAGE = createActions("unlikeMessage");
// export const unlikeMessage = messageID => dispatch => {
//   const state = store.getState();
//   const username = state.auth.login.result.username;
//   const token = state.auth.login.result.token;

//   dispatch(UNLIKE_MESSAGE.START());

//   return fetch(url + "/messages/" + messageID, {
//     method: "GET"
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       result.message.likes.map(each => {
//         if (each.username === username) {
//           const likeID = each.id;
//           fetch(url + "/likes/" + likeID, {
//             method: "DELETE",
//             headers: { Authorization: "Bearer " + token, ...jsonHeaders }
//           })
//             .then(handleJsonResponse)
//             .then(result => {
//               dispatch(getMessage());
//               dispatch(UNLIKE_MESSAGE.SUCCESS(result));
//             });
//         }
//         return each.id;
//       });
//     });
// };

// export const reducers = {
//   like: createReducer(
//     getInitStateFromStorage("handleLike", asyncInitialState),
//     {
//       ...asyncCases(LIKE_MESSAGE)
//     }
//   ),
//   unlike: createReducer(asyncInitialState, {
//     ...asyncCases(UNLIKE_MESSAGE)
//   })
// };
>>>>>>> 34694e76f979d553ebcc87c6d92c8291ba9ad7c6
