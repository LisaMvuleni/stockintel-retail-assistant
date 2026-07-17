import {
  Container,
  StyledInput,
  Actions,
  IconButton,
  SendButton,
} from "./ChatInput.style";

import {
  FiSend,
} from "react-icons/fi";

import { RiSparkling2Line } from "react-icons/ri";

function ChatInput() {
  return (
    <Container>

      <StyledInput
        type="text"
        placeholder="Ask StockIntel AI anything..."
      />

      <Actions>

        <IconButton>
          <RiSparkling2Line />
        </IconButton>

        <SendButton>
          <FiSend />
        </SendButton>

      </Actions>

    </Container>
  );
}

export default ChatInput;