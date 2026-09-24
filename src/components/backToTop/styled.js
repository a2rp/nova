import styled from "styled-components";

export const Styled = {
    Fab: styled.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9990;
        display: grid;
        width: 44px;
        height: 44px;
        place-items: center;
        color: var(--color-heading);
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: 999px;
        box-shadow: var(--shadow-soft);
        cursor: pointer;
        opacity: ${(p) => (p.$show ? 1 : 0)};
        visibility: ${(p) => (p.$show ? "visible" : "hidden")};
        transition: opacity .18s ease, border-color .18s ease, box-shadow .18s ease;

        &:hover {
            border-color: var(--color-heading);
            box-shadow: 0 0 16px rgba(255, 255, 255, .16);
        }

        &:focus-visible {
            outline: 2px solid var(--color-heading);
            outline-offset: 2px;
        }

        @media (max-width: 420px) {
            right: 12px;
            bottom: 12px;
            width: 40px;
            height: 40px;
        }
    `,
};