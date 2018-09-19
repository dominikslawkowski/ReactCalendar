import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    transform: scale(.9);
  }
`;

export const Form = styled.form`
    grid-area: 2/3/7/6;
    height: 370px;
    width: 400px;
    display: grid;
    grid-template: "a a a a" 70px
                   "b b b b" 40px
                   "c c c c" 40px
                   "d d d d" 40px
                   "e e f f" 40px
                   ". g g ." auto;
    text-align: center;
    grid-gap: 15px;
    padding-bottom: 20px;
    justify-self: center;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    animation: ${fadein} .1s linear; 
`;

export const Title = styled.div`
    grid-area: a;
    width: 100%;
    font-size: 24px;
    margin-top: 15px;
    letter-spacing: 2px;
`;

export const Subtitle = styled.div`
    font-size: 12px;
    margin-top: 10px;
    color: #c4c4c4;
`;

export const FieldInput = styled.div`
    grid-area: ${props => {
        switch(props.index){
            case 1: return 'b';
            case 2: return 'c';
            case 3: return 'e';
            case 4: return 'f';
            default: ;
        }
    }};
    width: 70%;
    height: 40px;
    justify-self: ${props => {
            switch(props.justify){
                case 'right': return 'right';
                case 'left': return 'left';
                default: return 'center';            
            }
        }}
    > input {
        width: 100%;
        height: 90%;
        padding: 5px;
        font-family: 'Open Sans', sans-serif;
        display: inline-block;
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

export const FieldSelect = styled.div`
    grid-area: d;
    width: 70%;
    heigth: 40px
    justify-self: center;
    > select {
        width: 100%;    
        height: 90%;
        padding: 5px;
        background-color: transparent;
        font-family: 'Open Sans', sans-serif;
        display: inline-block;
        border: 1px solid ${props => {
            switch(props.error){
                case 'bad': return 'red';
                case 'good': return '#ccc';
                default: return '#ccc';
                }
            }};
        border-radius: 4px;
        box-sizing: border-box;
    }
    > span {
        display: block;
        font-size: 10px;
        color: red;
    }
`;

export const Button = styled.button`
    grid-area: g;
    height: 30px;
    width: 170px;
    margin-bottom: 25px;
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