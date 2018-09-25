import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer_dates from './reducer_dates';
import reducer_teams from './reducer_teams';

const rootReducer = combineReducers({
  date: reducer_dates,
  team: reducer_teams,
  form: formReducer
});

export default rootReducer;