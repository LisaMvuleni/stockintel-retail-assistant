import {
  Bubble,
  MessageContainer,
  Avatar,
  Time,
} from "./ChatMessage.style";

interface ChatMessageProps {
  sender: "user" | "assistant";
  message: string;
  time: string;
}

function ChatMessage({
  sender,
  message,
  time,
}: ChatMessageProps) {
  return (
    <MessageContainer $sender={sender}>
      {sender === "assistant" && <Avatar>🤖</Avatar>}

      <div>
        <Bubble $sender={sender}>
          {message}
        </Bubble>

        <Time>{time}</Time>
      </div>
    </MessageContainer>
  );
}

export default ChatMessage;