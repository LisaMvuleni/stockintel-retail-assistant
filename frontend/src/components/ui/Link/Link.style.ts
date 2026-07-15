import styled from "styled-components";

export const StyledLink = styled.button`
  background: none;
  border: none;
  padding: 0;

  font-size: 14px;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;