// src/pages/accounts/notificationAlerts/styled.js
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

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        /* Channels row */
        .channelsRow {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .channelCard {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 10px 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease, box-shadow 0.15s ease;

            .iconBubble {
                width: 28px;
                height: 28px;
                border-radius: 999px;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .textBlock {
                flex: 1;

                .title {
                    font-size: 13px;
                    color: var(--color-heading);
                    margin-bottom: 2px;
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .toggleShell {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-left: 4px;
            }

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-heading);
                transform: translateY(-1px);
                box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
            }

            &.isActive {
                border-color: var(--color-heading);
            }
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

        /* Digest row */
        .digestRow {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 10px 12px;
            display: grid;
            grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .digestOptions {
            display: flex;
            flex-direction: column;
            gap: 6px;

            label {
                display: flex;
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

        .digestNote {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 12px;

            .icon {
                font-size: 18px;
                color: var(--color-heading);
                margin-top: 2px;
            }

            .title {
                color: var(--color-heading);
            }

            .meta {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        /* Categories */
        .categoriesGrid {
            margin-top: 4px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .categoryChip {
            position: relative;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 8px 10px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            cursor: pointer;
            text-align: left;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease, box-shadow 0.15s ease;
            color: var(--color-text);

            .icon {
                font-size: 14px;
                margin-right: 4px;
            }

            .sub {
                font-size: 11px;
                color: var(--color-text-muted);
            }

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: inherit;
                opacity: 0;
                background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.12),
                    transparent 60%
                );
                transition: opacity 0.15s ease;
                pointer-events: none;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                border-color: var(--color-heading);

                &::before {
                    opacity: 1;
                }
            }

            &.isActive {
                border-color: var(--color-heading);
                color: var(--color-heading);
            }
        }

        .previewCard {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px dashed var(--color-border);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.05),
                    transparent 60%
                ),
                var(--color-surface);
            padding: 10px 12px;
            font-size: 12px;

            .previewTitle {
                display: flex;
                align-items: center;
                gap: 8px;

                .iconBubble {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: var(--color-surface-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 16px;
                        color: var(--color-heading);
                    }
                }

                .label {
                    color: var(--color-heading);
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }
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
