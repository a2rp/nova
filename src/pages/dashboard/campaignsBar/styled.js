// src/pages/dashboard/CampaignsBar/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;

        .cardHeader {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 4px;

            h2 {
                font-size: 16px;
                color: var(--color-heading);
                margin-bottom: 4px;
            }

            p {
                font-size: 12px;
                color: var(--color-text-muted);
            }
        }

        .cardHeaderRight {
            display: flex;
            align-items: center;

            .rangeSelect {
                font-size: 11px;
                padding: 4px 24px 4px 10px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                outline: none;
                appearance: none;
                background-image: linear-gradient(
                        45deg,
                        transparent 50%,
                        var(--color-text-muted) 50%
                    ),
                    linear-gradient(
                        135deg,
                        var(--color-text-muted) 50%,
                        transparent 50%
                    );
                background-position: calc(100% - 14px) 9px, calc(100% - 9px) 9px;
                background-size: 5px 5px, 5px 5px;
                background-repeat: no-repeat;

                &:hover {
                    border-color: var(--accent-border);
                }
            }
        }

        .barChartShell {
            margin-top: 4px;
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 10px;
            align-items: stretch;

            .yLabels {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 10px;
                color: var(--color-text-muted);
                padding: 0 4px 4px 0;
            }

            .barsArea {
                position: relative;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;
                gap: 14px;
                height: 190px;
                border-radius: 12px;
                padding: 14px 12px 4px;
                background: radial-gradient(
                    circle at top,
                    rgba(255, 255, 255, 0.04),
                    transparent 55%
                );

                /* light grid lines similar to reference */
                &::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(
                            to top,
                            rgba(255, 255, 255, 0.05) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to right,
                            rgba(255, 255, 255, 0.03) 1px,
                            transparent 1px
                        );
                    background-size: 100% 38px, 40px 100%;
                    pointer-events: none;
                }
            }

            .barItem {
                position: relative;
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                z-index: 1;
                cursor: default;
                transition: transform 0.2s ease;
            }

            .barHoverValue {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 2px;
                opacity: 0;
                transform: translateY(4px);
                transition: opacity 0.15s ease, transform 0.15s ease,
                    color 0.15s ease;
            }

            .bar {
                width: 26px;
                border-radius: 999px 999px 4px 4px;
                background: rgba(104, 176, 255, 0.85);
                /* var(--h) = 0–110, convert to px height */
                height: calc(var(--h) * 1.2px);
                min-height: 24px;
                max-height: 150px;
                box-shadow: 0 10px 18px rgba(0, 0, 0, 0.3);
                transition: height 0.25s ease, background 0.2s ease,
                    transform 0.2s ease, box-shadow 0.2s ease;
            }

            .barLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                transform: rotate(-32deg);
                transform-origin: top center;
                white-space: nowrap;
                transition: color 0.15s ease;
            }

            /* Hover interactions */
            .barItem:hover .bar {
                transform: translateY(-5px);
                background: rgba(104, 176, 255, 1);
                box-shadow: 0 14px 24px rgba(0, 0, 0, 0.45);
            }

            .barItem:hover .barHoverValue {
                opacity: 1;
                transform: translateY(0);
                color: var(--color-heading);
            }

            .barItem:hover .barLabel {
                color: var(--color-heading);
            }
        }

        .cardFooterLinks {
            margin-top: 6px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .linkBtn {
                border: none;
                background: none;
                padding: 0;
                font-size: 12px;
                color: var(--color-link);
                cursor: pointer;

                &:hover {
                    color: var(--color-link-hover);
                }
            }
        }
    `,
};
