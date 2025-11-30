// src/pages/dashboard/UsersByCountry/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";

const PAGE_SIZE = 7;

// 🔹 Mock data for each range (frontend only)
const DATA_BY_RANGE = {
    weekly: [
        {
            rank: 1,
            flag: "de",
            country: "Germany",
            totalUsers: "72,405",
            change: "+4.63%",
            changeType: "up",
            newUsers: "11,294",
            sessions: "132,947",
        },
        {
            rank: 2,
            flag: "br",
            country: "Brazil",
            totalUsers: "51,822",
            change: "+1.21%",
            changeType: "up",
            newUsers: "7,846",
            sessions: "94,203",
        },
        {
            rank: 3,
            flag: "ca",
            country: "Canada",
            totalUsers: "38,910",
            change: "-0.78%",
            changeType: "down",
            newUsers: "4,212",
            sessions: "60,437",
        },
        {
            rank: 4,
            flag: "jp",
            country: "Japan",
            totalUsers: "33,504",
            change: "+3.05%",
            changeType: "up",
            newUsers: "6,031",
            sessions: "71,905",
        },
        {
            rank: 5,
            flag: "es",
            country: "Spain",
            totalUsers: "24,199",
            change: "+0.42%",
            changeType: "up",
            newUsers: "3,108",
            sessions: "39,420",
        },
        {
            rank: 6,
            flag: "mx",
            country: "Mexico",
            totalUsers: "19,733",
            change: "-2.31%",
            changeType: "down",
            newUsers: "2,401",
            sessions: "27,886",
        },
        {
            rank: 7,
            flag: "sg",
            country: "Singapore",
            totalUsers: "15,086",
            change: "+5.27%",
            changeType: "up",
            newUsers: "2,993",
            sessions: "22,140",
        },
        {
            rank: 8,
            flag: "us",
            country: "United States",
            totalUsers: "13,402",
            change: "+0.94%",
            changeType: "up",
            newUsers: "1,987",
            sessions: "19,710",
        },
        {
            rank: 9,
            flag: "fr",
            country: "France",
            totalUsers: "11,570",
            change: "-1.11%",
            changeType: "down",
            newUsers: "1,426",
            sessions: "16,932",
        },
        {
            rank: 10,
            flag: "in",
            country: "India",
            totalUsers: "9,835",
            change: "+2.74%",
            changeType: "up",
            newUsers: "1,762",
            sessions: "14,508",
        },
    ],

    monthly: [
        {
            rank: 1,
            flag: "us",
            country: "United States",
            totalUsers: "291,540",
            change: "+6.12%",
            changeType: "up",
            newUsers: "44,982",
            sessions: "421,309",
        },
        {
            rank: 2,
            flag: "de",
            country: "Germany",
            totalUsers: "214,207",
            change: "+3.74%",
            changeType: "up",
            newUsers: "29,684",
            sessions: "301,452",
        },
        {
            rank: 3,
            flag: "br",
            country: "Brazil",
            totalUsers: "176,893",
            change: "+1.08%",
            changeType: "up",
            newUsers: "23,911",
            sessions: "248,009",
        },
        {
            rank: 4,
            flag: "in",
            country: "India",
            totalUsers: "163,020",
            change: "+4.89%",
            changeType: "up",
            newUsers: "31,227",
            sessions: "237,514",
        },
        {
            rank: 5,
            flag: "ca",
            country: "Canada",
            totalUsers: "120,814",
            change: "-0.91%",
            changeType: "down",
            newUsers: "14,305",
            sessions: "169,771",
        },
        {
            rank: 6,
            flag: "jp",
            country: "Japan",
            totalUsers: "98,334",
            change: "+2.31%",
            changeType: "up",
            newUsers: "18,043",
            sessions: "141,629",
        },
        {
            rank: 7,
            flag: "es",
            country: "Spain",
            totalUsers: "74,109",
            change: "+0.64%",
            changeType: "up",
            newUsers: "9,604",
            sessions: "105,287",
        },
        {
            rank: 8,
            flag: "fr",
            country: "France",
            totalUsers: "69,584",
            change: "-1.52%",
            changeType: "down",
            newUsers: "8,417",
            sessions: "96,401",
        },
        {
            rank: 9,
            flag: "mx",
            country: "Mexico",
            totalUsers: "61,203",
            change: "-0.38%",
            changeType: "down",
            newUsers: "7,255",
            sessions: "82,991",
        },
        {
            rank: 10,
            flag: "sg",
            country: "Singapore",
            totalUsers: "47,918",
            change: "+5.77%",
            changeType: "up",
            newUsers: "9,831",
            sessions: "70,402",
        },
    ],

    quarterly: [
        {
            rank: 1,
            flag: "us",
            country: "United States",
            totalUsers: "841,903",
            change: "+9.04%",
            changeType: "up",
            newUsers: "132,417",
            sessions: "1,245,602",
        },
        {
            rank: 2,
            flag: "de",
            country: "Germany",
            totalUsers: "612,284",
            change: "+6.21%",
            changeType: "up",
            newUsers: "88,903",
            sessions: "879,114",
        },
        {
            rank: 3,
            flag: "in",
            country: "India",
            totalUsers: "583,771",
            change: "+7.92%",
            changeType: "up",
            newUsers: "119,304",
            sessions: "842,609",
        },
        {
            rank: 4,
            flag: "br",
            country: "Brazil",
            totalUsers: "474,552",
            change: "+3.47%",
            changeType: "up",
            newUsers: "79,821",
            sessions: "682,109",
        },
        {
            rank: 5,
            flag: "jp",
            country: "Japan",
            totalUsers: "402,117",
            change: "+1.88%",
            changeType: "up",
            newUsers: "63,940",
            sessions: "571,203",
        },
        {
            rank: 6,
            flag: "ca",
            country: "Canada",
            totalUsers: "312,905",
            change: "-0.67%",
            changeType: "down",
            newUsers: "41,582",
            sessions: "446,114",
        },
        {
            rank: 7,
            flag: "es",
            country: "Spain",
            totalUsers: "245,380",
            change: "+0.39%",
            changeType: "up",
            newUsers: "33,704",
            sessions: "338,917",
        },
        {
            rank: 8,
            flag: "fr",
            country: "France",
            totalUsers: "232,144",
            change: "-1.89%",
            changeType: "down",
            newUsers: "29,105",
            sessions: "321,470",
        },
        {
            rank: 9,
            flag: "mx",
            country: "Mexico",
            totalUsers: "205,771",
            change: "-0.95%",
            changeType: "down",
            newUsers: "25,482",
            sessions: "287,601",
        },
        {
            rank: 10,
            flag: "sg",
            country: "Singapore",
            totalUsers: "171,322",
            change: "+4.61%",
            changeType: "up",
            newUsers: "33,789",
            sessions: "244,909",
        },
    ],
};

