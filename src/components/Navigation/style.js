import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    height: 100vh;
    width: 170px;
    display: grid;
    grid-template-rows: 50px 2px repeat(3, 30px);
    color: white;
    background: #FFFFFF;
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    padding: 5px;
    padding-left: 10px;
    grid-gap: 5px;
    
    > a {
        height: 30px;
        display: block;
        vertical-align: middle;
        color: black;
        justify-self: start;
        text-decoration: none;
        transition: all .08s linear;
    }
    > a:hover {
        cursor: pointer;
        color: #81FBB8;
        fill: #81FBB8;
    }
    > a > svg {
        vertical-align: middle;
    }
    > a > span{
        vertical-align: middle;
    }
`;

export const Span = styled.span`
    color: black;
    width: 100%;
    letter-spacing: 5px;
    margin-top: 10px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`;

export const Border = styled.div`
    background-color: black;
    width: 165px;
`;

export const StyledLink = styled(Link)`
    > svg {
        fill: ${props => (props.to === props.currentpath) ? '#81FBB8' : 'black'};
        transition: all .1s linear;
    }
    > span {
        color: ${props => (props.to === props.currentpath) ? '#81FBB8' : 'black'};
        transition: all .1s linear;
    }
`;