import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoIcon = styled.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.white};

  font-size: 22px;
  font-weight: 700;
`;

export const LogoText = styled.span`
  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;