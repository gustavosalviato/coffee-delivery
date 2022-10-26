import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: 25rem;
  padding: 5.75rem 10rem; 

  span{
    height: 100%;
  }

  >img{
    width: 30rem;
    height: 22.5rem;
  }

`
export const HomeInfo = styled.div`
  width: 100%;
  max-width: 50rem;

  h2{
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  span{
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    margin-bottom: 9rem;
  } 
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
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 4fr)) ;
   
`