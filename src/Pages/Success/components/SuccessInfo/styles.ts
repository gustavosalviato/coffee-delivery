import styled from "styled-components";


export const AdressColumn = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    border-radius: 6px 36px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.yellow};

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