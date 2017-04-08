import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuestionsReducer from './reducer_questions';
import ResponseIdReducer from './reducer_response_id';
import ResultsReducer from './reducer_results';
import ResponseReducer from './reducer_response';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
  responseId: ResponseIdReducer,
  results: ResultsReducer,
  form: formReducer,
  response: ResponseReducer,
});

export default rootReducer;
