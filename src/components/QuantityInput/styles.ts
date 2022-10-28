import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    background: ${props => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;

    button:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    button{
        color: ${props => props.theme.purple};
        background: none;
        outline: 0;
        border: 0;
        line-height: 0;

        transition: 0.4ms;
    }

    button:not(:disabled):hover{
        color: ${props => props.theme["purple-dark"]};
    }
    
`
export const InputValue = styled.input`
    width: 1.25rem;
    background: transparent;
    border: 0;
    outline: 0;
    text-align: center;

    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme["base-title"]}; 
`