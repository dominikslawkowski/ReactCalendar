import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer_dates from './reducer_dates';
import reducer_new_date from './reducer_new_date';

const rootReducer = combineReducers({
  date: reducer_dates,
  newDate: reducer_new_date,
  form: formReducer
});

export default rootReducer;