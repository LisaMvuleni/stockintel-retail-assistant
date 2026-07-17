import {
  Layout,
  ChatSection,
  SidebarSection,
} from "./AIAssistantLayout.style";

interface Props {
  chat: React.ReactNode;
  sidebar: React.ReactNode;
}

function AIAssistantLayout({
  chat,
  sidebar,
}: Props) {
  return (
    <Layout>
      <ChatSection>
        {chat}
      </ChatSection>

      <SidebarSection>
        {sidebar}
      </SidebarSection>
    </Layout>
  );
}

export default AIAssistantLayout;