import { FETCH_RESPONSE } from '../actions/index';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_RESPONSE:
    return state = action.payload.data;
  }
    return state;
}
