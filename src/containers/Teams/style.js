import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    transform: scale(.9);
  }
`;

export const Container = styled.div`
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    padding: 10px;
    font-size: 12px;
    height: 100px;
    animation: ${fadein} .1s linear;
    color: ${props => props.color};
    background-color: rgba(255, 255, 255, ${props => props.opacity});
    text-align: center;
    transition: all .2s linear;
    cursor: ${props => props.last ? 'pointer' : ''};

    > svg {
        fill: #ccc;
        margin-top: 15px;
    }

    > div {
        padding: 2px;
    }

    :hover{
        background-color: ${props => props.last ? '#81FBB8' : ''};
    }

    :hover > div {
        color: ${props => props.last ? 'white' : ''};
        border-bottom: ${props => props.last ? 'white solid 1px' : ''};
    }

    :hover > svg {
        fill: ${props => props.last ? 'white' : ''};
    }
`;

export const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.color};
    border-bottom: solid 1px ${props => props.color};
`;

export const FieldInput = styled.div`
    width: 70%;
    height: 40px;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
    > input {
        width: 100%;
        height: 90%;
        padding: 5px;
        font-family: 'Open Sans', sans-serif;
        display: inline-block;
        color: white;
        border: 1px solid ${props => {
            switch(props.error){
                case 'bad': return 'red';
                case 'good': return '#ccc';
                default: return '#ccc';
                }
            }};
        border-radius: 4px;
        box-sizing: border-box;

        :before {
            width: 100%;
        }

        :hover::before {
            width: 0%;
            content: "";
        }
    }
    > span {
        display: block;
        font-size: 10px;
        color: red;
    }
`;

export const Button = styled.button`
    height: 30px;
    width: 150px;
    color: white;
    font-size: 15px;
    justify-self: center;
    align-self: end;
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

    :hover{
        filter: brightness(1.2);
    }

    :active {
        transform: scale(1.1);
    }
`;

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 120px);
    grid-gap: 15px 15px;
    padding: 50px;
`;