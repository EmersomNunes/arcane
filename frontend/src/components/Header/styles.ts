import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};
  position: fixed;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 3rem 6rem;

  img {
    width: 4.8rem;
    height: 4.8rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 1.3rem;
    
    span {
      font-family: "Montserrat", sans-serif;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    padding: 3rem 1rem;

    > div {
      button {
        display: none;
      }

      .login {
        display: none;
      }

      a:last-child {
        padding-right: 8rem;
      }
    }
  }
`;

export const Navegation = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: 1.4rem;
    width: max-content;
    display: flex;
    align-items: center;
    background-color: transparent;

    padding: 1.5rem;

    svg {
      margin-right: 0.8rem;
      width: max-content;
    }
  }

  button:hover {
    transition: ease .4s;
    color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
  }

  > a {
    position: relative;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      font-size: 1.9rem;
    }

    span {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.4rem;

      position: absolute;
      top: 0;
      left: 3.4rem;
    }
  }

  > a:hover {
    transition: ease .4s;
    color: #B3AEAE;
  }
`;