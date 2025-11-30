// src/pages/accounts/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        padding-inline: 32px;
        padding-top: 24px;
        padding-bottom: 32px;
        color: var(--color-text);
        background-color: var(--color-bg);

        @media (width < 768px) {
            padding-inline: 16px;
        }

        .surface-card {
            background-color: var(--color-surface);
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-soft);
        }

        .accountLayout {
            display: grid;
            grid-template-columns: 280px minmax(0, 1fr);
            min-height: 520px;
            overflow: hidden;

            @media (width < 960px) {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        /* ============= LEFT NAV ============= */
        .settingsNav {
            border-right: 1px solid var(--color-border);
            padding: 20px 18px;
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.04),
                    transparent 55%
                ),
                var(--color-surface-soft);

            @media (width < 960px) {
                border-right: none;
                border-bottom: 1px solid var(--color-border);
            }
        }

        .settingsHeader {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;

            .settingsIconCircle {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: radial-gradient(
                    circle at 30% 0%,
                    rgba(255, 255, 255, 0.2),
                    rgba(255, 255, 255, 0.03)
                );
                color: var(--color-heading);

                svg {
                    font-size: 18px;
                }
            }

            .settingsTitleBlock {
                h1 {
                    font-size: 18px;
                    color: var(--color-heading);
                    margin-bottom: 2px;
                }

                p {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }
        }

        .searchSetting {
            margin-bottom: 14px;

            input {
                width: 100%;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                font-size: 12px;
                padding: 7px 11px;
                outline: none;
                transition: border-color 0.15s ease, background 0.15s ease;

                &::placeholder {
                    color: var(--color-text-muted);
                }

                &:focus {
                    border-color: var(--color-heading);
                    background-color: var(--color-surface-soft);
                }
            }
        }

        .settingsList {
            max-height: 460px;
            overflow-y: auto;
            padding-right: 4px;

            /* thin scrollbar */
            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-thumb) transparent;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--scrollbar-thumb);
                border-radius: 999px;
            }
        }

        .emptySearch {
            font-size: 11px;
            color: var(--color-text-muted);
            padding: 8px 4px;
        }

        .settingsItem {
            width: 100%;
            border-radius: 12px;
            border: 1px solid transparent;
            background: transparent;
            padding: 8px 10px;
            margin-bottom: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease;

            .settingsItemMain {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .settingsItemIcon {
                width: 30px;
                height: 30px;
                border-radius: 999px;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .settingsItemText {
                text-align: left;

                .label {
                    display: block;
                    font-size: 13px;
                    color: var(--color-heading);
                }

                .desc {
                    display: block;
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .activeDot {
                width: 7px;
                height: 7px;
                border-radius: 999px;
                background-color: var(--color-heading);
                flex-shrink: 0;
            }

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-border);
                transform: translateY(-1px);
            }

            &.isActive {
                background: radial-gradient(
                        circle at top left,
                        rgba(255, 255, 255, 0.12),
                        transparent 60%
                    ),
                    var(--color-surface);
                border-color: var(--color-heading);
            }
        }

        /* ============= RIGHT PANEL ============= */
        .settingsPanel {
            padding: 22px 24px 24px;
            display: flex;
            flex-direction: column;
            min-width: 0;

            @media (width < 768px) {
                padding-inline: 16px;
            }
        }

        .panelHeader {
            margin-bottom: 16px;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 10px;

            .panelTitleBlock {
                display: flex;
                align-items: center;
                gap: 10px;

                .panelIconCircle {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background-color: var(--color-surface-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 18px;
                        color: var(--color-heading);
                    }
                }

                h2 {
                    font-size: 18px;
                    color: var(--color-heading);
                    margin-bottom: 2px;
                }

                p {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }
        }

        .panelBody {
            flex: 1;
            overflow-y: auto;
            padding-right: 4px;

            /* subtle scroll */
            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-thumb) transparent;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--scrollbar-thumb);
                border-radius: 999px;
            }
        }

        /* Generic section styles for inner components */
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
            gap: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionCard {
            background-color: var(--color-surface-soft);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 12px 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 2px;
            }

            .fieldValue {
                font-size: 13px;
                color: var(--color-heading);
            }

            input,
            select,
            textarea {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;
                resize: vertical;
                min-height: 32px;

                &::placeholder {
                    color: var(--color-text-muted);
                }

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .inlineRadios {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 6px;

            label {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                cursor: pointer;

                input {
                    width: auto;
                    min-height: auto;
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .sectionActions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `,
};
