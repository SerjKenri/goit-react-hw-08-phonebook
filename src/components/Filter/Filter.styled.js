import styled from 'styled-components';

export const FilterLabel = styled.label`
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
    max-width: 190px;
`;

export const FilterInput = styled.input`
    display: flex;
    flex-direction: column;
    margin: 0.5rem auto 1rem;
    align-items: center;
    font-size: large;
    text-align: left;
    padding: 0.5rem 1rem 0.5rem 1rem;
    border-radius: 8px;
    background-color: #f2f2f2;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0px 0px 5px #888;
    border: 2px solid #666;
`;
