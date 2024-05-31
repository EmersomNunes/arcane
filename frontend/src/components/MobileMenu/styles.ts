import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  position: absolute;
  z-index: 1;
  text-align: center;
  top: 0;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .menu-item {
    margin-top: 20px;
  }

  .bm-burger-button {
    position: fixed;
    width: 35px;
    height: 25px;
    right: 1rem;
    top: 4.3rem;
  }

  .bm-burger-bars {
    background: ${({ theme }) => theme.COLORS.WHITE};
  }

  .bm-item-list > .menu-item {
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .bm-item {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .bm-item:first-child {
    margin: auto;
    margin-top: 1.4rem;
    margin-bottom: 6rem;
    width: 100px;
    text-align: center;
  }

  .bm-cross {
    background: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 1.5rem;
    padding: 1.2rem 0;
  }

  .bm-cross-button {
    button {
      width: max-content;
      top: 3rem !important;
    }

    span {
      top: .5rem;
      right: .8rem !important;
    }
  }
  
  .bm-menu {
    background: black;
    font-size: 1.15em;
    padding: 2rem 0;
  }
`;