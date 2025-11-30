// src/pages/dashboard/MetricChart/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

const metricTabs = [
    { id: "newUsers", label: "New Users", value: "183K" },
    { id: "engagement", label: "Engagement", value: "67%" },
    { id: "revenue", label: "Revenue", value: "$920K" },
    { id: "pageViews", label: "Page Views", value: "1.8M" },
];

const baseLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const metricSeries = {
    newUsers: baseLabels.map((d, i) => ({
        name: d,
        actual: [48, 63, 57, 52, 61, 59, 74][i],
        target: [52, 60, 62, 58, 64, 66, 70][i],
    })),
    engagement: baseLabels.map((d, i) => ({
        name: d,
        actual: [54, 55, 57, 59, 60, 64, 67][i],
        target: [56, 57, 59, 61, 63, 65, 68][i],
    })),
    revenue: baseLabels.map((d, i) => ({
        name: d,
        actual: [72, 78, 75, 81, 88, 92, 96][i],
        target: [70, 76, 80, 84, 90, 94, 98][i],
    })),
    pageViews: baseLabels.map((d, i) => ({
        name: d,
        actual: [90, 86, 94, 88, 96, 100, 112][i],
        target: [88, 90, 92, 95, 98, 102, 110][i],
    })),
};

const MetricChart = () => {
    const [activeMetric, setActiveMetric] = useState("newUsers");
    const [showActual, setShowActual] = useState(true);
    const [showTarget, setShowTarget] = useState(true);

    const activeMetricData =
        metricTabs.find((m) => m.id === activeMetric) ?? metricTabs[0];

    const chartData = useMemo(
        () => metricSeries[activeMetric] ?? metricSeries.newUsers,
        [activeMetric]
    );

    return (
        <Styled.Wrap className="surface-card">
            <div className="newUsersHeader">
                <div className="metricsTabs">
                    {metricTabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={
                                "tab" +
                                (tab.id === activeMetric ? " active" : "")
                            }
                            type="button"
                            onClick={() => setActiveMetric(tab.id)}
                        >
                            <span className="tabLabel">{tab.label}</span>
                            <span className="tabValue">{tab.value}</span>
                        </button>
                    ))}
                </div>
                <div className="metricValue">{activeMetricData.value}</div>
            </div>

            <div className="chartLegend">
                <button
                    type="button"
                    className={
                        "legendItem clickable" +
                        (showActual ? " isActive" : "")
                    }
                    onClick={() => setShowActual((v) => !v)}
                >
                    <span className="dot actual" />
                    Actual
                </button>
                <button
                    type="button"
                    className={
                        "legendItem clickable" +
                        (showTarget ? " isActive" : "")
                    }
                    onClick={() => setShowTarget((v) => !v)}
                >
                    <span className="dot projected" />
                    Target
                </button>
            </div>

            <div className="lineChartShell">
                <div className="yAxisLabels">
                    <span>120K</span>
                    <span>90K</span>
                    <span>60K</span>
                    <span>30K</span>
                    <span>0</span>
                </div>
                <div className="chartCanvas">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={chartData}
                            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient
                                    id="novaActual"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#68b0ff"
                                        stopOpacity={0.9}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#68b0ff"
                                        stopOpacity={0.2}
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="novaTarget"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#68ffc3"
                                        stopOpacity={0.85}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#68ffc3"
                                        stopOpacity={0.15}
                                    />
                                </linearGradient>
                            </defs>

                            <CartesianGrid
                                stroke="rgba(255,255,255,0.05)"
                                vertical={true}
                                horizontal={true}
                                strokeDasharray="0"
                            />
                            <XAxis
                                dataKey="name"
                                tick={{
                                    fill: "var(--color-text-muted)",
                                    fontSize: 11,
                                }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <YAxis hide domain={[0, 120]} />
                            <Tooltip
                                cursor={{ stroke: "rgba(255,255,255,0.12)" }}
                                contentStyle={{
                                    backgroundColor: "var(--color-surface)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: 10,
                                    fontSize: 11,
                                }}
                            />

                            {showTarget && (
                                <Area
                                    type="monotone"
                                    dataKey="target"
                                    stroke="#68ffc3"
                                    strokeWidth={2}
                                    fill="url(#novaTarget)"
                                    dot={false}
                                    isAnimationActive={true}
                                />
                            )}

                            {showActual && (
                                <Area
                                    type="monotone"
                                    dataKey="actual"
                                    stroke="#68b0ff"
                                    strokeWidth={2}
                                    fill="url(#novaActual)"
                                    dot={false}
                                    isAnimationActive={true}
                                />
                            )}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Styled.Wrap>
    );
};

export default MetricChart;
