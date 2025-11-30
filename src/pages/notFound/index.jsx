import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

import {
    TbError404,
    TbArrowLeft,
    TbHome,
    TbShoppingBag,
    TbSearch,
} from "react-icons/tb";

export default function NotFound() {
    const location = useLocation();

    const suggestions = useMemo(
        () => [
            {
                label: "Go Home",
                to: "/home",
                icon: <TbHome size={18} />,
                desc: "Back to the main dashboard.",
            },
            {
                label: "Browse Shop",
                to: "/shop",
                icon: <TbShoppingBag size={18} />,
                desc: "Explore all products.",
            },
            {
                label: "Search Products",
                to: "/shop?focus=search",
                icon: <TbSearch size={18} />,
                desc: "Find items quickly.",
            },
        ],
        []
    );

    return (
        <Styled.Wrap className="app-max-width">
            <Styled.Card className="surface-card">
                <div className="iconShell">
                    <TbError404 size={64} />
                </div>

                <h1>Page not found</h1>
                <p className="text-muted">
                    The page you’re trying to open doesn’t exist or may have been moved.
                </p>

                <div className="pathBox">
                    <div className="pathLabel">Requested URL</div>
                    <code className="path">{location.pathname}</code>
                </div>

                <div className="actions">
                    <NavLink to="/home" className="btn-primary">
                        <TbHome size={18} />
                        Back to Home
                    </NavLink>

                    <NavLink to={-1} className="btn-ghost">
                        <TbArrowLeft size={18} />
                        Go Back
                    </NavLink>
                </div>

                <div className="divider" />

                <div className="suggestions">
                    <div className="suggestTitle">Suggested places</div>

                    <div className="suggestGrid">
                        {suggestions.map((s) => (
                            <NavLink key={s.to} to={s.to} className="suggestCard">
                                <div className="sIcon">{s.icon}</div>
                                <div className="sBody">
                                    <div className="sLabel">{s.label}</div>
                                    <div className="sDesc text-muted">{s.desc}</div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </Styled.Card>
        </Styled.Wrap>
    );
}
