import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  ul > li {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    background-color: transparent;
    width: 20rem;
    height: 4rem;
  }
`;

export const Banner = styled.div`
  > img {
    width: 100%;
    height: 50rem;
  }
`;