import {
    Card,
    Header,
    Title,
    AccuracySection,
    Percentage,
    Growth,
    Chart,
    ChartLine,
    Insights,
    Insight,
    Dot,
    AIChip,
} from "./AIInsightsCard.style";


function AIInsightsCard() {
    return (
        <Card>

            <Header>
                <Title>
                    AI INSIGHTS
                </Title>
            </Header>


            <AccuracySection>

                <div>

                    <small
                        style={{
                            color: "#6B7280",
                            fontWeight: 600,
                            display: "block",
                            marginBottom: "8px",
                        }}
                    >
                        FORECAST ACCURACY
                    </small>


                    <Percentage>
                        98%
                    </Percentage>


                    <Growth>
                        ↑ 12% vs last month
                    </Growth>

                </div>

            </AccuracySection>



            <Chart>

                <ChartLine
                    viewBox="0 0 300 120"
                    preserveAspectRatio="none"
                >

                    <defs>

                        <linearGradient
                            id="area"
                            x1="0"
                            x2="0"
                            y1="0"
                            y2="1"
                        >

                            <stop
                                offset="0%"
                                stopColor="#dc2626"
                                stopOpacity=".35"
                            />

                            <stop
                                offset="100%"
                                stopColor="#dc2626"
                                stopOpacity="0"
                            />

                        </linearGradient>

                    </defs>


                    <path
                        d="
            M15 90
            C40 70 55 55 80 60
            C105 65 120 82 145 72
            C170 60 185 40 205 45
            C225 50 240 28 260 22
            C275 18 285 28 295 35
            "
                        fill="none"
                        stroke="#dc2626"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />


                    <path
                        d="
            M15 90
            C40 70 55 55 80 60
            C105 65 120 82 145 72
            C170 60 185 40 205 45
            C225 50 240 28 260 22
            C275 18 285 28 295 35
            L295 120
            L15 120
            Z
            "
                        fill="url(#area)"
                    />

                </ChartLine>

            </Chart>



            <Insights>

                <Insight>
                    <Dot />
                    PlayStation 5 demand expected to increase by 18%
                </Insight>


                <Insight>
                    <Dot />
                    AirPods stock running low in 3 branches
                </Insight>


                <Insight>
                    <Dot />
                    Recommend reordering 24 products
                </Insight>

            </Insights>



            <AIChip>
                AI
            </AIChip>


        </Card>
    );
}


export default AIInsightsCard;