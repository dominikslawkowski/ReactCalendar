import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { Navigation, Home } from './components/index';
import Calendar from './containers/Calendar';

configure({ adapter: new Adapter() });

describe('Renders without crashing', () => {
    it('start App', () => {
      shallow(<App />);
    });
});

describe('Testing Home Component' ,() => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Home />) });

    it('includes title', () => {
      expect(wrapper.find('#test').text());//.toEqual('Korpex Calendar');
    });
});

// import { addDate } from './action/index';
// import { connect } from 'react-redux';
// import { shallowWithStore } from 'enzyme-redux';
// import { createMockStore } from 'redux-test-utils';
  
// describe('state and dispatch', () => {
//     it('works', () => {
//       const expectedState = {name: "Wojciech", surname: "Dunaj", team: "Frontend 1", from: new Date(2018, 9, 12), to: new Date(2018, 9, 20), color: '#4286f4'};
//       const mapStateToProps = (state) => ({
//         state
//       });
//       const mapDispatchToProps = (dispatch) => ({
//         dispatchProp() {
//           dispatch(addDate);
//         },
//       });
//       const store = createMockStore(expectedState);
//       const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Calendar);
//       const component = shallowWithStore(<ConnectedComponent />, store);
//       component.props().dispatchProp();

//       expect(component.props().state.name).toBe(expectedState.name);
//       expect(store.isActionDispatched(addDate)).toBe(true);
//     });
// });

import * as actions from './action/index';
import * as types from './constants/action-types';

describe('Testing actions sending', () => {
  it('action to add a date', () => {
    const date = '14-04-1997'
    const expectedAction = {
      type: types.ADD_DATE,
      payload: date
    }
    expect(actions.addDate(date)).toEqual(expectedAction);
  });

  it('action to add a team', () => {
    const team = 'Dev Team'
    const expectedAction = {
      type: types.ADD_TEAM,
      payload: team
    }
    expect(actions.addTeam(team)).toEqual(expectedAction);
  });
})

import reducer_dates, { dates } from './reducers/reducer_dates';
import reducer_teams, { teams } from './reducers/reducer_teams';

describe('Testing dates reducer', () => {
  it('should return the initial state', () => {
    expect(reducer_dates(undefined, {})).toEqual(dates)
  })

  it('should handle ADD_DATE', () => {
    const newDate = {name: "Dominik", surname: "Sławkowski", team: "Frontend 2", from: "2018-10-20", to: "2018-10-21", color: 'red'};
    expect(
      reducer_dates(dates, {
        type: types.ADD_DATE,
        payload: newDate
      })
    ).toEqual([...dates, newDate])
  });
    
})

describe('Testing teams reducer', () => {
  it('should return the initial state', () => {
    expect(reducer_teams(undefined, {})).toEqual(teams)
  })

  it('should handle ADD_TEAMS', () => {
    const newTeam = 'Best unit tests team';
    expect(
      reducer_teams(teams, {
        type: types.ADD_TEAM,
        payload: newTeam
      })
    ).toEqual([...teams, newTeam])
  });
    
})