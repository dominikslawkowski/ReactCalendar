import React from 'react';
import { Container, Title, Subtitle, Button, MainContainer } from './style';
 
export class Home extends React.Component{

    render() {
    return(
        <MainContainer>
            <Container>
                <Title data-test="title">Korpex Calendar</Title>
                <Subtitle data-test="subtitle">Book the date of your holiday</Subtitle>
                <Button data-test="button" onClick={() => this.props.history.push('/reservation')}>
                Reservation
                </Button>
            </Container>
        </MainContainer>
    );
}
};