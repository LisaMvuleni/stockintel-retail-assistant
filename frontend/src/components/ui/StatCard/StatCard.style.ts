import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};

  border-radius: 14px;

  padding: 14px 18px;

  min-width: 80px;

  box-shadow: 0 12px 35px rgba(15, 23, 42, 0.08);

  display: flex;

  flex-direction: column;

  gap: 8px;
`;

export const Title = styled.span`
  font-size: 0.9rem;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-weight: 500;
`;

export const Value = styled.h3`
  font-size: 1.6rem;

  color: ${({ theme }) => theme.colors.text};

  font-weight: 700;
`;