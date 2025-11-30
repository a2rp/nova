// src/pages/dashboard/SummaryCards/index.jsx
import React from "react";
import { Styled } from "./styled";

const summaryCards = [
    {
        id: "revenue",
        label: "Total Revenue",
        value: "$4.2M",
        chip: "Revenue overview",
    },
    {
        id: "customers",
        label: "Active Customers",
        value: "192.4K",
        chip: "Customer list",
    },
    {
        id: "orders",
        label: "Orders Completed",
        value: "128.7K",
        chip: "Order history",
    },
    {
        id: "refunds",
        label: "Refund Rate",
        value: "2.14%",
        chip: "Dispute center",
    },
];

const SummaryCards = () => {
    return (
        <Styled.Wrap>
            <div className="summaryGrid">
                {summaryCards.map((card) => (
                    <div key={card.id} className="summaryCard surface-card">
                        <div className="summaryHeader">
                            <div className="summaryLabel">{card.label}</div>
                        </div>
                        <div className="summaryValue">{card.value}</div>
                        <button className="summaryLink" type="button">
                            View <span>{card.chip}</span>
                        </button>
                    </div>
                ))}
            </div>
        </Styled.Wrap>
    );
};

export default SummaryCards;
