import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  ul > li {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .cards {
    > h1 {
      margin: 10rem 10rem;
      font-size: 4.2rem;
    }

    .card {
      display: flex;
      margin-bottom: 5rem;
    }

    .card img {
      transition: transform 0.6s ease;
    }

    .card div:hover img {
      transform: scale(1.1);
    }
  }

  .sendEmail {
    width: 100%;
    margin-top: 6rem;

    > img {
      width: 100%;
    }
  }

  @media(max-width: 1700px) {
    .card {
      flex-direction: column;
    }

    .cards {
      margin: 0;
     > h1 {
        text-align: center;
        margin: 0;
        font-size: 2.4rem;
      }

      .card {
        img {
          height: 30rem;
        }
      }
    }
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
      z-index: 55;
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
        padding: 8rem 6rem 0;
      }

      .descriptionOffer {
        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 2rem;

        > h1 {
          margin-top: 1rem;
          font-size: 7rem;
          line-height: 100%;
        }
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
    }
  }
`;