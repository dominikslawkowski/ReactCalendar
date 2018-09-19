import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    transform: scale(.9);
  }
`;

export const Container = styled.div`
    grid-area: 3/3/5/6;
    height: 150px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    animation: ${fadein} .1s linear; 
`;

export const Title = styled.div`
    font-size: 24px;
    margin-top: 15px;
    letter-spacing: 2px;
`;

export const Subtitle = styled.div`
    font-size: 12px;
    margin-top: 10px;
    color: #c4c4c4;
`;

export const Desc = styled.div`
    font-size: 12px;
    color: #c4c4c4;
`;

export const Button = styled.button`
    height: 30px;
    width: 170px;
    margin-top: 10px;
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    border: none;
    outline: none;
    background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    border-radius: 7px;
    transition: all .1s linear;

    :hover{
        filter: brightness(1.2);
        cursor: pointer;
        outline: none;
    }
`;