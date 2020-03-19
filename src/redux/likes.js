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
