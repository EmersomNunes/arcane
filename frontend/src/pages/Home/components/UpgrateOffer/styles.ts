import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: ${({ theme }) => theme.COLORS.WHITE};  

  button {
      width: 20rem;
      height: 3.8rem;
    }

  .contain {
    padding: 0rem 10rem 5rem;

    @media(max-width: 800px) {
      padding: 3rem 3rem 0;
    }
  }

  .upgradeTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > button {
      width: 13.2rem;
    }
  }

    @media(max-width: 800px) {
    padding: 0;
    
    .upgradeTitle {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;

      h1 {
        font-size: 2.4rem;
      }
    }
  }

  @media(max-width: 800px) {
    button {
      width: 20rem;
      height: 3.8rem;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  margin: 8rem 0;
  position: relative;

  > div {
    position: absolute;
    right: 36%;
    top: 30%;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h1 {
      font-size: 7rem;
    }

    > p {
      font-size: 2.2rem;
      margin: 0rem 0 3rem;
    }

    > button {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
      color: ${({ theme }) => theme.COLORS.WHITE};

      width: 14.2rem;
      height: 4rem;
    }

    > button:hover {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
      border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    }
  }

  > img {
    width: 100%;
    height: 51rem;
    object-fit: cover;
  }

  @media(max-width: 800px) {
    > div {
      width: 100%;
      position: absolute;
      display: inline-block;
      text-align: center;
      top: 20%;
      right: auto;

      > h1 {
      font-size: 3rem;
      }

      > p {
        font-size: 1.8rem;
      }

      > button {
        height: 3rem;
        font-size: 1.2rem;
        width: 11rem;
      }
    }

    > img {
        width: 100%;
        height: 22.5rem;
        object-fit: cover;
        object-position: 50% 50%;
      }
  }
`;