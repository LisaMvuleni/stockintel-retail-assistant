import {
  Banknote,
  ShoppingCart,
  TriangleAlert,
  Bot,
} from "lucide-react";

import StatCard from "../../ui/StatCard/StatCard";
import { SummaryContainer } from "../../Product/ProductSummary/ProductSummary.style";

const summary = [
  {
    title: "Today's Sales",
    value: "R8,420.00",
    icon: <Banknote size={26} color="#0c9e20" />,
    iconBackground:"#9ee5a7"
  },
  {
    title: "Transactions",
    value: "57",
    icon: <ShoppingCart size={26} color="#e68516" />,
    iconBackground:"#f5d4af"
    
  },
  {
    title: "Low Stock Alerts",
    value: "12",
    icon: <TriangleAlert size={26} color="#e00f0f"/>,
    iconBackground:"rgb(238, 188, 188)"
  },
  {
    title: "AI Queries Today",
    value: "8",
    icon: <Bot size={26} color="#327ff1" />,
    iconBackground:"#b5c2e7"
  },
];

function SalesSummary() {
  return (
    <SummaryContainer>
      {summary.map((card) => (
        <StatCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          value={card.value}
          iconBackground={card.iconBackground}
        />
      ))}
    </SummaryContainer>
  );
}

export default SalesSummary;