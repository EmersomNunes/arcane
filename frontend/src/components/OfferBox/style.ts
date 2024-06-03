import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};

  height: 40rem;
  width: 60rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1340px) {
    height: 30rem;
    width: 32rem;

    margin: 5rem 0;
  }
`;