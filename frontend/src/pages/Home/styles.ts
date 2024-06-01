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
  width: 100%;
  height: 80rem;
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > div {
      position: absolute;
      top: 11rem;
      width: 100%;
      padding: 8rem 10rem;
      display: flex;
      justify-content: space-between;

      > img {
        height: 68rem;
        width: 53rem;
        object-fit: cover;
        
        border-radius: 4rem;
        box-shadow: 4.23px 5px 20px rgba(0, 0, 0, 0.8);
      }

      > div {
        border-radius: 4rem;
        box-shadow: 4.23px 5px 20px rgba(0, 0, 0, 0.8);
        padding: 4.5rem 10rem;
      }

      .descriptionOffer {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2rem;
        font-weight: 500;

        > h1 {
          margin-top: 2.3rem;
          font-size: 7rem;
          line-height: 100%;
        }
      }

      .buyNow {
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};

        margin-top: 3rem;
        font-weight: bold;
      }
    }



  @media(max-width: 1340px) {
    > img {
      position: absolute;
      width: 100%;
      height: 95rem;
    }

    > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 0;

      > img {
        height: 40rem;
        width: 30rem;
      }

      > div {
        box-shadow: 4.23px 5px 3px rgba(0, 0, 0, 0.8);
        padding: 0;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .descriptionOffer {
        display: flex;
        flex-direction: column;
        align-items: center;

        > h1 {
          font-size: 5rem;
          text-align: center;
        }
      }

      .buyNow {
        padding: 1.5rem;
        border-radius: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;