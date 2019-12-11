import {ON_MESSAGE} from './actions';

const initState = [{ text: "Hello ! Please talk to me", sender: "bot" }];

export default function(state = initState, action) {
  switch (action.type) {
    case ON_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
