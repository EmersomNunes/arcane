import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: 100%;
  height: 100rem;

  padding: 25rem 10rem 10rem;
`;