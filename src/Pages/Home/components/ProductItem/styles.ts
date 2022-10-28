import styled from "styled-components";

export const ProductItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 16rem;
    height: 19.375rem;
    border-radius: 6px 36px;
    
    background: ${props => props.theme["base-card"]};
    padding: 1.5rem;

    img{
        width: 7.5rem;
        height: 7.5rem;

        margin: 0 auto;
        margin-top: calc(-7.5rem / 3);
    }

    /* div>span{
        margin-top: 0.75rem;

        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        font-weight: 700;
        font-size: 0.625rem;
        border-radius: 999px;
        padding: 0.25rem 0.5rem;
    } */

     strong{
        margin-top: 1rem;
        
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.3;
        font-family: 'Baloo 2';
        text-align: center;
    }


    p{
        margin-top: 0.5rem;

        font-size: 0.875rem;
        color: ${props => props.theme["base-label"]};
        text-align: center;
    }

`

export const ProducItemFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    color: ${props => props.theme["base-text"]};

    small{
        font-weight: 400;
        font-size: 0.875rem;
        margin-right: 0.25rem;

    }

    strong{
        font-weight: 800;
        font-family: 'Baloo 2';
        font-size: 1.5rem;
    }

`
export const ButtonContainer = styled.button`  
        display: flex;
        align-items: center;

        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme["base-card"]};

        border-radius: 6px;
        padding: 0.5rem;
        outline: 0;
        border: 0;


    button:hover{
        background-color: ${props => props.theme["purple"]};
    }

`

export const TagContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    span{

        margin-top: 0.75rem;

        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        font-weight: 700;
        font-size: 0.625rem;
        border-radius: 999px;
        padding: 0.25rem 0.5rem;
    }
`

export const ContainerPrice = styled.span`

`