import type { ReactNode } from "react";
import {
  Card,
  Title,
  Value,
  IconWrapper,
} from "./StatCard.style";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  return (
    <Card>
      <IconWrapper>
        {icon}
      </IconWrapper>

      <Title>{title}</Title>

      <Value>{value}</Value>
    </Card>
  );
}

export default StatCard;