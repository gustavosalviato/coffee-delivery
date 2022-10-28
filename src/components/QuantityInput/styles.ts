import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    background: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;

    button{
        color: ${props => props.theme.purple};
        background: none;
        outline: 0;
        border: 0;
        line-height: 0;

        transition: 0.4ms;
    }

    button:hover{
        color: ${props => props.theme["purple-dark"]};

    }

`
export const InputValue = styled.input`
    width: 1.25rem;
    background: transparent;
    border: 0;
    outline: 0;
    text-align:center !important;

    font-size: 1rem;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]}; 
`