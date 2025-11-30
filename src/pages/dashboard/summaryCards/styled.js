// src/pages/dashboard/SummaryCards/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        .summaryGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;

            @media (width < 600px) {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        .summaryCard {
            display: flex;
            flex-direction: column;
            gap: 8px;
            min-height: 110px;
            transition: transform 0.15s ease, box-shadow 0.15s ease,
                border-color 0.15s ease;

            &:hover {
                transform: translateY(-2px);
                border-color: var(--color-accent-border);
                box-shadow: 0 14px 35px rgba(0, 0, 0, 0.35);
            }

            .summaryHeader {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .summaryLabel {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: var(--color-text-muted);
            }

            .summaryValue {
                font-size: 24px;
                font-weight: 600;
                color: var(--color-heading);
            }

            .summaryLink {
                margin-top: auto;
                border: none;
                background: none;
                padding: 0;
                font-size: 12px;
                color: var(--color-link);
                cursor: pointer;
                text-align: left;

                span {
                    text-decoration: underline;
                }

                &:hover {
                    color: var(--color-link-hover);
                }
            }
        }
    `,
};
