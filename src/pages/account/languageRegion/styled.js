// src/pages/accounts/languageRegion/styled.js
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

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 3px;
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

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
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
                margin-bottom: 6px;

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

            .previewRow {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 4px;

                .hint {
                    color: var(--color-text-muted);
                }

                .value {
                    color: var(--color-heading);
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
