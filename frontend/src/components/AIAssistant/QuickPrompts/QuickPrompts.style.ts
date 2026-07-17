import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;
  height:30vh;
  box-shadow: 0 8px 24px rgba(15,23,42,.06);
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const PromptButton = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 14px;

  margin-bottom: 12px;

  border: none;

  border-radius: 14px;

  background: #fafafa;

  cursor: pointer;

  transition: .25s;

  font-size: 15px;

  svg{
    font-size:18px;
    color:${({ theme }) => theme.colors.primary};
  }

  &:hover{
    background:${({ theme }) => theme.colors.primary};

    color:white;

    transform:translateY(-2px);

    svg{
      color:white;
    }
  }
`;