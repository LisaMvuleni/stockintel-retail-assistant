import AIAssistantLayout from "../components/AIAssistant/AIAssistantLayout";
import ChatWindow from "../components/AIAssistant/ChatWindow/ChatWindow";
import DashboardLayout from "../components/layout/DashboardLayout/DashboardLayout";
import PageHeader from "../components/layout/PageHeader/PageHeader";

function AIAssistantPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="AI Assistant"
        description="Ask anything about your inventory, sales and products."
      />

      <AIAssistantLayout
       chat={<ChatWindow/>}
       sidebar={<></>}
       />


    </DashboardLayout>
  );
}

export default AIAssistantPage;