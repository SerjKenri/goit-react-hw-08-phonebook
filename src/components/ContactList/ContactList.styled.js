import styled from 'styled-components';

export const DeleteButton = styled.button`
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #e74c3c;
    border-radius: 0.6em;
    color: white;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 0.5em 1.5em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    font-family: Georgia;
    :focus,
    :hover,
    :active {
        color: #000;
        outline: 0;
        box-shadow: 0 0 40px 40px #e74c3c inset;
    }
`;

export const List = styled.ul`
    padding: 0 20px;
    border-radius: 5px;
    min-width: 320px;
    text-align: center;
    align-content: center;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    border: 2px solid #000;
    border-radius: 5px;
    max-width: 500px;
    list-style: none;
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #383040;
    text-transform: uppercase;
    background: linear-gradient(to right, #fdc830, #f37335);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    :before {
        content: '\f067';
        font-family: 'Font Awesome 5 Free';
        position: absolute;
        left: 0;
        color: #f37335;
        font-size: 1.3rem;
        padding-top: 3px;
        margin-left: 3px;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;
