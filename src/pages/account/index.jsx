// src/pages/accounts/index.jsx
import { useMemo, useState } from "react";
import { Styled } from "./styled";

import { TbUser, TbSchool, TbShieldLock, TbWorld, TbBell } from "react-icons/tb";

// ⬇️ Section components (hum next steps mein banayenge)
import PersonalInfo from "./personalInfo";
import WorkEducation from "./workEducation";
import PrivacyProtection from "./privacyProtection";
import LanguageRegion from "./languageRegion";
import NotificationAlerts from "./notificationAlerts";

const SECTIONS = [
    {
        id: "personal",
        label: "Personal Information",
        desc: "Basic details, profile name and public info.",
        icon: TbUser,
        component: PersonalInfo,
    },
    {
        id: "work",
        label: "Work & Education",
        desc: "Company, role, education history.",
        icon: TbSchool,
        component: WorkEducation,
    },
    {
        id: "privacy",
        label: "Privacy & Protection",
        desc: "Visibility, security and data controls.",
        icon: TbShieldLock,
        component: PrivacyProtection,
    },
    {
        id: "language",
        label: "Language & Region",
        desc: "Locale, language and regional formats.",
        icon: TbWorld,
        component: LanguageRegion,
    },
    {
        id: "notifications",
        label: "Notification & Alerts",
        desc: "Email, in-app and reminder settings.",
        icon: TbBell,
        component: NotificationAlerts,
    },
];

const Accounts = () => {
    const [activeId, setActiveId] = useState("personal");
    const [search, setSearch] = useState("");

    const filteredSections = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return SECTIONS;
        return SECTIONS.filter((s) => s.label.toLowerCase().includes(q));
    }, [search]);

    const activeSection =
        SECTIONS.find((s) => s.id === activeId) ?? SECTIONS[0];

    const ActiveComponent = activeSection.component;

    return (
        <Styled.Wrap>
            <div className="accountLayout surface-card">
                {/* LEFT: Settings nav */}
                <aside className="settingsNav">
                    <div className="settingsHeader">
                        <div className="settingsIconCircle">
                            <TbUser />
                        </div>
                        <div className="settingsTitleBlock">
                            <h1>Account Settings</h1>
                            <p>Manage your profile, privacy and app preferences.</p>
                        </div>
                    </div>

                    <div className="searchSetting">
                        <input
                            type="text"
                            placeholder="Find a setting"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="settingsList">
                        {filteredSections.length === 0 && (
                            <div className="emptySearch">No settings match this search.</div>
                        )}

                        {filteredSections.map((section) => {
                            const Icon = section.icon;
                            const isActive = section.id === activeId;

                            return (
                                <button
                                    key={section.id}
                                    type="button"
                                    className={
                                        "settingsItem" + (isActive ? " isActive" : "")
                                    }
                                    onClick={() => setActiveId(section.id)}
                                >
                                    <div className="settingsItemMain">
                                        <span className="settingsItemIcon">
                                            <Icon />
                                        </span>
                                        <span className="settingsItemText">
                                            <span className="label">{section.label}</span>
                                            <span className="desc">{section.desc}</span>
                                        </span>
                                    </div>
                                    {isActive && <span className="activeDot" />}
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* RIGHT: Active panel */}
                <section className="settingsPanel">
                    <header className="panelHeader">
                        <div className="panelTitleBlock">
                            <div className="panelIconCircle">
                                <activeSection.icon />
                            </div>
                            <div>
                                <h2>{activeSection.label}</h2>
                                <p>{activeSection.desc}</p>
                            </div>
                        </div>
                    </header>

                    <div className="panelBody">
                        {/* Active section component renders full form / content */}
                        <ActiveComponent />
                    </div>
                </section>
            </div>
        </Styled.Wrap>
    );
};

export default Accounts;
