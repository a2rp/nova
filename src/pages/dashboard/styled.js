// src/pages/dashboard/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        display: flex;
        flex-direction: column;
        gap: 24px;

        /* common card shell */
        .surface-card {
            background-color: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 18px 20px;
            box-shadow: var(--shadow-soft);
        }

        .topRow {
            display: grid;
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.5fr);
            gap: 24px;

            @media (width < 992px) {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        .bottomRow {
            display: grid;
            grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
            gap: 24px;

            @media (width < 992px) {
                grid-template-columns: minmax(0, 1fr);
            }
        }
    `,
};
