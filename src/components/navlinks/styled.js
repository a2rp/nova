// src/components/navlinks/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.nav`
        padding: 12px 10px 20px;
        font-size: 13px;
        color: var(--color-text);

        .sectionLabel {
            margin: 10px 8px 6px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--color-text-muted);
        }

        .navList {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .navItem {
            margin-bottom: 4px;
        }

        /* ===== Base pill link ===== */
        .navLink {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 7px 10px;
            border-radius: 999px;
            text-decoration: none;
            cursor: pointer;
            color: var(--color-text);
            transition: background 0.15s ease, color 0.15s ease,
                transform 0.12s ease;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 999px;
                background-color: var(--color-surface-soft);
                flex-shrink: 0;

                svg {
                    font-size: 14px;
                    color: var(--color-text-muted);
                }
            }

            .label {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &:hover {
                background-color: var(--color-surface-soft);
                transform: translateX(1px);

                .icon svg {
                    color: var(--color-heading);
                }
            }
        }

        .navLink.active {
            background-color: var(--color-surface-soft);
            color: var(--color-heading);

            .icon {
                background-color: var(--color-heading);

                svg {
                    color: var(--color-bg);
                }
            }
        }

        /* ===== Collapsible parent (for Multi level) ===== */
        .parentItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 7px 10px;
            border-radius: 999px;
            cursor: pointer;
            transition: background 0.15s ease, transform 0.12s ease;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 999px;
                background-color: var(--color-surface-soft);
                flex-shrink: 0;

                svg {
                    font-size: 14px;
                    color: var(--color-text-muted);
                }
            }

            .label {
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .chevron {
                margin-left: auto;
                font-size: 14px;
                color: var(--color-text-muted);
                transform: rotate(0deg);
                transition: transform 0.2s ease;
            }

            &:hover {
                background-color: var(--color-surface-soft);
                transform: translateX(1px);
            }

            &.open .chevron {
                transform: rotate(90deg);
            }
        }

        /* Wrapper around nested list */
        .collapseWrapper {
            overflow: hidden;
            transition: max-height 0.25s ease;
            margin-left: 10px;
            padding-left: 12px;
            border-left: 1px dashed var(--color-border);
        }

        /* Leaf items in multi-level – smaller pills, no icon background */
        .navLink.leaf {
            padding-left: 6px;

            .icon {
                width: 18px;
                height: 18px;
                background-color: transparent;

                svg {
                    font-size: 10px;
                    color: var(--color-text-muted);
                }
            }

            .label {
                font-size: 12px;
            }
        }

        .divider {
            margin: 14px 4px 10px;
            border-top: 1px solid var(--color-border);
        }
    `,
};
