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
    icon: <Package size={26} color="#920cdf"/>,
    iconBackground:"#e5caf7"
  },
  {
    title: "In Stock",
    value: "987",
    icon: <ShieldCheck size={26} color="#26eb14" />,
    iconBackground: "#d1f8d0"
  },
  {
    title: "Low Stock",
    value: "43",
    icon: <TriangleAlert size={26} color="rgb(223, 104, 36)"/>,
    iconBackground:"#fad4b1"
  },
  {
    title: "Out of Stock",
    value: "18",
    icon: <CircleX size={26} color="#dd1919" />,
    iconBackground:"#fcd3d3"

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
          iconBackground={card.iconBackground}
        />
      ))}
    </SummaryContainer>
  );
}

export default ProductSummary;