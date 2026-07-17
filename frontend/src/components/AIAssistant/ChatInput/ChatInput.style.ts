import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 20px;

  padding: 18px;

  box-shadow: 0 8px 25px rgba(15,23,42,.08);
`;

export const StyledInput = styled.input`
  flex: 1;

  border: none;

  outline: none;

  font-size: 16px;

  background: transparent;

  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconButton = styled.button`
  width: 42px;
  height: 42px;

  border: none;
  border-radius: 12px;

  background: #f5f5f5;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: .2s;

  svg{
    font-size:20px;
  }

  &:hover{
    background:${({ theme }) => theme.colors.primary};
    color:white;
  }
`;

export const SendButton = styled.button`
  width: 48px;
  height: 48px;

  border: none;

  border-radius: 14px;

  background:${({ theme }) => theme.colors.primary};

  color:white;

  display:flex;
  justify-content:center;
  align-items:center;

  cursor:pointer;

  transition:.2s;

  svg{
    font-size:20px;
  }

  &:hover{
    transform:scale(1.05);
  }
`;