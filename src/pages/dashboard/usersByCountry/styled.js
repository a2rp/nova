// src/pages/dashboard/UsersByCountry/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        display: flex;
        flex-direction: column;
        gap: 12px;

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

        .toggleGroup {
            display: inline-flex;
            padding: 2px;
            border-radius: 999px;
            background-color: var(--color-surface-soft);
            border: 1px solid var(--color-border);
            gap: 2px;

            .toggle {
                border-radius: 999px;
                border: none;
                background: transparent;
                padding: 3px 10px;
                font-size: 11px;
                color: var(--color-text-muted);
                cursor: pointer;
                transition: background 0.15s ease, color 0.15s ease;

                &.active {
                    background: var(--accent-soft);
                    color: var(--color-heading);
                }
            }
        }

        .tableShell {
            border-radius: 12px;
            border: 1px solid var(--color-border);
            overflow: hidden;

            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 12px;
            }

            thead {
                background-color: var(--color-surface-soft);

                th {
                    text-align: left;
                    padding: 8px 12px;
                    font-weight: 500;
                    color: var(--color-text-muted);
                    border-bottom: 1px solid var(--color-border);
                    white-space: nowrap;
                }
            }

            tbody tr {
                border-bottom: 1px solid var(--color-border);
                transition: background-color 0.15s ease, transform 0.12s ease,
                    box-shadow 0.12s ease;

                &:last-child {
                    border-bottom: none;
                }

                &:hover {
                    background-color: var(--color-surface-soft);
                    transform: translateY(-1px);
                    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
                }
            }

            tbody td {
                padding: 8px 12px;
                color: var(--color-text);
                vertical-align: middle;
            }

            .countryCell {
                display: inline-flex;
                align-items: center;
                gap: 8px;
            }

            .flag {
                width: 16px;
                height: 10px;
                border-radius: 2px;
                background-size: cover;
                background-position: center;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
            }

            /* Simple CSS flags – not pixel perfect, but recognizable */
            .flag-de {
                background: linear-gradient(
                    to bottom,
                    #000000 0 33%,
                    #dd0000 33% 66%,
                    #ffce00 66% 100%
                );
            }

            .flag-br {
                background: #009b3a;
            }

            .flag-ca {
                background: linear-gradient(
                    to right,
                    #ff0000 0 25%,
                    #ffffff 25% 75%,
                    #ff0000 75% 100%
                );
            }

            .flag-jp {
                background: radial-gradient(circle, #bc002d 35%, #ffffff 36%);
            }

            .flag-es {
                background: linear-gradient(
                    to bottom,
                    #aa151b 0 25%,
                    #f1bf00 25% 75%,
                    #aa151b 75% 100%
                );
            }

            .flag-mx {
                background: linear-gradient(
                    to right,
                    #006847 0 33%,
                    #ffffff 33% 66%,
                    #ce1126 66% 100%
                );
            }

            .flag-sg {
                background: linear-gradient(
                    to bottom,
                    #ef3340 0 50%,
                    #ffffff 50% 100%
                );
            }

            .flag-us {
                background: linear-gradient(
                    to bottom,
                    #b22234 0 50%,
                    #ffffff 50% 100%
                );
            }

            .flag-fr {
                background: linear-gradient(
                    to right,
                    #0055a4 0 33%,
                    #ffffff 33% 66%,
                    #ef4135 66% 100%
                );
            }

            .flag-in {
                background: linear-gradient(
                    to bottom,
                    #ff9933 0 33%,
                    #ffffff 33% 66%,
                    #138808 66% 100%
                );
            }

            .changeBadge {
                display: inline-flex;
                align-items: center;
                padding: 2px 8px;
                border-radius: 999px;
                font-size: 11px;
                font-weight: 500;
            }

            .changeBadge.up {
                background: rgba(34, 197, 94, 0.12);
                color: #4ade80;
            }

            .changeBadge.down {
                background: rgba(248, 113, 113, 0.12);
                color: #fb7185;
            }
        }

        .tableFooter {
            margin-top: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 12px;
            color: var(--color-text-muted);

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

            .pager {
                margin-left: auto;
                display: inline-flex;
                gap: 4px;

                button {
                    border-radius: 999px;
                    border: 1px solid var(--color-border);
                    background: transparent;
                    color: var(--color-text);
                    font-size: 11px;
                    padding: 3px 10px;
                    cursor: pointer;
                    transition: background 0.15s ease, border 0.15s ease,
                        color 0.15s ease;

                    &:hover:not(:disabled) {
                        border-color: var(--color-accent-border);
                        background-color: var(--color-surface-soft);
                    }

                    &:disabled {
                        opacity: 0.4;
                        cursor: default;
                    }
                }
            }
        }
    `,
};
