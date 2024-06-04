import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: black;
  padding: 15rem 10rem 10rem;
  width: 100%;

  display: grid;
  justify-content: space-between;
  text-align: center;
  grid-template-columns: repeat(4, 1fr);

  color:${({ theme }) => theme.COLORS.WHITE};

  a {
    color:${({ theme }) => theme.COLORS.WHITE};
  }

  h2 {
   margin-bottom: 1rem; 
   font-size: 1.5rem;
  }

  @media(max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    text-align: start;
    
    padding: 0 0 2rem 2rem;

    h2 {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
`;


export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 6rem;

  > img {
    width: 5.8rem;
    height: 5.8rem;
  }

  > h1 {
    font-size: 2.2rem;
  }

  @media(max-width: 800px) {
    align-items: start;
    margin-bottom: 2rem;
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media(max-width: 800px) {
    gap: 1.5rem;
  }
`;


export const Shop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

  @media(max-width: 800px) {
    gap: 1.5rem;
    width: 100%;
    line-break: auto;
  } 
`;


export const Politic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media(max-width: 800px) {
    gap: 1.5rem;
  }
`;