// src/pages/accounts/privacyProtection/index.jsx
import { useState } from "react";
import { Styled } from "./styled";
import {
    TbDeviceDesktopAnalytics,
    TbDownload,
    TbTrash,
} from "react-icons/tb";

const initialState = {
    profileVisibility: "followers",
    showOnlineStatus: true,
    loginAlerts: true,
    twoFactorAuth: false,
};

const initialSessions = [
    {
        id: 1,
        device: "Chrome on Windows",
        location: "Bengaluru, India",
        lastActive: "Just now",
        current: true,
    },
    {
        id: 2,
        device: "Edge on Windows",
        location: "Bhopal, India",
        lastActive: "2 hours ago",
        current: false,
    },
    {
        id: 3,
        device: "Chrome on Android",
        location: "Pune, India",
        lastActive: "Yesterday",
        current: false,
    },
];

const PrivacyProtection = () => {
    const [form, setForm] = useState(initialState);
    const [sessions, setSessions] = useState(initialSessions);
    const [saving, setSaving] = useState(false);
    const [downloading, setDownloading] = useState(false);

    const handleSelect = (field) => (e) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

    const handleToggle = (field) => () => {
        setForm((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleSignOutSession = (id) => {
        setSessions((prev) => prev.filter((s) => s.id !== id));
    };

    const handleSignOutAll = () => {
        setSessions((prev) => prev.filter((s) => s.current));
    };

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => setSaving(false), 700);
    };

    const handleReset = () => {
        setForm(initialState);
        setSessions(initialSessions);
    };

    const handleDownload = () => {
        setDownloading(true);
        setTimeout(() => setDownloading(false), 800);
    };

    const handleDeleteAccount = () => {
        const ok = window.confirm(
            "This is a demo control. In a real app this would start an account deletion flow."
        );
        if (!ok) return;
        // demo only – no real action
    };

    return (
        <Styled.Wrap>
            {/* PROFILE PRIVACY */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Profile visibility</h3>
                        <p>
                            Choose who can see your profile details and activity in
                            search results.
                        </p>
                    </div>
                </div>

                <div className="sectionCard">
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Who can see your profile?</div>
                        <select
                            value={form.profileVisibility}
                            onChange={handleSelect("profileVisibility")}
                        >
                            <option value="everyone">Everyone</option>
                            <option value="followers">Followers only</option>
                            <option value="onlyMe">Only me</option>
                        </select>
                    </div>

                    <div className="fieldGroup">
                        <div className="fieldLabel">Online status</div>
                        <div
                            className="toggleRow"
                            onClick={handleToggle("showOnlineStatus")}
                        >
                            <div className="toggleShell">
                                <div
                                    className={
                                        "toggleSwitch" +
                                        (form.showOnlineStatus ? " isOn" : "")
                                    }
                                >
                                    <span className="thumb" />
                                </div>
                                <span className="toggleLabel">
                                    Show when I&apos;m online
                                </span>
                            </div>
                            <p className="helper">
                                If disabled, people will not see your online indicator.
                            </p>
                        </div>
                    </div>

                    <div className="fieldGroup">
                        <div className="fieldLabel">Login alerts</div>
                        <div
                            className="toggleRow"
                            onClick={handleToggle("loginAlerts")}
                        >
                            <div className="toggleShell">
                                <div
                                    className={
                                        "toggleSwitch" +
                                        (form.loginAlerts ? " isOn" : "")
                                    }
                                >
                                    <span className="thumb" />
                                </div>
                                <span className="toggleLabel">
                                    Send alerts for new logins
                                </span>
                            </div>
                            <p className="helper">
                                We&apos;ll notify you when a new device signs in.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* SECURITY & SESSIONS */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Security</h3>
                        <p>Review active sessions and login protection.</p>
                    </div>
                </div>

                <div className="sectionCard sessionsCard">
                    <div className="fieldGroup fullWidth">
                        <div className="fieldLabel">Two-factor authentication</div>
                        <div
                            className="toggleRow"
                            onClick={handleToggle("twoFactorAuth")}
                        >
                            <div className="toggleShell">
                                <div
                                    className={
                                        "toggleSwitch" +
                                        (form.twoFactorAuth ? " isOn" : "")
                                    }
                                >
                                    <span className="thumb" />
                                </div>
                                <span className="toggleLabel">
                                    Require a code when logging in
                                </span>
                            </div>
                            <p className="helper">
                                We&apos;ll ask for a code from an authenticator app or
                                SMS in addition to your password.
                            </p>
                        </div>
                    </div>

                    <div className="sessionsHeaderRow">
                        <div className="sessionsTitle">
                            <span className="iconCircle">
                                <TbDeviceDesktopAnalytics />
                            </span>
                            <div>
                                <div className="label">Active sessions</div>
                                <div className="meta">
                                    Signed-in devices using your account right now.
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="smallBtn"
                            onClick={handleSignOutAll}
                        >
                            Sign out other devices
                        </button>
                    </div>

                    <ul className="sessionsList">
                        {sessions.map((session) => (
                            <li key={session.id} className="sessionItem">
                                <div className="deviceBlock">
                                    <div className="dot" />
                                    <div>
                                        <div className="deviceName">
                                            {session.device}
                                            {session.current && (
                                                <span className="pill">This device</span>
                                            )}
                                        </div>
                                        <div className="metaLine">
                                            {session.location} • Last active{" "}
                                            {session.lastActive}
                                        </div>
                                    </div>
                                </div>
                                {!session.current && (
                                    <button
                                        type="button"
                                        className="linkBtn"
                                        onClick={() =>
                                            handleSignOutSession(session.id)
                                        }
                                    >
                                        Sign out
                                    </button>
                                )}
                            </li>
                        ))}
                        {sessions.length === 0 && (
                            <li className="emptySessions">
                                No active sessions found.
                            </li>
                        )}
                    </ul>
                </div>
            </section>

            <div className="sectionDivider" />

            {/* DATA CONTROLS */}
            <section className="sectionBlock">
                <div className="sectionHeader">
                    <div>
                        <h3>Data &amp; account controls</h3>
                        <p>
                            Download a copy of your data or start a deletion request
                            from here.
                        </p>
                    </div>
                </div>

                <div className="dataRow">
                    <div className="dataItem">
                        <div className="dataIcon">
                            <TbDownload />
                        </div>
                        <div className="dataText">
                            <div className="title">Download your data</div>
                            <div className="meta">
                                Get an export of your activity, settings and profile
                                data.
                            </div>
                        </div>
                        <button
                            type="button"
                            className="smallBtn"
                            onClick={handleDownload}
                            disabled={downloading}
                        >
                            {downloading ? "Preparing…" : "Request export"}
                        </button>
                    </div>

                    <div className="dataItem danger">
                        <div className="dataIcon">
                            <TbTrash />
                        </div>
                        <div className="dataText">
                            <div className="title">Delete account</div>
                            <div className="meta">
                                Permanently remove your account and associated
                                information.
                            </div>
                        </div>
                        <button
                            type="button"
                            className="smallBtn dangerBtn"
                            onClick={handleDeleteAccount}
                        >
                            Start delete flow
                        </button>
                    </div>
                </div>
            </section>

            <div className="sectionActions">
                <button type="button" onClick={handleReset} disabled={saving}>
                    Reset
                </button>
                <button
                    type="button"
                    className="primary"
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving ? "Saving…" : "Save changes"}
                </button>
            </div>
        </Styled.Wrap>
    );
};

export default PrivacyProtection;
