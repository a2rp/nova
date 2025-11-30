// src/pages/accounts/privacyProtection/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;

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

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
            }

            .fieldGroup.fullWidth {
                grid-column: 1 / -1;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 4px;
            }

            select {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .toggleRow {
            cursor: pointer;
            padding: 6px 0;

            .toggleShell {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 2px;
            }

            .toggleSwitch {
                width: 40px;
                height: 20px;
                border-radius: 999px;
                background-color: var(--color-border);
                position: relative;
                padding: 2px;
                transition: background 0.15s ease;

                .thumb {
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: var(--color-heading);
                    transition: transform 0.18s ease;
                }

                &.isOn {
                    background-color: var(--color-heading);

                    .thumb {
                        transform: translateX(20px);
                        background-color: var(--color-bg);
                    }
                }
            }

            .toggleLabel {
                font-size: 12px;
                color: var(--color-heading);
            }

            .helper {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        /* Sessions */
        .sessionsCard {
            grid-template-columns: 1fr;
        }

        .sessionsHeaderRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-top: 6px;
            margin-bottom: 6px;
            grid-column: 1 / -1;
        }

        .sessionsTitle {
            display: flex;
            align-items: center;
            gap: 8px;

            .iconCircle {
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .label {
                font-size: 12px;
                color: var(--color-heading);
            }

            .meta {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sessionsList {
            list-style: none;
            margin: 4px 0 0;
            padding: 0;
            grid-column: 1 / -1;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface);
            max-height: 210px;
            overflow-y: auto;

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

        .sessionItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 7px 10px;
            font-size: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);

            &:last-of-type {
                border-bottom: none;
            }

            &:hover {
                background-color: var(--color-surface-soft);
            }

            .deviceBlock {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background-color: var(--color-heading);
                flex-shrink: 0;
            }

            .deviceName {
                color: var(--color-heading);
                display: flex;
                align-items: center;
                gap: 6px;

                .pill {
                    font-size: 10px;
                    border-radius: 999px;
                    padding: 2px 6px;
                    background-color: var(--color-surface-soft);
                    border: 1px solid var(--color-border);
                }
            }

            .metaLine {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .emptySessions {
            padding: 8px 10px;
            font-size: 11px;
            color: var(--color-text-muted);
        }

        .smallBtn {
            font-size: 11px;
            border-radius: 999px;
            padding: 5px 12px;
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
        }

        .linkBtn {
            font-size: 11px;
            border: none;
            background: none;
            color: var(--color-link);
            cursor: pointer;
            padding: 0 4px;

            &:hover {
                text-decoration: underline;
            }
        }

        /* Data controls */
        .dataRow {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .dataItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);

            .dataIcon {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .dataText {
                flex: 1;

                .title {
                    font-size: 13px;
                    color: var(--color-heading);
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .smallBtn {
                flex-shrink: 0;
            }

            &.danger {
                border-color: rgba(255, 107, 107, 0.5);
            }

            .dangerBtn {
                border-color: rgba(255, 107, 107, 0.7);
                color: #ffb3b3;

                &:hover {
                    background-color: rgba(255, 107, 107, 0.12);
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .sectionActions {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;

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
                min-width: 90px;

                &:hover:enabled {
                    /* background-color: var(--color-surface); */
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.6;
                    cursor: default;
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
