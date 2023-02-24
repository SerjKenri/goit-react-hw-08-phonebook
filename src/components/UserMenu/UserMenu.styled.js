import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Paragraph = styled.p`
    font-weight: 700;
`;

export const UserName = styled.span`
    color: royalblue;
`;

export const MenuButton = styled.button`
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
