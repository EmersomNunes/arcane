import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  position: relative;

  margin-bottom: 18rem;

  .container {
      width: 100%;
      padding: 20rem 10rem 5rem 10rem;

      display: flex;
      gap: 4rem;

      > div {
        border-radius: 4rem;
        box-shadow: 4.23px 5px 20px rgba(0, 0, 0, 0.8);
        padding: 4.5rem 10rem;
        font-size: 2.2rem;

        position: absolute;
        left: 20rem;
        z-index: 4;
      }

      .boxOffer {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2rem;
        font-weight: 500;
        text-align: center;
        margin-bottom: 3rem;
        
        > h1 {
          margin-top: 3rem;
          font-size: 14rem;
          line-height: 85%;
        }

        > h2 {
          font-size: 4.2rem;
          font-weight: bold;
          font-family: "Montserrat", sans-serif;
        }
      }

    > section {
      img {
        width: 38rem;
        height: 50rem;
        border-radius: 2rem;

        box-shadow: 10px 5px 30px 2px #3e3e3e;
      }

      .game1 {
        position: absolute;
        position: absolute;
        right: 78rem;
        top: 15rem;
        z-index: 3;
      }

      .game3 {
        position: absolute;
        right: 8rem;
        z-index: 3;
        margin-top: 4rem;
      }
    
      .game2 {
        position: absolute;
        right: 43rem;
        z-index: 2;
        margin-top: 8rem;
      }
    }
  }

  @media(max-width: 1340px) {
    .container {
        > div {
        height: 40rem;
        width: 32rem;

        margin: 0;
        z-index: 6;
      }
    }
  }


  @media(max-width: 800px) {
    height: 100%;
    display: none;

    .container {
      padding: 0;
      
      > div {
        display: none;
      }

      > section {
        display: none;
      }
    }
  }
`;