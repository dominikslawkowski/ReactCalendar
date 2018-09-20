import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer_dates from './reducer_dates';

const rootReducer = combineReducers({
  date: reducer_dates,
  form: formReducer
});

export default rootReducer;