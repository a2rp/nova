// src/components/header/styled.js
import styled from "styled-components";

export const Styled = {
    Header: styled.header`
        position: fixed;
        height: 70px;
        left: 300px;
        width: calc(100% - 300px);
        border-bottom: 1px solid var(--color-border);
        background-color: var(--color-bg-elevated);

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 15px;
        z-index: 5;

        @media (width < 1200px) {
            left: 0;
            width: 100%;
        }

        .menuBrandWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;

            @media (width > 1200px) {
                display: none;
            }

            .menuOpenLink {
                cursor: pointer;

                svg {
                    color: var(--color-heading);
                }
            }

            .brandLogoNameWrapper {
                position: relative;
                display: flex;
                align-items: center;
                gap: 15px;
                text-decoration: none;

                .logoWrapper {
                    background-color: #111;
                    img {
                        height: 30px;
                        display: block;
                    }
                }

                .brandName {
                    font-family: "Poppins", sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                    color: var(--color-heading);
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                }
            }
        }

        .searchWrapper {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            padding-left: 24px;
            padding-right: 24px;

            @media (width < 768px) {
                padding-left: 10px;
                padding-right: 10px;
            }

            .searchInputShell {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 8px 14px;
                border-radius: 999px;
                background-color: var(--color-surface-soft);
                border: 1px solid var(--color-border);
                max-width: 360px;
                width: 100%;

                svg {
                    font-size: 16px;
                    color: var(--color-text-muted);
                }

                input {
                    width: 100%;
                    border: none;
                    outline: none;
                    background: transparent;
                    color: var(--color-text);
                    font-size: 13px;

                    &::placeholder {
                        color: var(--color-text-muted);
                    }
                }
            }
        }

        .iconsWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;

            /* Inline theme toggle beside language */
            .themeToggleInline {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-right: 4px;
                cursor: pointer;

                .themeToggle {
                    width: 44px;
                    height: 24px;
                    border-radius: 999px;
                    background-color: var(--color-surface-soft);
                    border: 1px solid var(--color-border);
                    padding: 2px;
                    display: flex;
                    align-items: center;
                    transition: background 0.15s ease, border-color 0.15s ease;

                    .ball {
                        width: 18px;
                        height: 18px;
                        border-radius: 50%;
                        background-color: var(--color-heading);
                        transform: translateX(0);
                        transition: transform 0.18s ease;
                    }

                    &.isLight .ball {
                        transform: translateX(18px);
                    }
                }
            }

            .iconDropdown {
                position: relative;
            }

            .iconButton,
            .avatarButton {
                cursor: pointer;
                border: none;
                outline: none;
                background-color: var(--color-surface-soft);
                border-radius: 999px;
                width: 34px;
                height: 34px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: background 0.15s ease, transform 0.15s ease;
                border: 1px solid transparent;
                position: relative;

                svg {
                    color: var(--color-heading);
                    font-size: 18px;
                }

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-border);
                    transform: translateY(-1px);
                }
            }

            .avatarButton {
                padding: 0;
                overflow: hidden;

                .avatarCircle {
                    width: 28px;
                    height: 28px;
                    border-radius: 50%;
                    background-color: var(--color-surface);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    color: var(--color-heading);
                    font-weight: 600;
                }
            }

            .dropdownPanel {
                position: absolute;
                top: calc(100% + 10px);
                min-width: 220px;
                background-color: var(--color-surface);
                border-radius: 12px;
                border: 1px solid var(--color-border);
                box-shadow: var(--shadow-soft);
                padding: 10px 0;
                font-size: 13px;
                color: var(--color-text);
                z-index: 20;
            }

            .dropdownPanel.lang {
                right: 0;
            }

            /* ===== Notifications panel: overlay scrollbar using inner wrapper ===== */
            .dropdownPanel.notifications {
                right: 0;
                max-height: 360px;
                overflow: hidden; /* inner div handles scroll */
            }

            .dropdownPanel.notifications .notifScroll {
                max-height: 360px;
                overflow-y: auto;

                /* overlay: keep content width same */
                padding-right: 8px;
                margin-right: -8px;

                scrollbar-gutter: stable;
                scrollbar-width: thin; /* Firefox */
            }

            .dropdownPanel.notifications .notifScroll::-webkit-scrollbar {
                width: 6px;
                height: 6px;
            }

            .dropdownPanel.notifications .notifScroll::-webkit-scrollbar-track {
                background: transparent;
            }

            .dropdownPanel.notifications .notifScroll::-webkit-scrollbar-thumb {
                background: transparent;
                border-radius: 999px;
                border: 2px solid transparent;
                background-clip: padding-box;
                transition: background 0.15s ease;
            }

            @media (hover: hover) {
                .dropdownPanel.notifications
                    .notifScroll:hover::-webkit-scrollbar-thumb {
                    background: var(--scrollbar-thumb);
                }

                .dropdownPanel.notifications
                    .notifScroll::-webkit-scrollbar-thumb:hover {
                    background: var(--color-text-muted);
                }

                .dropdownPanel.notifications
                    .notifScroll::-webkit-scrollbar-thumb:active {
                    background: var(--color-heading);
                }
            }

            @media (hover: none) {
                .dropdownPanel.notifications
                    .notifScroll::-webkit-scrollbar-thumb {
                    background: var(--scrollbar-thumb);
                }
            }

            .dropdownPanel.profile {
                right: 0;
            }

            .dropdownSectionTitle {
                padding: 6px 16px;
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: var(--color-text-muted);
            }

            .langList {
                list-style: none;
                margin: 0;
                padding: 4px 0;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 6px 16px;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--color-surface-soft);
                    }

                    .flagLabel {
                        display: flex;
                        align-items: center;
                        gap: 8px;

                        .flagIcon {
                            width: 18px;
                            height: 12px;
                            border-radius: 2px;
                            object-fit: cover;
                            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
                        }
                    }

                    .currencySymbol {
                        color: var(--color-text-muted);
                    }
                }
            }

            .notifList {
                list-style: none;
                margin: 0;
                padding: 4px 0;

                li {
                    padding: 8px 16px;
                    display: flex;
                    gap: 10px;
                    cursor: pointer;

                    &:hover {
                        background-color: var(--color-surface-soft);
                    }

                    .notifAvatar {
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        background-color: var(--color-surface-soft);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 13px;
                        color: var(--color-heading);
                    }

                    .notifBody {
                        flex: 1;
                        .notifName {
                            font-weight: 600;
                            color: var(--color-heading);
                        }
                        .notifText {
                            font-size: 12px;
                        }
                        .notifMeta {
                            font-size: 11px;
                            color: var(--color-text-muted);
                            margin-top: 2px;
                        }
                    }
                }

                .notifFooter {
                    padding: 8px 16px;
                    text-align: center;
                    font-size: 12px;
                    color: var(--color-link);
                    cursor: pointer;

                    &:hover {
                        background-color: var(--color-surface-soft);
                    }
                }
            }

            .profileHeader {
                display: flex;
                align-items: flex-start;
                gap: 10px;
                padding: 10px 16px 12px;
                border-bottom: 1px solid var(--color-border);

                .profileAvatar {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: var(--color-surface-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    color: var(--color-heading);
                }

                .profileText {
                    .name {
                        font-weight: 600;
                        color: var(--color-heading);
                        font-size: 13px;
                    }
                    .role {
                        margin-top: 2px;
                        font-size: 11px;
                        color: var(--color-link);
                        display: flex;
                        align-items: center;
                        gap: 4px;

                        .badgeIcon {
                            font-size: 12px;
                        }
                    }
                }
            }

            .profileMenu {
                padding: 4px 0 6px;

                .profileGroup {
                    padding: 4px 0;
                    border-top: 1px solid var(--color-border);

                    &:first-of-type {
                        border-top: none;
                    }
                }

                .profileGroup--danger {
                    margin-top: 2px;
                }

                .profileItem {
                    width: 100%;
                    padding: 7px 16px;
                    font-size: 13px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    border: none;
                    outline: none;
                    background: transparent;
                    color: var(--color-text);

                    svg {
                        font-size: 16px;
                        color: var(--color-text-muted);
                    }

                    &:hover {
                        background-color: var(--color-surface-soft);
                        svg {
                            color: var(--color-heading);
                        }
                    }
                }

                .profileGroup--danger .profileItem:hover {
                    color: #ff6b6b;
                    svg {
                        color: #ff6b6b;
                    }
                }
            }
        }
    `,
};
