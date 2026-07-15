import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text};
`;

export const Body = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Small = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;