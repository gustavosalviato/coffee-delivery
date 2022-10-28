import styled from "styled-components";

export const SuccessContainer = styled.div`
    min-width: 70rem;
    margin: 5rem 10rem;
    height: 100vh;
    padding: 0 1rem;

`

export const SuccessTitle = styled.h1`
    color: ${props => props.theme["yellow-dark"]};
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 0.25rem;
    line-height: 1.3;

`

export const SucessSubtitle = styled.span`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme["base-subtitle"]};
    line-height: 1.3;
`


export const GriTwoColumns = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    margin-top: 2.5rem;
    gap: 6.25rem;

`


export const IlustrationImage = styled.img`
    margin: 0 auto;

`


