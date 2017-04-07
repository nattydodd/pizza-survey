import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionsReducer from './reducer_questions';
import ResponseIdReducer from './reducer_response_id';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  responseId: ResponseIdReducer,
  form: formReducer,
});

export default rootReducer;
