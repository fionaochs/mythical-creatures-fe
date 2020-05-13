import { ADD_CREATURE } from '../actions/creaturesActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_CREATURE:
      return [...state, action.payload];
    default:
      return state;
  }
}

