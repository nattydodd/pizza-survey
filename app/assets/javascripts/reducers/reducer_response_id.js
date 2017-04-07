import { CREATE_RESPONSE_ID } from '../actions/index';

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case CREATE_RESPONSE_ID:
    console.log(`data`, action.payload.data.id);
    return state = action.payload.data.id;
  }
    return state;
}
