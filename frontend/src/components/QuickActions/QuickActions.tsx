import QuickActionCard from "../QuickActionCard/QuickActionCard";

import { FiShoppingCart, FiBox, FiTag } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";

import { Container } from "./QuickActions.style";

const QuickActions = () => {
    return (
        <Container>

            <QuickActionCard
                title="Products"
                description="View all products"
                icon={<FiBox />}
                color="#22C55E"
                path="/products"
            />

            <QuickActionCard
                title="Ask AI Assistant"
                description="Get instant answers"
                icon={<RiRobot2Line />}
                color="#4285F4"
                path="/ai-assistant"
            />

            <QuickActionCard
                title="Record Sale"
                description="Start new sale"
                icon={<FiShoppingCart />}
                color="#F5A623"
                path="/sales"
            />

        </Container>
    );
};

export default QuickActions;