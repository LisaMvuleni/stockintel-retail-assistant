import {
  Card,
  Header,
  Avatar,
  AIInfo,
  Title,
  Status,
  Messages,
} from "./ChatWindow.style";

import ChatMessage from "../ChatMessage";

import ChatInput from "../ChatInput";

function ChatWindow() {
  return (
    <Card>

      <Header>

        <Avatar>🤖</Avatar>

        <AIInfo>
          <Title>StockBot</Title>
          <Status>● Online</Status>
        </AIInfo>

      </Header>

      <Messages>

            <ChatMessage
                sender="assistant"
                message="Hello! I'm StockBot. I can answer questions about your inventory, sales, products and reports."
                time="10:30 AM"
            />

            <ChatMessage
                sender="user"
                message="How many Coca-Cola bottles are left?"
                time="10:31 AM"
            />

            <ChatMessage
                sender="assistant"
                message="There are currently 42 Coca-Cola bottles in stock. Based on your average daily sales, you'll need to reorder in approximately 5 days."
                time="10:31 AM"
            />

        </Messages>

        <ChatInput/>

    </Card>
  );
}

export default ChatWindow;