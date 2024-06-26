import styled from "styled-components";

export const Container = styled.div`
  width: 100%;  
  background-color: ${({ theme }) => theme.BACKGROUND_CARD};
  padding: 0rem 10rem 5rem;

  
  @media(max-width: 1700px) {
    padding: 3rem 3rem 0;
  }
`;

export const CardItem = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 2rem;

  > div {
    height: 54rem;
    width: 40rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    text-align: center;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};


    img {
      border-radius: 2rem;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    @media(max-width: 800px) {
      height: 40rem;
    }
  }

  @media(max-width: 1675px) {
    padding-bottom: 0;
    justify-content: center;

    div {
      p {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;