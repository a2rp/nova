// src/pages/users/styled.js
import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        padding-inline: 32px;
        padding-top: 24px;
        padding-bottom: 32px;
        color: var(--color-text);
        background-color: var(--color-bg);

        @media (width < 768px) {
            padding-inline: 16px;
        }

        .surface-card {
            background-color: var(--color-surface);
            border-radius: 16px;
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-soft);
        }

        /* ===== Breadcrumbs ===== */
        .breadcrumbs {
            font-size: 11px;
            margin-bottom: 10px;
            color: var(--color-text-muted);

            .crumbSep {
                margin-inline: 4px;
            }

            .current {
                color: var(--color-heading);
            }
        }

        /* ===== Page header / actions ===== */
        .pageHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 18px;

            h1 {
                font-size: 20px;
                color: var(--color-heading);
            }

            .headerActions {
                display: flex;
                align-items: center;
                gap: 10px;

                @media (width < 768px) {
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }
            }

            .searchShell {
                min-width: 220px;
                max-width: 280px;
                width: 100%;

                input {
                    width: 100%;
                    padding: 7px 12px;
                    border-radius: 999px;
                    border: 1px solid var(--color-border);
                    background-color: var(--color-surface-soft);
                    color: var(--color-text);
                    font-size: 13px;
                    outline: none;
                    transition: border-color 0.15s ease,
                        background-color 0.15s ease;

                    &::placeholder {
                        color: var(--color-text-muted);
                    }

                    &:focus {
                        border-color: var(--color-heading);
                        background-color: var(--color-surface);
                    }
                }
            }

            .divider {
                width: 1px;
                height: 24px;
                background-color: var(--color-border);
            }
        }

        .primaryBtn,
        .ghostBtn,
        .linkBtn {
            font-size: 12px;
            border-radius: 999px;
            padding: 7px 14px;
            border: 1px solid transparent;
            cursor: pointer;
            background: transparent;
            color: var(--color-text);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            transition: background 0.15s ease, border-color 0.15s ease,
                color 0.15s ease, transform 0.1s ease;
        }

        /* 🔻 JUST REPLACE your old .primaryBtn block with this one 🔻 */
        .primaryBtn {
            background-color: var(--color-surface-soft);
            color: var(--color-heading);
            border-color: var(--color-heading);
            font-weight: 600;
            white-space: nowrap;

            &:hover {
                background-color: var(--color-heading);
                color: var(--color-bg);
                transform: translateY(-1px);
                box-shadow: 0 8px 18px rgba(0, 0, 0, 0.45);
            }
        }

        .ghostBtn {
            border-color: var(--color-border);
            background-color: var(--color-surface-soft);
            color: var(--color-text);

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-heading);
            }
        }

        .linkBtn {
            border: none;
            padding-inline: 6px;
            background: transparent;
            color: var(--color-link);

            &:hover {
                text-decoration: underline;
            }
        }

        /* ===== Filters row ===== */
        .filtersRow {
            margin-bottom: 14px;
            display: flex;
            justify-content: space-between;
            gap: 10px;

            .filterGroup {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
            }
        }

        .filterDropdown {
            position: relative;

            .filterTrigger {
                font-size: 12px;
                padding: 6px 12px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                display: inline-flex;
                align-items: center;
                gap: 4px;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.1s ease;

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-heading);
                }

                &.isOpen {
                    border-color: var(--color-heading);
                    background-color: var(--color-surface);
                }
            }

            .filterMenu {
                position: absolute;
                top: calc(100% + 6px);
                left: 0;
                min-width: 160px;
                background-color: var(--color-surface);
                border-radius: 10px;
                border: 1px solid var(--color-border);
                box-shadow: var(--shadow-soft);
                padding: 4px 0;
                z-index: 15;
                backdrop-filter: blur(10px);
            }

            .filterOption {
                padding: 6px 12px;
                font-size: 12px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;

                &:hover {
                    background-color: var(--color-surface-soft);
                }

                &.active {
                    color: var(--color-heading);
                    font-weight: 600;
                    background-color: rgba(255, 255, 255, 0.04);
                }
            }
        }

        .moreFilterWrapper {
            position: relative;

            .moreFilterTrigger {
                font-size: 12px;
                padding: 6px 12px;
                border-radius: 999px;
                border: 1px dashed var(--color-border);
                background: transparent;
                color: var(--color-text-muted);
                cursor: pointer;
                transition: border-color 0.15s ease, color 0.15s ease,
                    background 0.15s ease;

                &.active {
                    border-style: solid;
                    border-color: var(--color-heading);
                    color: var(--color-heading);
                    background-color: var(--color-surface-soft);
                }

                &:hover {
                    border-color: var(--color-heading);
                    color: var(--color-heading);
                }
            }

            .moreFilterPanel {
                position: absolute;
                top: calc(100% + 8px);
                right: 0;
                width: 260px;
                padding: 10px 12px 12px;
                border-radius: 14px;
                z-index: 18;
                background-color: var(--color-surface);
                border: 1px solid var(--color-border);
                box-shadow: var(--shadow-soft);

                .panelHeader {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8px;
                    font-size: 12px;
                    color: var(--color-heading);

                    button {
                        border: none;
                        background: transparent;
                        color: var(--color-text-muted);
                        cursor: pointer;
                        font-size: 16px;
                        line-height: 1;
                    }
                }

                .panelBody {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 8px;

                    label {
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        font-size: 11px;

                        .label {
                            color: var(--color-text-muted);
                        }

                        select,
                        input {
                            border-radius: 8px;
                            border: 1px solid var(--color-border);
                            background-color: var(--color-surface-soft);
                            color: var(--color-text);
                            padding: 6px 8px;
                            font-size: 12px;
                            outline: none;

                            &:focus {
                                border-color: var(--color-heading);
                            }
                        }
                    }
                }
            }
        }

        /* ===== Table ===== */
        .tableShell {
            /* 🔹 allow horizontal scroll on small screens */
            overflow-x: auto;
            overflow-y: hidden;
            margin-bottom: 12px;

            table {
                width: 100%;
                min-width: 960px; /* prevent columns from crushing */
                border-collapse: collapse;
                font-size: 12px;
            }

            thead {
                background-color: var(--color-surface-soft);

                th {
                    padding: 10px 12px;
                    font-weight: 500;
                    text-align: left;
                    color: var(--color-text-muted);
                    border-bottom: 1px solid var(--color-border);
                    white-space: nowrap;
                }

                .sortable {
                    cursor: pointer;
                    user-select: none;

                    &:hover {
                        color: var(--color-heading);
                    }
                }
            }

            tbody tr {
                transition: background 0.12s ease, transform 0.08s ease,
                    box-shadow 0.12s ease;
            }

            tbody tr:nth-child(even) {
                background-color: rgba(255, 255, 255, 0.01);
            }

            tbody tr:hover {
                background-color: rgba(255, 255, 255, 0.03);
                transform: translateY(-1px);
                box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
            }

            td {
                padding: 9px 12px;
                border-bottom: 1px solid var(--color-border);
                vertical-align: middle;

                a {
                    color: var(--color-link);

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }

            td:first-child,
            th:first-child {
                width: 30px;
            }

            input[type="checkbox"] {
                cursor: pointer;
            }

            .avatar {
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background: linear-gradient(
                    135deg,
                    var(--avatar-color),
                    rgba(255, 255, 255, 0.06)
                );
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 13px;
                font-weight: 600;
                color: #ffffff;
                box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08);
            }

            .statusChip {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 3px 9px;
                border-radius: 999px;
                font-size: 11px;
                border: 1px solid transparent;
            }

            .status-online {
                background-color: rgba(34, 197, 94, 0.14);
                border-color: rgba(34, 197, 94, 0.35);
                color: #a7f3d0;
            }

            .status-offline {
                background-color: rgba(248, 113, 113, 0.12);
                border-color: rgba(248, 113, 113, 0.38);
                color: #fecaca;
            }

            .status-away {
                background-color: rgba(250, 204, 21, 0.12);
                border-color: rgba(250, 204, 21, 0.4);
                color: #facc15;
            }

            .roleChip {
                display: inline-flex;
                padding: 2px 8px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                font-size: 11px;
            }

            .emptyRow {
                text-align: center;
                padding: 24px 12px;
                color: var(--color-text-muted);
            }

            /* ===== Row actions (three dots) ===== */
            .actionsCell {
                position: relative;
                width: 40px;
            }

            .dotsBtn {
                width: 26px;
                height: 26px;
                border-radius: 999px;
                border: 1px solid transparent;
                background: transparent;
                color: var(--color-text-muted);
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                line-height: 1;
                padding: 0;
                transition: background 0.15s ease, border-color 0.15s ease,
                    color 0.15s ease, transform 0.1s ease;

                &:hover {
                    background-color: var(--color-surface-soft);
                    border-color: var(--color-border);
                    color: var(--color-heading);
                    transform: translateY(-1px);
                }
            }

            .rowMenu {
                position: absolute;
                top: 32px;
                right: 6px;
                min-width: 140px;
                border-radius: 12px;
                padding: 4px 0;
                background: radial-gradient(
                        circle at top,
                        rgba(255, 255, 255, 0.04),
                        transparent 60%
                    ),
                    var(--color-surface);
                border: 1px solid var(--color-border);
                box-shadow: 0 14px 26px rgba(0, 0, 0, 0.6);
                z-index: 25;
                backdrop-filter: blur(12px);

                button {
                    width: 100%;
                    text-align: left;
                    padding: 7px 12px;
                    font-size: 12px;
                    border: none;
                    background: transparent;
                    color: var(--color-text);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: background 0.15s ease, color 0.15s ease;

                    &:hover {
                        background-color: rgba(255, 255, 255, 0.06);
                        color: var(--color-heading);
                    }

                    &.danger:hover {
                        background-color: rgba(248, 113, 113, 0.16);
                        color: #fecaca;
                    }
                }
            }
        }

        /* ===== Table footer / pagination ===== */
        .tableFooter {
            margin-top: 6px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            font-size: 11px;
            color: var(--color-text-muted);

            @media (width < 640px) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .pagination {
            display: inline-flex;
            align-items: center;
            gap: 4px;

            button {
                min-width: 26px;
                height: 26px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                font-size: 11px;
                cursor: pointer;
                padding: 0 6px;
                transition: background 0.15s ease, border-color 0.15s ease,
                    color 0.15s ease, transform 0.1s ease;

                &:hover:not(:disabled) {
                    background-color: var(--color-surface);
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.4;
                    cursor: default;
                }
            }

            .pageBtn.isActive {
                background-color: var(--color-heading);
                color: var(--color-bg);
                border-color: var(--color-heading);
            }
        }

        /* ===== Modal ===== */
        .modalBackdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 40;
        }

        .modalCard {
            width: min(640px, 100% - 32px);
            max-height: 80vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .modalHeader {
            padding: 10px 16px;
            border-bottom: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2 {
                font-size: 16px;
                color: var(--color-heading);
            }

            button {
                border: none;
                background: transparent;
                color: var(--color-text-muted);
                cursor: pointer;
                font-size: 18px;
                line-height: 1;

                &:hover {
                    color: var(--color-heading);
                }
            }
        }

        .modalBody {
            padding: 12px 16px 14px;
            overflow-y: auto;
        }

        .modalGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 16px;

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            label {
                display: flex;
                flex-direction: column;
                gap: 4px;
                font-size: 11px;

                span {
                    color: var(--color-text-muted);
                }

                input,
                select {
                    border-radius: 8px;
                    border: 1px solid var(--color-border);
                    background-color: var(--color-surface-soft);
                    color: var(--color-text);
                    padding: 6px 8px;
                    font-size: 12px;
                    outline: none;

                    &:focus {
                        border-color: var(--color-heading);
                    }
                }
            }
        }

        .modalFooter {
            padding: 10px 16px 14px;
            border-top: 1px solid var(--color-border);
            display: flex;
            justify-content: flex-end;
            gap: 8px;
        }
    `,
};
