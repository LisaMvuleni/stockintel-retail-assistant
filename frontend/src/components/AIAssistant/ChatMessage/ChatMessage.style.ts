import styled from "styled-components";

interface SenderProps {
  $sender: "user" | "assistant";
}

export const MessageContainer = styled.div<SenderProps>`
  display: flex;
  justify-content: ${({ $sender }) =>
    $sender === "user"
      ? "flex-end"
      : "flex-start"};

  align-items: flex-end;

  gap: 12px;

  margin-bottom: 20px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

export const Bubble = styled.div<SenderProps>`
  max-width: 480px;

  padding: 16px 20px;

  border-radius: 20px;

  line-height: 1.6;

  background: ${({ $sender, theme }) =>
    $sender === "assistant"
      ? "#ffffff"
      : theme.colors.primary};

  color: ${({ $sender }) =>
    $sender === "assistant"
      ? "#374151"
      : "white"};

  box-shadow: 0 8px 20px rgba(15,23,42,.06);
`;

export const Time = styled.div`
  margin-top: 6px;

  font-size: 12px;

  color: #9ca3af;
`;