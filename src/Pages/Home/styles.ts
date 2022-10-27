import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  min-width: 70rem;
  min-height: calc(100vh - 10rem);
  padding: 0 1rem;
  margin: 1rem auto;
`

export const GridTwoColums = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;


  div{
    margin: 10rem;    
  }

  h1{
    font-size: 3rem;
    font-family: 'Baloo 2';
    line-height: 1.3;
    color: ${props => props.theme["base-title"]}
  }

  p{
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${props => props.theme["base-subtitle"]}

  }

  img{
    margin: 5rem auto;
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const GridIcons = styled.div`
  display: flex;
  background-color: red;
  justify-content: flex-start;
  align-items: flex-start;

`


export const GridInfo = styled.div`
  display: grid;
  margin-top: 4.125rem;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  gap: 2.5rem;

`

export const HomeContent = styled.div`
  padding: 10rem;
  width: 100%;
  min-width: 70rem;
  margin-bottom: 3.375rem;
  
  h1{
    margin-bottom: 3.375rem;
  }

`

export const GridProducts = styled.div`
  display: grid;
  width: 100%;
  padding: 0 10rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 4fr)) ;
   
`