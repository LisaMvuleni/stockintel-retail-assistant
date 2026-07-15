import styled from "styled-components";

export const HeaderContainer = styled.div`

`;

export const Title = styled.h1`
  margin: 0;

  font-size: 2rem;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.p`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 1rem;
`;

