import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  border: 3px solid white;

  font-weight: bold;
  border-radius: 2rem;
  transition: 0.4s ease;

  &:hover {
    border: 3px solid white;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;