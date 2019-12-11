import { ApiAiClient } from "api-ai-javascript";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sendMessage, ON_MESSAGE } from './actions';
import reducer from './reducer';
const accessToken = "c7571ef30f7c4abf81066f1d1a2de3e4";
const client = new ApiAiClient({ accessToken });

const messageMiddleware = () => next => action => {
  next(action);
  if (action.type === ON_MESSAGE) {
    const { text } = action.payload;

    client.textRequest(text).then(onSuccess);
    function onSuccess(response) {
      // console.log(response.result.fulfillment.speech);
      next(sendMessage(response.result.fulfillment.speech, "bot"));
    }
  }
};

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(messageMiddleware))
);
