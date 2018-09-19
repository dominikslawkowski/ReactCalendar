import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Subtitle, Button } from './style';
 
export class Home extends React.Component{

    render() {
    return(
        <Container>
            <Title>Korpex Calendar</Title>
            <Subtitle>Book the date of your holiday</Subtitle>
            <Link to="/reservation">
              <Button>Reservation</Button>
            </Link>
        </Container>
    );
}
};