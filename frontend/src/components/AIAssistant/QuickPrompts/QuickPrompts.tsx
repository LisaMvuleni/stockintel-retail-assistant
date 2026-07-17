import {
  Card,
  Title,
  PromptButton,
} from "./QuickPrompts.style";

import {
  FiPackage,
  FiAlertTriangle,
  FiTrendingUp,
  FiBarChart2,
} from "react-icons/fi";

import { RiMedalLine } from "react-icons/ri";

function QuickPrompts() {
  return (
    <Card>

      <Title>✨ Quick Prompts</Title>

      <PromptButton>
        <FiPackage />
        Check Product Stock
      </PromptButton>

      <PromptButton>
        <FiAlertTriangle />
        Show Low Stock Products
      </PromptButton>

      <PromptButton>
        <FiTrendingUp />
        Today's Sales
      </PromptButton>

      <PromptButton>
        <RiMedalLine />
        Best Selling Products
      </PromptButton>

      <PromptButton>
        <FiBarChart2 />
        Inventory Summary
      </PromptButton>

    </Card>
  );
}

export default QuickPrompts;