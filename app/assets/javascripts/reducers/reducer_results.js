import { FETCH_RESULTS } from '../actions/index';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_RESULTS:
    console.log(`data`, action.payload.data);
    return state = action.payload.data;
  }
    return state;
}
