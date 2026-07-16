import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import {
    Card,
    IconContainer,
    Content,
    Title,
    Description,
    Arrow,
} from "./QuickActionCard.style";

interface QuickActionCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    path: string;
}

const QuickActionCard = ({
    title,
    description,
    icon,
    color,
    path,
}: QuickActionCardProps) => {

    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(path)}>
            <IconContainer color={color}>
                {icon}
            </IconContainer>

            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>

            <Arrow>
                <HiChevronRight />
            </Arrow>
        </Card>
    );
};

export default QuickActionCard;