// src/components/footer/styled.js
import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        height: 48px;
        border-top: 1px solid var(--color-border);
        background-color: var(--color-bg-elevated);
        color: var(--color-text-muted);
        font-size: 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        padding: 0 24px;

        @media (width < 768px) {
            height: auto;
            padding: 10px 16px;
            flex-direction: column;
            align-items: flex-start;
        }

        .left {
            white-space: nowrap;
        }

        .right {
            margin-left: auto;
            white-space: nowrap;
            font-size: 12px;

            span.heart {
                color: #ff4d6a;
                margin: 0 2px;
            }

            @media (width < 768px) {
                margin-left: 0;
            }
        }
    `,
};
