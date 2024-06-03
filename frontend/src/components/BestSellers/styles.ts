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

    button {
      width: 13.2rem;
    }
  }

  @media(max-width: 800px) {
    .title {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`;