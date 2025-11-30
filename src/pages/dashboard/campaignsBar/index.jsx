// src/pages/dashboard/CampaignsBar/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";

// Values in "thousands" – y-axis 0–120k
const SCALE_MAX = 120;

// 🔹 Different datasets for each range (frontend-only)
const CAMPAIGN_DATA = {
    thisWeek: [
        { name: "Search", value: 116 },
        { name: "Direct", value: 88 },
        { name: "Referral", value: 63 },
        { name: "Unassigned", value: 47 },
        { name: "Social", value: 34 },
        { name: "Newsletter", value: 21 },
    ],
    lastWeek: [
        { name: "Search", value: 98 },
        { name: "Direct", value: 76 },
        { name: "Referral", value: 57 },
        { name: "Unassigned", value: 41 },
        { name: "Social", value: 29 },
        { name: "Newsletter", value: 17 },
    ],
    thisMonth: [
        { name: "Search", value: 123 },
        { name: "Direct", value: 101 },
        { name: "Referral", value: 83 },
        { name: "Unassigned", value: 69 },
        { name: "Social", value: 54 },
        { name: "Newsletter", value: 32 },
    ],
};

const RANGE_OPTIONS = [
    { id: "thisWeek", label: "This Week" },
    { id: "lastWeek", label: "Last Week" },
    { id: "thisMonth", label: "This Month" },
];

const CampaignsBar = () => {
    const [range, setRange] = useState("thisWeek");

    const campaigns = useMemo(
        () => CAMPAIGN_DATA[range] ?? CAMPAIGN_DATA.thisWeek,
        [range]
    );

    return (
        <Styled.Wrap className="surface-card">
            <div className="cardHeader">
                <div>
                    <h2>Top Campaigns</h2>
                    <p>Users across different sources</p>
                </div>

                <div className="cardHeaderRight">
                    <select
                        className="rangeSelect"
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                    >
                        {RANGE_OPTIONS.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="barChartShell">
                <div className="yLabels">
                    <span>120k</span>
                    <span>90k</span>
                    <span>60k</span>
                    <span>30k</span>
                    <span>0</span>
                </div>

                <div className="barsArea">
                    {campaigns.map((c) => {
                        const heightPercent = Math.min(
                            (c.value / SCALE_MAX) * 100,
                            110
                        );

                        return (
                            <div key={c.name} className="barItem">
                                <div className="barHoverValue">
                                    {c.value.toLocaleString()}k
                                </div>
                                <div
                                    className="bar"
                                    style={{ "--h": `${heightPercent}` }}
                                />
                                <span className="barLabel">{c.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="cardFooterLinks">
                <button type="button" className="linkBtn">
                    All Countries &rsaquo;
                </button>
                <button type="button" className="linkBtn">
                    See Report &#128279;
                </button>
            </div>
        </Styled.Wrap>
    );
};

export default CampaignsBar;
