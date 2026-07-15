import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 260px;

  min-height: 100vh;

  background: #ffe8e8;

  border-right: 1px solid #F3E3E3;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding: 24px;
`;

export const LogoSection = styled.div`
  margin-bottom: 40px;
  background: #ffe8e8;
`;

export const Navigation = styled.nav`
  display: flex;

  flex-direction: column;

  gap: 12px;

  flex: 1;
`;

export const NavItem = styled.button`
  width: 100%;

  display:flex;

  border: none;

  align-items: center;

  background: transparent;

  text-align: left;

  gap: 12px;

  padding: 14px 18px;

  border-radius: 12px;

  cursor: pointer;

  font-size: 15px;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.text};

  transition: all 0.2s ease;

  &:hover {
    background: white;

    color: ${({ theme }) => theme.colors.primary};

    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }
`;

export const LogoutSection = styled.div`
  margin-top: 24px;
`;