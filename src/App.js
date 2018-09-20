import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Navigation, Home } from './components/index';
import Calendar from './containers/Calendar';
import Reservation from './containers/Reservation';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
            <Navigation />
            <div className="main-container">
              <Route exact path="/" component={Home} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/reservation" component={Reservation} />
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
