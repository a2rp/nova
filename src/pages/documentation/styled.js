// src/pages/documentation/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        min-height: calc(100vh - 70px);
        padding: 24px 24px 32px;
        color: var(--color-text);

        @media (min-width: 1024px) {
            padding-inline: 32px;
        }
    `,

    HeaderRow: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 24px;
        margin-bottom: 24px;

        .titleBlock {
            max-width: 560px;

            .eyebrow {
                display: inline-block;
                font-size: 11px;
                letter-spacing: 0.14em;
                text-transform: uppercase;
                color: var(--color-text-muted);
                margin-bottom: 4px;
            }

            h1 {
                font-size: 26px;
                margin-bottom: 6px;
            }

            p {
                font-size: 13px;
                color: var(--color-text-muted);
            }
        }

        .metaBlock {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: flex-end;

            .badge {
                font-size: 11px;
                padding: 4px 10px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text-muted);
                white-space: nowrap;
            }

            .version {
                color: var(--color-heading);
            }
        }

        @media (max-width: 768px) {
            flex-direction: column;

            .metaBlock {
                align-items: flex-start;
            }
        }
    `,

    Layout: styled.div`
        display: grid;
        grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
        gap: 24px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    SideNav: styled.aside`
        padding: 16px 16px 18px;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .sideTitle {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text-muted);
            margin-bottom: 6px;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .sideLink {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 8px;
            border-radius: 8px;
            font-size: 13px;
            color: var(--color-text);
            cursor: pointer;
            transition: background 0.16s ease, transform 0.12s ease,
                color 0.16s ease;

            .dot {
                width: 6px;
                height: 6px;
                border-radius: 999px;
                background-color: var(--color-border);
            }

            &:hover {
                background-color: var(--color-surface-soft);
                transform: translateX(2px);
                color: var(--color-heading);

                .dot {
                    background-color: var(--color-accent);
                }
            }
        }

        .hint {
            margin-top: 10px;
            font-size: 11px;
            color: var(--color-text-muted);
        }
    `,

    Content: styled.div`
        min-width: 0;
    `,

    CardGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 18px 20px;

        .card {
            border-radius: 18px;
            padding: 16px 16px 14px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            transition: transform 0.16s ease, box-shadow 0.16s ease,
                border-color 0.16s ease;
            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.06),
                    transparent 55%
                );
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.16s ease;
            }

            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6);
                border-color: var(--color-accent-soft);

                &::before {
                    opacity: 1;
                }
            }
        }

        .cardHeader {
            display: flex;
            align-items: flex-start;
            gap: 10px;

            .iconWrap {
                width: 32px;
                height: 32px;
                border-radius: 999px;
                background: var(--color-surface-soft);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;

                svg {
                    font-size: 18px;
                    color: var(--color-heading);
                }
            }

            h2 {
                font-size: 15px;
                margin-bottom: 2px;
            }

            .subtitle {
                font-size: 12px;
                color: var(--color-text-muted);
            }

            .tag {
                margin-left: auto;
                font-size: 11px;
                padding: 3px 8px;
                border-radius: 999px;
                background: var(--color-accent-soft);
                border: 1px solid var(--color-accent-border);
                color: var(--color-heading);
                white-space: nowrap;
            }
        }

        .bulletList {
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 12px;
            color: var(--color-text-muted);
            display: flex;
            flex-direction: column;
            gap: 2px;

            li::before {
                content: "• ";
                color: var(--color-accent);
            }
        }

        .outlineButton {
            margin-top: 6px;
            align-self: flex-start;
            padding: 6px 12px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: transparent;
            font-size: 12px;
            color: var(--color-text-muted);
            cursor: pointer;
            transition: background 0.15s ease, color 0.15s ease,
                border-color 0.15s ease, transform 0.12s ease;

            &:hover {
                background: var(--color-surface-soft);
                color: var(--color-heading);
                border-color: var(--color-accent-border);
                transform: translateY(-1px);
            }
        }
    `,
};
