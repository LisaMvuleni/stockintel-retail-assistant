import styled from "styled-components";

interface IconProps {
  $color: string;
}

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  height: 36vh;
  box-shadow: 0 8px 24px rgba(15,23,42,.06);
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Insight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 14px;
  border-radius: 14px;

  margin-bottom: 14px;

  background: #fafafa;
`;

export const IconContainer = styled.div<IconProps>`
  width: 46px;
  height: 46px;

  border-radius: 12px;

  background: ${({ $color }) => `${$color}20`};

  color: ${({ $color }) => $color};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 22px;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const InsightTitle = styled.h4`
  margin: 0 0 4px;
  font-size: 15px;
`;

export const InsightDescription = styled.p`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;