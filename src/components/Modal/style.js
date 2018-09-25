import styled from 'styled-components';

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
`;

export const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 39%;
    background-color: rgba(0, 0, 0, .8);
    width: 300px;
    height: 200px;
    padding: 10px;
    color: white;
    border-radius: 20px;
    text-align: center;
    transition: all .1s linear;
    >button {
        margin-top: 15px;
        height: 30px;
        width: 150px;
        color: white;
        font-size: 15px;
        letter-spacing: 1px;
        border: none;
        outline: none;
        background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
        box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
        border-radius: 7px;

        :hover{
            filter: brightness(1.2);
            cursor: pointer;
            outline: none;
        }
    }
`;

export const Message = styled.div`
    width: 250px;
    height: 60px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.marginTop ? props.marginTop : '50px'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : ''};
`;
