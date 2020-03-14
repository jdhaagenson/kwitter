import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    getInitStateFromStorage,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "./helpers";
  
  const url = domain + "/messages";
  
  const POSTMESSAGE = createActions("postMessage");
  export const postMessage = postMessageData => (dispatch, getState) => {
    dispatch(POSTMESSAGE.START());

    const token = getState().auth.postMessage.result.token;

    return fetch(url, {
      method: "POST",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify(postMessageData),
      
    })
      .then(handleJsonResponse)
      .then(result => dispatch(POSTMESSAGE.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(POSTMESSAGE.FAIL(err))));
  };
  
  export const reducers = {
    postMessage: createReducer(asyncInitialState, {
    ...asyncCases(POSTMESSAGE)
})
};
  