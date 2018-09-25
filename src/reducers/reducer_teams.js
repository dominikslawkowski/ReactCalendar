import { ADD_TEAM } from '../constants/action-types';

export const teams = ['Frontend 1', 'Frontend 2', 'Backend 1', 'Backend 2', 'Teasters', 'DevOps'];

const datesReducer = (state = teams, action) => {
  switch(action.type){
      case ADD_TEAM:
          return [...state, action.payload];
      default:
      return state;
  }
};

export default datesReducer;