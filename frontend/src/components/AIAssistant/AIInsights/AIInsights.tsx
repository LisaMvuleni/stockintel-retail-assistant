import {
  Card,
  Title,
  Insight,
  IconContainer,
  TextContainer,
  InsightTitle,
  InsightDescription,
} from "./AIInsights.style";

import {
  FiTrendingUp,
  FiAlertTriangle,
  FiActivity,
  FiBarChart2,
} from "react-icons/fi";

function AIInsights() {
  return (
    <Card>

      <Title>🧠 AI Insights</Title>

      <Insight>
        <IconContainer $color="#10B981">
          <FiTrendingUp />
        </IconContainer>

        <TextContainer>
          <InsightTitle>Sales Increased</InsightTitle>
          <InsightDescription>
            Sales are up 18% compared to yesterday.
          </InsightDescription>
        </TextContainer>
      </Insight>

      <Insight>
        <IconContainer $color="#F59E0B">
          <FiAlertTriangle />
        </IconContainer>

        <TextContainer>
          <InsightTitle>Low Stock Alert</InsightTitle>
          <InsightDescription>
            4 products require restocking.
          </InsightDescription>
        </TextContainer>
      </Insight>

      <Insight>
        <IconContainer $color="#6366F1">
          <FiActivity />
        </IconContainer>

        <TextContainer>
          <InsightTitle>Trending</InsightTitle>
          <InsightDescription>
            Energy drinks are selling faster today.
          </InsightDescription>
        </TextContainer>
      </Insight>

      <Insight>
        <IconContainer $color="#E11D48">
          <FiBarChart2 />
        </IconContainer>

        <TextContainer>
          <InsightTitle>Inventory Health</InsightTitle>
          <InsightDescription>
            Overall stock health is 94%.
          </InsightDescription>
        </TextContainer>
      </Insight>

    </Card>
  );
}

export default AIInsights;