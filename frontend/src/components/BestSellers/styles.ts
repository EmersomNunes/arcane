import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;
  height: 100rem;

  padding: 25rem 10rem 10rem;

  .title {
    display: flex;
    justify-content: space-between;

    > button {
      width: 13.2rem;
    }
  }

  button {
      width: 34rem;
      height: 3.8rem;
  }

  @media(max-width: 800px) {
    padding: 3rem 3rem 0;
    height: 80rem;

    .title {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`;