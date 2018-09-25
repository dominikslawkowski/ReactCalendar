import React from 'react';
import { Nav, Span, Border, StyledLink } from './style';
import { IconPicker } from '../index';
import {withRouter} from 'react-router-dom';

export const Navigation = withRouter(props => <Menu {...props}/>);

export class Menu extends React.Component {
    render(){
        return(
          <Nav>
            <Span>KorpeX</Span>
            <Border />
            <StyledLink to="/" currentpath={this.props.location.pathname}>
                <IconPicker 
                    name="home" 
                    width={20} 
                    height={20} 
                /> 
                <span>Home</span>
            </StyledLink>
            <StyledLink to="/calendar" currentpath={this.props.location.pathname}>
                <IconPicker 
                    name="calendar" 
                    width={20} 
                    height={20} 
                /> 
                <span>Calendar</span>
            </StyledLink>
            <StyledLink to="/reservation" currentpath={this.props.location.pathname}>
                 <IconPicker 
                    name="reservation"
                    width={20} 
                    height={20} 
                    currentPath={this.props.location.pathname}
                /> 
                <span>Reservation</span>
            </StyledLink>
            <StyledLink to="/teams" currentpath={this.props.location.pathname}>
                 <IconPicker 
                    name="teams" 
                    width={20} 
                    height={20} 
                    currentPath={this.props.location.pathname}
                /> 
                <span>Teams</span>
            </StyledLink>
          </Nav>
        )
    }
}; 