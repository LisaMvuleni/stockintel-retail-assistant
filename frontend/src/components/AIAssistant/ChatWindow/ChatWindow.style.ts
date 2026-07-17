import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 24px;
  padding: 24px;
  min-height: 650px;
  box-shadow: 0 10px 30px rgba(15,23,42,.08);

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
`;

export const Avatar = styled.div`
  width: 54px;
  height: 54px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  display:flex;
  justify-content:center;
  align-items:center;

  color:white;
  font-size:26px;
`;

export const AIInfo = styled.div`
  display:flex;
  flex-direction:column;
`;

export const Title = styled.h2`
  margin:0;
`;

export const Status = styled.span`
  color:#10B981;
  font-size:14px;
`;

export const Messages = styled.div`
  margin-top:32px;

  h3{
    margin-bottom:12px;
  }

  p{
    line-height:1.7;
    color:#6B7280;
  }

  ul{
    margin:18px 0;
    padding-left:24px;
  }

  li{
    margin-bottom:10px;
    color:#374151;
  }
`;