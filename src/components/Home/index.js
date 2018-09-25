import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Subtitle, Button, MainContainer } from './style';
 
export class Home extends React.Component{

    render() {
    return(
        <MainContainer>
            <Container>
                <Title id="test">Korpex Calendar</Title>
                <Subtitle>Book the date of your holiday</Subtitle>
                <Link to="/reservation">
                <Button>Reservation</Button>
                </Link>
            </Container>
        </MainContainer>
    );
}
};