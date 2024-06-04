import styled from "styled-components";

export const Container = styled.footer`
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
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
export const Shop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
export const Politic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;