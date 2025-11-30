// src/components/navlinks/index.jsx
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

import {
    TbLayoutDashboard,
    TbUser,
    TbId,
    TbCircle,
    TbAlertTriangle,
    TbLogin,
    TbUserPlus,
    TbFileDescription,
    TbLayersSubtract,
    TbChevronRight,
} from "react-icons/tb";

import { useState } from "react";

/* ---------- NAV DATA (same as before) ---------- */
const NAV_DATA = [
    {
        label: "Main",
        items: [
            { to: "/dashboard", label: "Dashboard", icon: TbLayoutDashboard },
            { to: "/users", label: "Users", icon: TbUser },
            { to: "/account", label: "Account", icon: TbId },
            { to: "/starter", label: "Starter", icon: TbCircle },
            { to: "/error-404", label: "Error 404", icon: TbAlertTriangle },
            { to: "/login", label: "Login", icon: TbLogin },
            { to: "/signup", label: "Sign up", icon: TbUserPlus },
            { to: "/docs", label: "Documentation", icon: TbFileDescription },
        ],
    },

    {
        label: "Multi level",
        items: [
            {
                label: "Level two (1)",
                icon: TbLayersSubtract,
                children: [],
            },
            {
                label: "Level two (2)",
                icon: TbLayersSubtract,
                children: [
                    {
                        label: "Level three (3)",
                        children: [],
                    },
                    {
                        label: "Level three (4)",
                        children: [
                            {
                                label: "Level four (1)",
                                children: [],
                            },
                            {
                                label: "Level four (2)",
                                children: [
                                    { label: "Level five (1)" },
                                    { label: "Level five (2)" },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                label: "Level two (3)",
                icon: TbLayersSubtract,
                children: [],
            },
        ],
    },
];

/* ---------- Recursive multi-level item ---------- */
const MultiLevelItem = ({ item }) => {
    const [open, setOpen] = useState(false);

    // leaf (no children)
    if (!item.children || item.children.length === 0) {
        return (
            <li className="navItem">
                <div className="navLink leaf">
                    <span className="icon">
                        <TbCircle />
                    </span>
                    <span className="label">{item.label}</span>
                </div>
            </li>
        );
    }

    // parent with children
    return (
        <li className="navItem">
            <div
                className={`parentItem ${open ? "open" : ""}`}
                onClick={() => setOpen((p) => !p)}
            >
                <span className="icon">
                    <TbLayersSubtract />
                </span>
                <span className="label">{item.label}</span>
                <TbChevronRight className="chevron" />
            </div>

            <div
                className="collapseWrapper"
                style={{ maxHeight: open ? "600px" : "0px" }}
            >
                <ul className="navList">
                    {item.children.map((child, idx) => (
                        <MultiLevelItem key={idx} item={child} />
                    ))}
                </ul>
            </div>
        </li>
    );
};

/* ---------- Main NavLinks component ---------- */
const NavLinks = ({ onNavigate }) => {
    const handleClick = () => {
        if (window.innerWidth < 1200 && typeof onNavigate === "function") {
            onNavigate();
        }
    };

    return (
        <Styled.Wrap>
            {NAV_DATA.map((section, secIndex) => (
                <div key={section.label}>
                    <div className="sectionLabel">{section.label}</div>

                    <ul className="navList">
                        {section.items.map((item, idx) => {
                            if (item.children) {
                                // multi level group
                                return <MultiLevelItem key={idx} item={item} />;
                            }

                            const Icon = item.icon;
                            return (
                                <li className="navItem" key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                            "navLink" + (isActive ? " active" : "")
                                        }
                                        onClick={handleClick}
                                    >
                                        <span className="icon">
                                            <Icon />
                                        </span>
                                        <span className="label">{item.label}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    {secIndex < NAV_DATA.length - 1 && (
                        <div className="divider" aria-hidden="true" />
                    )}
                </div>
            ))}
        </Styled.Wrap>
    );
};

export default NavLinks;
