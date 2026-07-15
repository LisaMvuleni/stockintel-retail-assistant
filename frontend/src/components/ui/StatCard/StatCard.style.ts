import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 16px;

  padding: 24px;

  min-height: 80px;
  height:150px;

  width: 100%;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 10px;

  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.12);
  }
`;

export const Title = styled.span`
  font-size: 0.95rem;

  font-weight: 500;

  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Value = styled.h3`
  margin: 0;

  font-size: 2rem;

  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};
`;


export const IconWrapper = styled.div<{ $background: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;

  background: ${({ $background }) => $background};

  display: flex;
  align-items: center;
  justify-content: center;
`;

