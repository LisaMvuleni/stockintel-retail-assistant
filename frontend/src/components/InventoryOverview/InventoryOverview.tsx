import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

import {
    Card,
    Title,
    ChartContainer,
    Legend,
    LegendItem,
    ColorDot,
    Percent,
    Count,
} from "./InventoryOverview.style.ts";

const data = [
    {
        name: "In Stock",
        value: 972,
        color: "#22C55E",
    },
    {
        name: "Low Stock",
        value: 186,
        color: "#F59E0B",
    },
    {
        name: "Out of Stock",
        value: 90,
        color: "#F43F5E",
    },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

function InventoryOverview() {
    return (
        <Card>

            <Title>Inventory Overview</Title>

            <ChartContainer>

                <ResponsiveContainer width={220} height={220}>
                    <PieChart>

                       <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={60}
                            outerRadius={85}
                            stroke="none"
                            label={({ cx, cy }) => (
                                <text
                                x={cx}
                                y={cy}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                >
                                <tspan x={cx} dy="-10" fontSize="14">
                                    Total
                                </tspan>

                                <tspan
                                    x={cx}
                                    dy="28"
                                    fontSize="28"
                                    fontWeight="700"
                                >
                                    {total.toLocaleString()}
                                </tspan>

                                <tspan
                                    x={cx}
                                    dy="24"
                                    fontSize="14"
                                >
                                    Products
                                </tspan>
                                </text>
                            )}
                            >
                            {data.map((entry) => (
                                <Cell
                                key={entry.name}
                                fill={entry.color}
                                />
                            ))}
                            </Pie>

                    </PieChart>
                </ResponsiveContainer>

                <Legend>

                    {data.map((item) => (
                        <LegendItem key={item.name}>

                            <ColorDot
                                style={{ background: item.color }}
                            />

                            <span>{item.name}</span>

                            <Percent>
                                {Math.round((item.value / total) * 100)}%
                            </Percent>

                            <Count>{item.value}</Count>

                        </LegendItem>
                    ))}

                </Legend>

            </ChartContainer>

        </Card>
    );
}

export default InventoryOverview;