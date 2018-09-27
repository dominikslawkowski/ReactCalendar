import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import { addDate } from './action/index';
import * as actions from './action/index';
import * as types from './constants/action-types';

import reducer_dates, { dates } from './reducers/reducer_dates';
import reducer_teams, { teams } from './reducers/reducer_teams';

import App from './App';
import { Home } from './components/index';
import { Calendar } from './containers/Calendar';
import { Reservation } from './containers/Reservation';
import { Teams } from './containers/Teams';

configure({ adapter: new Adapter() });

describe('Renders without crashing', () => {
    it('start App', () => {
      shallow(<App />);
    });
});
  
describe('state and dispatch', () => {
    it('works', () => {
      const expectedState = {name: "Wojciech", surname: "Dunaj", team: "Frontend 1", from: new Date(2018, 9, 12), to: new Date(2018, 9, 20), color: '#4286f4'};
      const mapStateToProps = (state) => ({
        state
      });
      const mapDispatchToProps = (dispatch) => ({
        dispatchProp() {
          dispatch(addDate);
        },
      });
      const store = createMockStore(expectedState);
      const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Calendar);
      const component = shallowWithStore(<ConnectedComponent />, store);
      component.props().dispatchProp();

      expect(component.props().state.name).toBe(expectedState.name);
      expect(store.isActionDispatched(addDate)).toBe(true);
    });
});

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

describe('Testing components', () => {
  describe('Home', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = mount(<Home />);
      expect(enzymeWrapper.find('div[data-test="title"]').text()).toBe('Korpex Calendar');
      expect(enzymeWrapper.find('div[data-test="subtitle"]').text()).toBe('Book the date of your holiday');
      expect(enzymeWrapper.find('button').text()).toEqual('Reservation');
    })
  })
  
describe('Navigation', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = mount(<App />);
      expect(enzymeWrapper.find('a[data-test="home"]').text()).toBe('Home');
      expect(enzymeWrapper.find('a[data-test="calendar"]').text()).toBe('Calendar');
      expect(enzymeWrapper.find('a[data-test="reservation"]').text()).toBe('Reservation');
      expect(enzymeWrapper.find('a[data-test="teams"]').text()).toBe('Teams');
    })
  });
});

describe('Testing containers', () => {
    describe('Calendar', () => {
      const enzymeWrapper = mount(<Calendar date={dates}/>);
      it('after button clikc should set state "currentDay"', ()=> {
        enzymeWrapper.find('button[data-test="button-left"]').simulate('click');
        expect(enzymeWrapper.state('currentDay')).toBe(-1);

        enzymeWrapper.setState({currentDay: 0});
        enzymeWrapper.find('button[data-test="button-right"]').simulate('click');
        expect(enzymeWrapper.state('currentDay')).toBe(1);
      })
    })
    describe('Reservation', () => {
      const enzymeWrapper = shallow(<Reservation handleSubmit={()=>{}} date={dates} teams={teams}/>);
        it('checking form fields', () => {
          expect(enzymeWrapper.find('[name="name"]').prop('type')).toBe("text");
          expect(enzymeWrapper.find('[name="surname"]').prop('type')).toBe("text");
          expect(enzymeWrapper.find('[name="team"]').prop('type')).toBe("select");
          expect(enzymeWrapper.find('[name="from"]').prop('type')).toBe("date");
          expect(enzymeWrapper.find('[name="to"]').prop('type')).toBe("date");
          expect(enzymeWrapper.find('[data-test="submit"]').prop('type')).toBe("submit");
        })
    })
    describe('Teams', () => {
      const enzymeWrapper = shallow(<Teams handleSubmit={()=>{}} date={dates} team={teams}/>);
      it('checking containers', () => {
        expect(enzymeWrapper.find('[data-test="last-container"]').prop('last')).toBe("true");
      })
    })
});