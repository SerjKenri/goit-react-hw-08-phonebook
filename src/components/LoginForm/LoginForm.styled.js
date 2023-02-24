import styled from 'styled-components';

export const LoginFormS = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
`;

export const LoginLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0.5rem auto;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
    color: #3d3d3d;
    padding: 0.4em 0.8em;
    border-radius: 0.4em;
    background-color: #dcdcdc;
    font-weight: bold;
    text-align: center;
    border: 1px solid #a9a9a9;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
`;

export const LoginInput = styled.input`
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto;
    align-items: center;
    font-size: large;
    text-align: left;
    border-radius: 8px;
    background-color: #f2f2f2;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 0px 5px #888;
    border: 2px solid #666;
`;

export const LoginBtn = styled.button`
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 1;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    border-color: #3498db;
    color: rgb(255, 255, 255);
    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    font-family: Georgia;
    :hover,
    :focus,
    :active {
        color: #3498db;
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
    }
`;
