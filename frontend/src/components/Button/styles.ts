import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;
  border-radius: 2rem;
`;