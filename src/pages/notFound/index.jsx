import React, { useMemo } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Styled } from "./styled";

import {
    TbError404,
    TbArrowLeft,
    TbHome,
    TbUser,
    TbSettings,
} from "react-icons/tb";

export default function NotFound() {
    const location = useLocation();
    const navigate = useNavigate();

    const suggestions = useMemo(
        () => [
            {
                label: "Go Home",
                to: "/home",
                icon: <TbHome size={18} />,
                desc: "Back to the main dashboard.",
            },
            {
                label: "View Users",
                to: "/users",
                icon: <TbUser size={18} />,
                desc: "Open the user management screen.",
            },
            {
                label: "Account Settings",
                to: "/account",
                icon: <TbSettings size={18} />,
                desc: "Review profile and account preferences.",
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

                    <button type="button" className="btn-ghost" onClick={() => navigate(-1)}>
                        <TbArrowLeft size={18} />
                        Go Back
                    </button>
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
