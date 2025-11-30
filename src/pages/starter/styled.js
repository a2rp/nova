// src/pages/starter/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        display: flex;
        flex-direction: column;
        gap: 18px;

        /* Page header */
        .pageHeader {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: var(--color-text-muted);

            .crumb {
                display: inline-flex;
                align-items: center;
                gap: 4px;

                svg {
                    font-size: 12px;
                }

                &.current {
                    color: var(--color-heading);
                }
            }

            .sep {
                opacity: 0.6;
            }
        }

        .titleBlock {
            h1 {
                font-size: 20px;
                color: var(--color-heading);
                margin-bottom: 2px;
            }

            p {
                font-size: 12px;
                color: var(--color-text-muted);
            }
        }

        /* Grid layout */
        .grid {
            display: grid;
            grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
            gap: 16px;

            @media (width < 960px) {
                grid-template-columns: 1fr;
            }
        }

        .welcomeCard {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.06),
                    transparent 55%
                ),
                var(--color-surface);
            padding: 18px 18px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: var(--shadow-soft);

            .badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                border-radius: 999px;
                font-size: 11px;
                background-color: var(--color-surface-soft);
                color: var(--color-text-muted);
                width: fit-content;

                svg {
                    font-size: 13px;
                }
            }

            h2 {
                font-size: 16px;
                color: var(--color-heading);
            }

            .lead {
                font-size: 12px;
                color: var(--color-text);
                max-width: 520px;
            }

            .actionsRow {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 6px;

                button {
                    position: relative;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    border-radius: 999px;
                    padding: 7px 14px;
                    cursor: pointer;
                    border: 1px solid var(--color-border);
                    background-color: var(--color-surface-soft);
                    color: var(--color-text);
                    transition: background 0.18s ease, border-color 0.18s ease,
                        transform 0.14s ease, box-shadow 0.18s ease,
                        color 0.18s ease;

                    svg {
                        font-size: 14px;
                        transition: transform 0.16s ease;
                    }

                    /* soft glow layer for micro-interaction */
                    &::before {
                        content: "";
                        position: absolute;
                        inset: -1px;
                        border-radius: inherit;
                        background: radial-gradient(
                            circle at top left,
                            rgba(255, 255, 255, 0.18),
                            transparent 60%
                        );
                        opacity: 0;
                        transform: scale(0.9);
                        transition: opacity 0.18s ease, transform 0.18s ease;
                        pointer-events: none;
                    }

                    /* generic hover – ONLY for non-primary buttons */
                    &:not(.primary):hover {
                        background-color: var(--color-surface);
                        border-color: var(--color-heading);
                        transform: translateY(-1px);
                        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                        color: var(--color-heading);
                    }

                    &:not(.primary):hover::before {
                        opacity: 1;
                        transform: scale(1);
                    }

                    &:not(.primary):hover svg {
                        transform: translateX(2px);
                    }
                }

                .primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;

                    &:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.6);
                        filter: brightness(1.05);
                    }

                    &:hover::before {
                        opacity: 1;
                        transform: scale(1);
                    }

                    &:hover svg {
                        transform: translateX(2px);
                    }
                }

                .ghost {
                    background-color: transparent;

                    &:hover {
                        background-color: var(--color-surface-soft);
                        border-color: var(--color-heading);
                        color: var(--color-heading);
                    }
                }
            }

            .hintsList {
                margin-top: 8px;
                padding-left: 16px;
                font-size: 11px;
                color: var(--color-text-muted);

                li {
                    margin-bottom: 3px;
                }
            }
        }

        .sideColumn {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 12px 14px;
            font-size: 12px;

            .cardHeader {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;

                .iconBubble {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: var(--color-surface);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 15px;
                        color: var(--color-heading);
                    }
                }

                h3 {
                    font-size: 13px;
                    color: var(--color-heading);
                }

                p {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;

                li {
                    display: flex;
                    gap: 6px;
                    align-items: flex-start;
                    color: var(--color-text);
                    font-size: 11px;

                    .dot {
                        margin-top: 5px;
                        width: 4px;
                        height: 4px;
                        border-radius: 999px;
                        background-color: var(--color-text-muted);
                        flex-shrink: 0;
                    }
                }
            }
        }
    `,
};
