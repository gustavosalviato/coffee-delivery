import styled from "styled-components";

export const HomeContainer = styled.section`
  min-width: 70rem;
  margin: 5rem 10rem;
  height: 100vh;
  padding: 0 1rem;

`

export const GridTwoColums = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 6.25rem;

`

export const IntroImage = styled.img`
  margin: 0 auto;
`


export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    font-size: 3rem;
    color: ${props => props.theme["base-title"]};
  }

  p{
    font-size: 1.25rem;
    margin-top: 1rem;
    color: ${props => props.theme["base-subtitle"]};
    line-height: 1.3;
  }

`


const BG_COLOR = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text'
} as const

interface ContainerFlexProps {
  bgColor: keyof typeof BG_COLOR
}

export const ContainerFlex = styled.div<ContainerFlexProps>`
  display: flex;
  gap: 0.75rem;

  span{
    line-height: 1.3;
    color: ${props => props.theme["base-text"]}
  }

  svg{
    background: ${props => props.theme[BG_COLOR[props.bgColor]]};
    color: ${props => props.theme.white};
    

    color: ${props => props.theme.white};
    border-radius: 50%;
    padding: 3px 6px;
  }



`

export const GridIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 4.25rem;
`

export const GridProducts = styled.div`
  display: grid;
  margin-top: 3.375rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 4fr)) ;
`