import styled from "styled-components";


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  width: 100%;
`;


export const Label = styled.label`
  font-size: 14px;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.text};
`;


export const InputContainer = styled.div`
  position: relative;

  width: 100%;
`;


export const StyledInput = styled.input`
  width: 100%;

  height: 48px;

  padding: 0 45px 0 16px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};

  font-size: 14px;

  outline: none;


  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;


export const TogglePassword = styled.button`
  position: absolute;

  right: 14px;

  top: 50%;

  transform: translateY(-50%);

  border: none;

  background: transparent;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.textSecondary};

  display: flex;

  align-items: center;
`;