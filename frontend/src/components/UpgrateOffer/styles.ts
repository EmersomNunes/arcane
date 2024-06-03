import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: ${({ theme }) => theme.COLORS.WHITE};  
  padding: 0rem 10rem 5rem;

  .upgradeTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    @media(max-width: 800px) {
    padding: 3rem;
    
    .upgradeTitle {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
    }
  }
`;