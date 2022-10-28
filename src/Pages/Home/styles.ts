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

export const GridProducts = styled.div`
  display: grid;
  margin-top: 3.375rem;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 4fr)) ;
`