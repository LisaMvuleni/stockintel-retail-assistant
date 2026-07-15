import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 16px;

  padding: 24px;

  min-height: 100px;

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


export const IconWrapper = styled.div`
  width: 52px;
  height: 52px;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff1f2;
  color: #dc2626;

  margin-bottom: 14px;
`;