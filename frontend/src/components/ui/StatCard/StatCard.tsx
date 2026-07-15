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
  iconBackground: string;
}

function StatCard({
  icon,
  title,
  value,
  iconBackground,
}: StatCardProps) {
  return (
    <Card>
     <IconWrapper $background={iconBackground}>
      {icon}
    </IconWrapper>

      <Title>{title}</Title>

      <Value>{value}</Value>
    </Card>
  );
}

export default StatCard;