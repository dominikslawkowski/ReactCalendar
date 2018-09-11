import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Home, Reservation, Statistics, Navigation } from './components/index';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="container">
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/rezerwacja" component={Reservation} />
            <Route path="/statystyka" component={Statistics} />
        </div>
      </Router>
    );
  }
}

export default App;
