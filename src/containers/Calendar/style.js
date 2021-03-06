import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    transform: scale(.9);
  }
`;

export const Day = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${props => (props.day === 'Saturday' || props.day === 'Sunday') ? '#efefef' : 'white'};
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    padding-left: 5px;
    padding-top: 5px;
    transition: all .05s linear;
    animation: ${fadein} .1s linear ${props => props.delay};
    opacity: ${props => props.visible ? '1': '.4'}
`;

export const Number = styled.div`
    font-size: 12px;
    color: black;
`;

export const Button = styled.button`
    height: 30px;
    background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
    border: none;
    grid-area: ${props => props.next ? '8/7/8/7' : '8/1/8/1'};
    transition: all .2s linear;
    outline: none;

    :hover{
        filter: brightness(1.2);
    }

    :active {
        transform: scale(1.1);
    }
`;

export const CurrentMounth = styled.div`
    grid-area: 8/4/8/4;
    font-size: 16px;
    margin-top: 5px;

    > span {
        color: #a8a8a8;
    }
`;

export const Line = styled.div`
    width: calc(100% - 10px);
    height: 2px;
    margin-bottom: 20px;
    background-color: ${props => props.color};
    font-size: 11px;
`;

export const Data = styled.div`
    font-size: 12px;
    cursor: pointer;
    > span{
        display: inline-block;
        font-size: 11px;
        color: ${props => props.color};
        opacity: 0;
        cursor: pointer;
        font-weight: 800;
        margin-left: 5px;
        transform: translateX(-20px);
        transition: all .2s linear;
    }
    :hover > span {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 10px repeat(7, 80px);
    grid-gap: 15px 15px;
    padding: 50px;
`;