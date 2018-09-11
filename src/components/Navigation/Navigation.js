
import React from 'react';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {
    render(){
        return(
          <nav>
            <Link to="/">Home</Link>
            <Link to="/rezerwacja">Reservation</Link>
            <Link to="/statystyka">Stats</Link>
          </nav>
        )
    }
}; 