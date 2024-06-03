import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  background-color: ${({ theme }) => theme.BACKGROUND_CARD};
  padding: 0rem 10rem 5rem;
`;

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 13rem;

  div {
    height: 54rem;
    width: 40rem;
    cursor: pointer;

    img {
      border-radius: 2rem;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    p {
      text-align: center;
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin-top: 2.5rem;
    }
  }
`;