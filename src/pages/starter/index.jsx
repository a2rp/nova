// src/pages/starter/index.jsx
import { Styled } from "./styled";
import {
    TbHome,
    TbLayoutDashboard,
    TbSparkles,
    TbUserPlus,
    TbSettings,
    TbFileAnalytics,
} from "react-icons/tb";

const Starter = () => {
    return (
        <Styled.Wrap>
            {/* Breadcrumb + title */}
            <div className="pageHeader">
                <div className="breadcrumbs">
                    <span className="crumb">
                        <TbHome />
                        Home
                    </span>
                    <span className="sep">/</span>
                    <span className="crumb current">Starter</span>
                </div>

                <div className="titleBlock">
                    <h1>Starter workspace</h1>
                    <p>
                        Use this empty layout as a starting point for new pages, flows
                        or prototypes inside Nova.
                    </p>
                </div>
            </div>

            {/* Main grid */}
            <div className="grid">
                {/* Left – quick intro card */}
                <section className="welcomeCard">
                    <div className="badge">
                        <TbSparkles />
                        Ready when you are
                    </div>
                    <h2>Build your next screen here.</h2>
                    <p className="lead">
                        This page ships with a basic header, content grid and action
                        buttons. Replace any of these blocks with your own UI
                        components.
                    </p>

                    <div className="actionsRow">
                        <button type="button" className="primary">
                            <TbLayoutDashboard />
                            Add first widget
                        </button>
                        <button type="button" className="ghost">
                            <TbFileAnalytics />
                            View dashboard sample
                        </button>
                    </div>

                    <ul className="hintsList">
                        <li>Drop in cards, tables or charts from your component set.</li>
                        <li>Use the same spacing and typography tokens as other pages.</li>
                        <li>Wire this page to API data later without changing layout.</li>
                    </ul>
                </section>

                {/* Right – two stacked cards */}
                <div className="sideColumn">
                    <section className="card">
                        <div className="cardHeader">
                            <div className="iconBubble">
                                <TbUserPlus />
                            </div>
                            <div>
                                <h3>Common first actions</h3>
                                <p>Create flows you will probably need on a new page.</p>
                            </div>
                        </div>
                        <ul className="list">
                            <li>
                                <span className="dot" />
                                Add a summary row of KPIs at the top.
                            </li>
                            <li>
                                <span className="dot" />
                                Drop in a table for users, orders or sessions.
                            </li>
                            <li>
                                <span className="dot" />
                                Attach filters, date range or search to the header.
                            </li>
                        </ul>
                    </section>

                    <section className="card">
                        <div className="cardHeader">
                            <div className="iconBubble">
                                <TbSettings />
                            </div>
                            <div>
                                <h3>Layout guidelines</h3>
                                <p>Keep nova pages consistent and easy to scan.</p>
                            </div>
                        </div>
                        <ul className="list">
                            <li>
                                <span className="dot" />
                                Use 24–32px padding from the route wrapper edges.
                            </li>
                            <li>
                                <span className="dot" />
                                Prefer 2–3 columns on desktop, one column on mobile.
                            </li>
                            <li>
                                <span className="dot" />
                                Keep actions on the right, titles on the left.
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </Styled.Wrap>
    );
};

export default Starter;