const UsersByCountry = () => {
    const [range, setRange] = useState("weekly");
    const [page, setPage] = useState(0);

    const allRows = useMemo(
        () => DATA_BY_RANGE[range] ?? DATA_BY_RANGE.weekly,
        [range]
    );

    const totalPages = Math.ceil(allRows.length / PAGE_SIZE) || 1;

    const visibleRows = useMemo(() => {
        const start = page * PAGE_SIZE;
        const end = start + PAGE_SIZE;
        return allRows.slice(start, end);
    }, [allRows, page]);

    const handleRangeChange = (nextRange) => {
        setRange(nextRange);
        setPage(0);
    };

    const handlePrev = () => {
        setPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    return (
        <Styled.Wrap className="surface-card">
            <div className="cardHeader">
                <div>
                    <h2>Users by Country</h2>
                    <p>Geo distribution of active users</p>
                </div>
                <div className="toggleGroup">
                    <button
                        className={
                            "toggle" + (range === "weekly" ? " active" : "")
                        }
                        type="button"
                        onClick={() => handleRangeChange("weekly")}
                    >
                        Weekly
                    </button>
                    <button
                        className={
                            "toggle" + (range === "monthly" ? " active" : "")
                        }
                        type="button"
                        onClick={() => handleRangeChange("monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={
                            "toggle" + (range === "quarterly" ? " active" : "")
                        }
                        type="button"
                        onClick={() => handleRangeChange("quarterly")}
                    >
                        Quarterly
                    </button>
                </div>
            </div>

            <div className="tableShell">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Country</th>
                            <th>Total User</th>
                            <th>vs. Last period</th>
                            <th>New User</th>
                            <th>Engaged Sessions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibleRows.map((row) => (
                            <tr key={row.rank}>
                                <td>{row.rank}</td>
                                <td>
                                    <div className="countryCell">
                                        <span
                                            className={`flag flag-${row.flag}`}
                                        />
                                        <span>{row.country}</span>
                                    </div>
                                </td>
                                <td>{row.totalUsers}</td>
                                <td>
                                    <span
                                        className={
                                            "changeBadge " +
                                            (row.changeType === "up"
                                                ? "up"
                                                : "down")
                                        }
                                    >
                                        {row.change}
                                    </span>
                                </td>
                                <td>{row.newUsers}</td>
                                <td>{row.sessions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="tableFooter">
                <span>
                    Showing {visibleRows.length} of {allRows.length} regions
                </span>
                <button type="button" className="linkBtn">
                    View full list
                </button>
                <div className="pager">
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={page === 0}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={page >= totalPages - 1}
                    >
                        Next
                    </button>
                </div>
            </div>
        </Styled.Wrap>
    );
};

export default UsersByCountry;
