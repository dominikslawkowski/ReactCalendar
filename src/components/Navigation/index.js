import React from 'react';
import { Nav, Span, Border, StyledLink, SpanLink } from './style';
import { IconPicker } from '../index';
import {withRouter} from 'react-router-dom';

export const Navigation = withRouter(props => <Menu {...props}/>);

export class Menu extends React.Component {

    navDate = [['home', '/'], ['calendar'], ['reservation'], ['teams']];

    returnPath(){
        return this.props.location.pathname;
    }

    render(){
        return(
          <Nav>
            <Span>KorpeX</Span>
            <Border />
            <StyledLink data-test="home" to="/" currentpath={this.props.location.pathname}>
                <IconPicker 
                    name="home"
                    width={20} 
                    height={20}
                    currentpath={this.props.location.pathname} /> 
                <SpanLink to="/" currentpath={this.props.location.pathname}>Home</SpanLink>
            </StyledLink>

            <StyledLink data-test="calendar" to="/calendar" currentpath={this.returnPath()}>
                <IconPicker 
                    name="calendar" 
                    width={20} 
                    height={20}
                    currentpath={this.returnPath()} /> 
                <SpanLink to="/calendar" currentpath={this.returnPath()}>Calendar</SpanLink>
            </StyledLink>

            <StyledLink data-test="reservation" to="/reservation" currentpath={this.props.location.pathname}>
                 <IconPicker 
                    name="reservation"
                    width={20} 
                    height={20} 
                    currentpath={this.props.location.pathname} /> 
                <SpanLink to="/reservation" currentpath={this.props.location.pathname}>Reservation</SpanLink>
            </StyledLink>

            <StyledLink data-test="teams" to="/teams" currentpath={this.props.location.pathname}>
                 <IconPicker 
                    name="teams" 
                    width={20} 
                    height={20} 
                    currentpath={this.props.location.pathname} /> 
                <SpanLink to="/teams" currentpath={this.props.location.pathname}>Teams</SpanLink>
            </StyledLink>
          </Nav>
        )
    }
};