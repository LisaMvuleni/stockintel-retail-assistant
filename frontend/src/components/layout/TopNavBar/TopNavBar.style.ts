import styled from "styled-components";

export const NavBar = styled.header`
  height: 80px;

  background: ${({ theme }) => theme.colors.white};
  background: #fff8f8;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 0 32px;
`;

export const LeftSection = styled.div`
  display: flex;

  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;

  align-items: center;

  gap: 20px;
`;

export const WelcomeText = styled.h3`
  margin: 0;

  font-size: 22px;

  color: ${({ theme }) => theme.colors.text};

  font-weight: 600;
`;

export const UserAvatar = styled.div`
  width: 42px;

  height: 42px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.white};

  display: flex;

  justify-content: center;

  align-items: center;

  font-weight: 700;
`;