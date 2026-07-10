import styled from "styled-components";
import retailImage from "../../../assets/retail-illustration.png";

export const AuthContainer = styled.div`
  min-height: 100vh;

  display: flex;

  background-color: ${({ theme }) => theme.colors.background};
`;


export const LeftPanel = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 70px 90px;

  background-color: #fafafa;
`;


export const Illustration = styled.img`
  width: 420px;

  margin-bottom: 40px;

  object-fit: contain;
`;


export const BrandTitle = styled.h1`
  font-size: 42px;

  line-height: 1.2;

  font-weight: 700;

  letter-spacing: -1px;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 18px;
`;


export const BrandDescription = styled.p`
  max-width: 450px;

  font-size: 17px;

  line-height: 1.7;

  color: ${({ theme }) => theme.colors.textSecondary};
`;


export const RightPanel = styled.div`
  flex: 1;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 60px;
`;


export const LoginCard = styled.div`
  width: 420px;

  padding: 45px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 18px;

  box-shadow: 
    0 20px 50px rgba(0,0,0,0.08);

  display: flex;

  flex-direction: column;

  gap: 22px;
`;