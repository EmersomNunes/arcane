import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  padding: 0rem 10rem 5rem;

  button {
      width: 34rem;
      height: 3.8rem;
      margin-top: 2rem;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      width: 13.2rem;
      height: 4rem;
    }
  }
`;