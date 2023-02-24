import styled from 'styled-components';

export const HomeContain = styled.div`
    min-height: calc(100vh - 50px);
    text-align: center;
    align-items: center;
    justify-content: center;
`;

export const HomeTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    color: #0f0f0f;
    text-transform: uppercase;
    letter-spacing: 3px;
    background: linear-gradient(
        to right,
        #f6d365 0%,
        #fda085 51%,
        #f6d365 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    line-height: 1.5;
    color: #2b2b2b;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    background: linear-gradient(to left, #f1f1f1, #e3e3e3);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
