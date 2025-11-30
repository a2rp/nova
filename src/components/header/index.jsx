// src/components/header/index.jsx
import { useEffect, useRef, useState } from "react";
import { Styled } from "./styled";
import logo from "/images/logo.png";
import { RiMenuFold4Fill } from "react-icons/ri";
import {
    TbSearch,
    TbWorld,
    TbBell,
    TbUserCircle,
    TbQuestionMark,
    TbLogout2,
    TbAdjustmentsHorizontal,
    TbUserCog,
    TbMoon,
    TbSettings,
} from "react-icons/tb";

/* Real flag icons */
import flagUk from "/images/flags/uk.png";
import flagFr from "/images/flags/fr.png";
import flagIn from "/images/flags/in.png";
import flagSa from "/images/flags/sa.png";

const STORAGE_KEY = "nova-theme";

const Header = ({ onOpenSideMenu }) => {
    const [openLang, setOpenLang] = useState(false);
    const [openNotif, setOpenNotif] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);

    // ---------------- THEME STATE (persisted) ----------------
    const [theme, setTheme] = useState(() => {
        if (typeof window === "undefined") return "dark";
        const saved = window.localStorage.getItem(STORAGE_KEY);
        return saved === "light" || saved === "dark" ? saved : "dark";
    });

    const headerRef = useRef(null);

    // click outside -> close dropdowns
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setOpenLang(false);
                setOpenNotif(false);
                setOpenProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // apply theme + persist to localStorage
    useEffect(() => {
        if (theme === "light") {
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }

        try {
            window.localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // ignore storage errors
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const toggleLang = () => {
        setOpenLang((prev) => !prev);
        setOpenNotif(false);
        setOpenProfile(false);
    };

    const toggleNotif = () => {
        setOpenNotif((prev) => !prev);
        setOpenLang(false);
        setOpenProfile(false);
    };

    const toggleProfile = () => {
        setOpenProfile((prev) => !prev);
        setOpenLang(false);
        setOpenNotif(false);
    };

    return (
        <Styled.Header ref={headerRef}>
            {/* Mobile brand + menu */}
            <div className="menuBrandWrapper">
                <div
                    className="menuOpenLink"
                    onClick={() => {
                        onOpenSideMenu?.();
                    }}
                >
                    <RiMenuFold4Fill size={32} />
                </div>
                <div className="brandLogoNameWrapper">
                    <div className="logoWrapper">
                        <img src={logo} alt="Nova logo" />
                    </div>
                    <div className="brandName">Nova</div>
                </div>
            </div>

            {/* Search */}
            <div className="searchWrapper">
                <div className="searchInputShell">
                    <TbSearch />
                    <input type="text" placeholder="Search" />
                </div>
            </div>

            {/* Icons + theme toggle */}
            <div className="iconsWrapper">
                {/* Theme toggle inline */}
                <div
                    className="themeToggleInline"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleTheme();
                    }}
                >
                    <div
                        className={
                            "themeToggle" + (theme === "light" ? " isLight" : "")
                        }
                    >
                        <div className="ball" />
                    </div>
                </div>

                {/* Language */}
                <div
                    className="iconDropdown"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleLang();
                    }}
                >
                    <button className="iconButton" type="button">
                        <TbWorld />
                    </button>
                    {openLang && (
                        <div className="dropdownPanel lang">
                            <div className="dropdownSectionTitle">
                                Language &amp; Currency
                            </div>
                            <ul className="langList">
                                <li>
                                    <span className="flagLabel">
                                        <img
                                            src={flagUk}
                                            alt="English"
                                            className="flagIcon"
                                        />
                                        English
                                    </span>
                                    <span className="currencySymbol">$</span>
                                </li>
                                <li>
                                    <span className="flagLabel">
                                        <img
                                            src={flagFr}
                                            alt="Française"
                                            className="flagIcon"
                                        />
                                        Française
                                    </span>
                                    <span className="currencySymbol">€</span>
                                </li>
                                <li>
                                    <span className="flagLabel">
                                        <img
                                            src={flagIn}
                                            alt="हिन्दी"
                                            className="flagIcon"
                                        />
                                        हिन्दी
                                    </span>
                                    <span className="currencySymbol">₹</span>
                                </li>
                                <li>
                                    <span className="flagLabel">
                                        <img
                                            src={flagSa}
                                            alt="Arabic"
                                            className="flagIcon"
                                        />
                                        Arabic
                                    </span>
                                    <span className="currencySymbol">ريـال</span>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Notifications */}
                <div
                    className="iconDropdown"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleNotif();
                    }}
                >
                    <button className="iconButton" type="button">
                        <TbBell />
                    </button>
                    {openNotif && (
                        <div className="dropdownPanel notifications">
                            {/* inner scroll wrapper for overlay scrollbar */}
                            <div className="notifScroll">
                                <div className="dropdownSectionTitle">Today</div>
                                <ul className="notifList">
                                    <li>
                                        <div className="notifAvatar">JW</div>
                                        <div className="notifBody">
                                            <div className="notifName">
                                                Jolyon Wagg
                                            </div>
                                            <div className="notifText">
                                                and other friend have birthdays
                                                today.
                                            </div>
                                            <div className="notifMeta">
                                                3 hours ago · Social
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="notifAvatar">BC</div>
                                        <div className="notifBody">
                                            <div className="notifName">
                                                Bianca Castapheore
                                            </div>
                                            <div className="notifText">
                                                commented on your photo.
                                            </div>
                                            <div className="notifMeta">
                                                4 hours ago · Comments
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="notifAvatar">N</div>
                                        <div className="notifBody">
                                            <div className="notifName">
                                                Nestor
                                            </div>
                                            <div className="notifText">
                                                sent you a friend request.
                                            </div>
                                            <div className="notifMeta">
                                                5 hours ago · Requests
                                            </div>
                                        </div>
                                    </li>
                                    <div className="notifFooter">
                                        Load more notifications
                                    </div>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Profile */}
                <div
                    className="iconDropdown"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleProfile();
                    }}
                >
                    <button className="avatarButton" type="button">
                        <div className="avatarCircle">
                            <TbUserCircle />
                        </div>
                    </button>
                    {openProfile && (
                        <div className="dropdownPanel profile">
                            <div className="profileHeader">
                                <div className="profileAvatar">
                                    <TbUserCircle />
                                </div>
                                <div className="profileText">
                                    <div className="name">Guest</div>
                                    <div className="role">
                                        Merchant Captain
                                        <span className="badgeIcon">⚓</span>
                                    </div>
                                </div>
                            </div>

                            <div className="profileMenu">
                                <div className="profileGroup">
                                    <button className="profileItem" type="button">
                                        <TbSettings />
                                        <span>Accessibility</span>
                                    </button>
                                    <button className="profileItem" type="button">
                                        <TbAdjustmentsHorizontal />
                                        <span>Preferences</span>
                                    </button>
                                    <button className="profileItem" type="button">
                                        <TbMoon />
                                        <span>Dark mode</span>
                                    </button>
                                </div>

                                <div className="profileGroup">
                                    <button className="profileItem" type="button">
                                        <TbUserCog />
                                        <span>Account Settings</span>
                                    </button>
                                    <button className="profileItem" type="button">
                                        <TbQuestionMark />
                                        <span>Help Center</span>
                                    </button>
                                </div>

                                <div className="profileGroup profileGroup--danger">
                                    <button className="profileItem" type="button">
                                        <TbLogout2 />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Styled.Header>
    );
};

export default Header;
