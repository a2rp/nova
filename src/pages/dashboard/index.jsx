// src/pages/dashboard/index.jsx
import React from "react";
import { Styled } from "./styled";

import SummaryCards from "./summaryCards";
import MetricChart from "./metricChart";
import CampaignsBar from "./campaignsBar";
import UsersByCountry from "./usersByCountry";

const Dashboard = () => {
    return (
        <Styled.Wrap>
            <div className="topRow">
                <SummaryCards />
                <MetricChart />
            </div>

            <div className="bottomRow">
                <CampaignsBar />
                <UsersByCountry />
            </div>
        </Styled.Wrap>
    );
};

export default Dashboard;
