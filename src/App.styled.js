// src/App.styled.js
import styled, { css } from "styled-components";

/* Scrollbar that stays the same size (no layout shift) and
   uses subtle light tints from the theme. */
const hoverScrollbarStable = css`
    scrollbar-gutter: stable;

    /* Firefox defaults */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    /* WebKit size */
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 8px;
        border: 3px solid transparent;
        background-clip: content-box;
        transition: background 0.15s ease;
    }

    @media (hover: hover) {
        &:hover {
            scrollbar-color: var(--scrollbar-thumb) transparent;
        }
        &:hover::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
        }
        &::-webkit-scrollbar-thumb:hover {
            background: var(--color-text-muted);
        }
        &::-webkit-scrollbar-thumb:active {
            background: var(--color-heading);
        }
    }

    /* Touch devices: keep a visible thin thumb */
    @media (hover: none) {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-thumb) transparent;
        &::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
        }
    }
`;

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        background-color: var(--color-bg);
        color: var(--color-text);
    `,

    Main: styled.main`
        position: relative;
        display: flex;
        align-items: stretch;
        justify-content: space-between;

        height: 100vh;
        overflow: hidden;

        background-color: var(--color-bg-elevated);
        box-shadow: var(--shadow-soft);
        border: 1px solid var(--color-border);
    `,

    NavLinksSection: styled.div`
        border-right: 1px solid var(--color-border);
        position: relative;
        flex: 0 0 300px;
        width: 300px;
        overflow: hidden;
        transition: 0.2s ease;
        transition-property: width, flex;

        &.hideSideMenu {
            width: 0px;
            flex: 0 0 0px;
        }

        &.showSideMenu {
            width: 300px;
            flex: 0 0 300px;
        }

        @media (width < 1200px) {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            background-color: var(--color-surface);
            box-shadow: 5px 0 30px 3px rgba(0, 0, 0, 0.6);
            z-index: 10;
        }

        .navlinksMain {
            position: absolute;
            width: 300px;
            height: 100%;
            overflow: hidden;
            background-color: var(--color-surface);

            .navlinksHeaderLinkMenuToggleLink {
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: var(--color-surface-soft);
                border-bottom: 1px solid var(--color-border);
                padding-inline: 16px;

                .navlinksHeaderLink {
                    position: relative;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-decoration: none;

                    .logoWrapper {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #111;

                        img {
                            height: 40px;
                            display: block;
                        }
                    }

                    .brandName {
                        font-family: "Poppins", sans-serif;
                        font-size: 24px;
                        font-weight: 600;
                        color: var(--color-heading);
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                    }
                }

                .menuToggleLink {
                    cursor: pointer;
                    display: none;

                    @media (width < 1200px) {
                        display: block;
                    }

                    svg {
                        color: var(--color-heading);
                    }
                }
            }

            .navlinksWrapper {
                height: calc(100vh - 70px);
                overflow: hidden;
                overflow-y: auto;
                background-color: var(--color-surface);
                ${hoverScrollbarStable};
            }
        }
    `,

    RoutesWrapper: styled.div`
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background-color: var(--color-bg);

        .routesWrapper {
            height: calc(100vh - 70px);
            padding: 10vh 0;
            padding-inline: 32px;
            color: var(--color-text);
            overflow: hidden;
            overflow-y: scroll;
            background-color: var(--color-bg);
            ${hoverScrollbarStable};

            /* border: 1px solid #f00; */
        }
    `,
};
