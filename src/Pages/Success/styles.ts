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

export const AdressColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 6px 36px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.yellow};

`

export const IlustrationImage = styled.img`
    margin: 0 auto;

`


const BG_COLOR = {
    'yellow-dark': 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple',
} as const

interface ContainerFlexProps {
    bgColor: keyof typeof BG_COLOR
}

export const ContainerFlex = styled.div<ContainerFlexProps>`
   display: flex;
   gap: 0.75rem;

   div{
    display: flex;
    flex-direction: column;
   }

   & + div{
    margin-top: 2rem;
   }

   span{
    line-height: 1.3;   
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
   }

   strong{
    font-weight: 700;
    color: ${props => props.theme["base-text"]};
   }


   svg{
    color: ${props => props.theme.white};
    border-radius: 50%;
    background: ${props => props.theme[BG_COLOR[props.bgColor]]};
    padding: 3px 6px;
   }
`