import styled from 'styled-components'

export const SpanError = styled.span`
color: red;
font-size: .7rem;
`

export const Button = styled.button`
    background: #a7a7a7;
    color:#7e7e7e;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #c9c9c9;
    border-radius: 3px;

    background: ${props => props.primary || "blue"};
    color: ${props => props.primary || "white"};
    border: ${props => props.primary || "2px solid #00032e"};

`;

export const Div = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: .5rem;
`