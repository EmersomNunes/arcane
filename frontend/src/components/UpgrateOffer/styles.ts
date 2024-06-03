import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: ${({ theme }) => theme.COLORS.WHITE};  
  padding: 0rem 10rem 5rem;

  .upgradeTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 13.2rem;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      
      &:hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;