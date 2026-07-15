import {
  Package,
  ShieldCheck,
  TriangleAlert,
  CircleX,
} from "lucide-react";

import StatCard from "../../ui/StatCard/StatCard";
import { SummaryContainer } from "./ProductSummary.style";


const summary = [
  {
    title: "Total Products",
    value: "1,248",
    icon: <Package size={26} />,
  },
  {
    title: "In Stock",
    value: "987",
    icon: <ShieldCheck size={26} />,
  },
  {
    title: "Low Stock",
    value: "43",
    icon: <TriangleAlert size={26} />,
  },
  {
    title: "Out of Stock",
    value: "18",
    icon: <CircleX size={26} />,
  },
];

function ProductSummary() {
  return (
    <SummaryContainer>
          {summary.map((card) => (
          <StatCard
      key={card.title}
      icon={card.icon}
      title={card.title}
      value={card.value}
    />
          ))}
    </SummaryContainer>
  );
}

export default ProductSummary;