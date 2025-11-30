// src/pages/dashboard/MetricChart/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        display: flex;
        flex-direction: column;
        gap: 12px;

        .newUsersHeader {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            gap: 16px;

            .metricsTabs {
                display: flex;
                gap: 8px;
                flex-wrap: wrap;

                .tab {
                    border-radius: 999px;
                    border: 1px solid transparent;
                    background: transparent;
                    padding: 4px 10px;
                    font-size: 11px;
                    color: var(--color-text-muted);
                    cursor: pointer;
                    transition: background 0.15s ease, border-color 0.15s ease,
                        color 0.15s ease;
                    display: inline-flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;
                    min-width: 90px;

                    .tabLabel {
                        line-height: 1.1;
                    }

                    .tabValue {
                        font-size: 10px;
                        color: var(--color-text-muted);
                    }

                    &.active {
                        background: var(--accent-soft);
                        color: var(--color-heading);
                        border-color: var(--accent-border);

                        .tabValue {
                            color: var(--color-heading);
                        }
                    }
                }
            }

            .metricValue {
                font-size: 22px;
                font-weight: 600;
                color: var(--color-heading);
                white-space: nowrap;
            }
        }

        .chartLegend {
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            font-size: 11px;
            color: var(--color-text-muted);

            .legendItem {
                display: inline-flex;
                align-items: center;
                gap: 6px;

                .dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 999px;
                }

                .dot.actual {
                    background: var(--accent);
                }

                .dot.projected {
                    background: rgba(104, 176, 255, 0.9);
                }
            }

            .legendItem.clickable {
                border-radius: 999px;
                padding: 4px 8px;
                cursor: pointer;
                border: 1px solid transparent;
                background: transparent;
                transition: background 0.15s ease, border-color 0.15s ease,
                    color 0.15s ease, transform 0.12s ease;

                &.isActive {
                    background: var(--color-surface-soft);
                    border-color: var(--color-border);
                    color: var(--color-heading);
                }

                &:hover {
                    transform: translateY(-1px);
                    border-color: var(--accent-border);
                }
            }
        }

        .lineChartShell {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 10px;
            margin-top: 4px;

            .yAxisLabels {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                font-size: 10px;
                color: var(--color-text-muted);
            }

            .chartCanvas {
                position: relative;
                height: 180px;
                border-radius: 12px;
                overflow: hidden;
                background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.06),
                    transparent 55%
                );
            }
        }
    `,
};
