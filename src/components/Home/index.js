import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Subtitle, Desc, Button } from './style';
import { connect } from 'react-redux';
 
class Home extends React.Component{

    render() {
    return(
        <Container>
            <Title>Korpex Calendar</Title>
            <Subtitle>Zarezerwuj Swój urlop</Subtitle>
            <Desc>i zacznij planować wakacje juz teraz :)</Desc>
            <Link to="/reservation">
              <Button>Reservation</Button>
            </Link>
        </Container>
    );
}
};

const mapStateToProps = state => {
    return{
       date: state.newDate
    }
}

export default connect(mapStateToProps)(Home);