 import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;

  width: 320px;
`;

export const SearchIcon = styled.div`
  position: absolute;

  left: 16px;

  top: 50%;

  transform: translateY(-50%);

  color: ${({ theme }) => theme.colors.textSecondary};

  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;

  height: 46px;

  padding: 0 18px 0 46px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 10px;

  outline: none;

  font-size: 14px;

  transition: 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;