import styled from "styled-components";

export const Dropdown = styled.select`
  width: 180px;

  height: 46px;

  padding: 0 16px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 10px;

  background: ${({ theme }) => theme.colors.white};

  font-size: 14px;

  color: ${({ theme }) => theme.colors.text};

  outline: none;

  cursor: pointer;

  transition: 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;