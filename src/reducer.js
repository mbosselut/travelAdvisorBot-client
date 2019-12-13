import {ON_MESSAGE} from './actions';

const initState = {feed: [{text: "Hello ! Please talk to me", sender: "bot" }], lastSender: "bot"};

export default function(state = initState, action) {
  switch (action.type) {
    case ON_MESSAGE:
      return {feed: [...state.feed, action.payload], lastSender: action.payload.sender};
    default:
      return state;
  }
}
