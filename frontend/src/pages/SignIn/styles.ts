import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Login = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  
  > div {
    width: 55rem;
    height: 45rem;

    padding: 2rem 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    border-radius: 2rem;

    
    > h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      text-align: center;
      margin-bottom: 2rem;
      font-size: 4rem;
      
      font-family: 'Times New Roman', Times, serif;
    }

    > button {
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};

      width: 22.3rem;
      height: 3.5rem;

      margin-top: 1.5rem;
    }

    > input {
      padding: 1rem;
    }
  }
`;