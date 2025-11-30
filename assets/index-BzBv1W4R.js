import{d as r,j as e,u as o,o as s,v as a,w as t,x as i,y as l}from"./index-DNs2t0HA.js";const n={Wrap:r.div`
        display: flex;
        flex-direction: column;
        gap: 18px;

        /* Page header */
        .pageHeader {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .breadcrumbs {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: var(--color-text-muted);

            .crumb {
                display: inline-flex;
                align-items: center;
                gap: 4px;

                svg {
                    font-size: 12px;
                }

                &.current {
                    color: var(--color-heading);
                }
            }

            .sep {
                opacity: 0.6;
            }
        }

        .titleBlock {
            h1 {
                font-size: 20px;
                color: var(--color-heading);
                margin-bottom: 2px;
            }

            p {
                font-size: 12px;
                color: var(--color-text-muted);
            }
        }

        /* Grid layout */
        .grid {
            display: grid;
            grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
            gap: 16px;

            @media (width < 960px) {
                grid-template-columns: 1fr;
            }
        }

        .welcomeCard {
            border-radius: 18px;
            border: 1px solid var(--color-border);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.06),
                    transparent 55%
                ),
                var(--color-surface);
            padding: 18px 18px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: var(--shadow-soft);

            .badge {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                padding: 4px 10px;
                border-radius: 999px;
                font-size: 11px;
                background-color: var(--color-surface-soft);
                color: var(--color-text-muted);
                width: fit-content;

                svg {
                    font-size: 13px;
                }
            }

            h2 {
                font-size: 16px;
                color: var(--color-heading);
            }

            .lead {
                font-size: 12px;
                color: var(--color-text);
                max-width: 520px;
            }

            .actionsRow {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 6px;

                button {
                    position: relative;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    border-radius: 999px;
                    padding: 7px 14px;
                    cursor: pointer;
                    border: 1px solid var(--color-border);
                    background-color: var(--color-surface-soft);
                    color: var(--color-text);
                    transition: background 0.18s ease, border-color 0.18s ease,
                        transform 0.14s ease, box-shadow 0.18s ease,
                        color 0.18s ease;

                    svg {
                        font-size: 14px;
                        transition: transform 0.16s ease;
                    }

                    /* soft glow layer for micro-interaction */
                    &::before {
                        content: "";
                        position: absolute;
                        inset: -1px;
                        border-radius: inherit;
                        background: radial-gradient(
                            circle at top left,
                            rgba(255, 255, 255, 0.18),
                            transparent 60%
                        );
                        opacity: 0;
                        transform: scale(0.9);
                        transition: opacity 0.18s ease, transform 0.18s ease;
                        pointer-events: none;
                    }

                    /* generic hover – ONLY for non-primary buttons */
                    &:not(.primary):hover {
                        background-color: var(--color-surface);
                        border-color: var(--color-heading);
                        transform: translateY(-1px);
                        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                        color: var(--color-heading);
                    }

                    &:not(.primary):hover::before {
                        opacity: 1;
                        transform: scale(1);
                    }

                    &:not(.primary):hover svg {
                        transform: translateX(2px);
                    }
                }

                .primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;

                    &:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.6);
                        filter: brightness(1.05);
                    }

                    &:hover::before {
                        opacity: 1;
                        transform: scale(1);
                    }

                    &:hover svg {
                        transform: translateX(2px);
                    }
                }

                .ghost {
                    background-color: transparent;

                    &:hover {
                        background-color: var(--color-surface-soft);
                        border-color: var(--color-heading);
                        color: var(--color-heading);
                    }
                }
            }

            .hintsList {
                margin-top: 8px;
                padding-left: 16px;
                font-size: 11px;
                color: var(--color-text-muted);

                li {
                    margin-bottom: 3px;
                }
            }
        }

        .sideColumn {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .card {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 12px 14px;
            font-size: 12px;

            .cardHeader {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 8px;

                .iconBubble {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: var(--color-surface);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 15px;
                        color: var(--color-heading);
                    }
                }

                h3 {
                    font-size: 13px;
                    color: var(--color-heading);
                }

                p {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .list {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;

                li {
                    display: flex;
                    gap: 6px;
                    align-items: flex-start;
                    color: var(--color-text);
                    font-size: 11px;

                    .dot {
                        margin-top: 5px;
                        width: 4px;
                        height: 4px;
                        border-radius: 999px;
                        background-color: var(--color-text-muted);
                        flex-shrink: 0;
                    }
                }
            }
        }
    `},d=()=>e.jsxs(n.Wrap,{children:[e.jsxs("div",{className:"pageHeader",children:[e.jsxs("div",{className:"breadcrumbs",children:[e.jsxs("span",{className:"crumb",children:[e.jsx(o,{}),"Home"]}),e.jsx("span",{className:"sep",children:"/"}),e.jsx("span",{className:"crumb current",children:"Starter"})]}),e.jsxs("div",{className:"titleBlock",children:[e.jsx("h1",{children:"Starter workspace"}),e.jsx("p",{children:"Use this empty layout as a starting point for new pages, flows or prototypes inside Nova."})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("section",{className:"welcomeCard",children:[e.jsxs("div",{className:"badge",children:[e.jsx(s,{}),"Ready when you are"]}),e.jsx("h2",{children:"Build your next screen here."}),e.jsx("p",{className:"lead",children:"This page ships with a basic header, content grid and action buttons. Replace any of these blocks with your own UI components."}),e.jsxs("div",{className:"actionsRow",children:[e.jsxs("button",{type:"button",className:"primary",children:[e.jsx(a,{}),"Add first widget"]}),e.jsxs("button",{type:"button",className:"ghost",children:[e.jsx(t,{}),"View dashboard sample"]})]}),e.jsxs("ul",{className:"hintsList",children:[e.jsx("li",{children:"Drop in cards, tables or charts from your component set."}),e.jsx("li",{children:"Use the same spacing and typography tokens as other pages."}),e.jsx("li",{children:"Wire this page to API data later without changing layout."})]})]}),e.jsxs("div",{className:"sideColumn",children:[e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("div",{className:"iconBubble",children:e.jsx(i,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Common first actions"}),e.jsx("p",{children:"Create flows you will probably need on a new page."})]})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Add a summary row of KPIs at the top."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Drop in a table for users, orders or sessions."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Attach filters, date range or search to the header."]})]})]}),e.jsxs("section",{className:"card",children:[e.jsxs("div",{className:"cardHeader",children:[e.jsx("div",{className:"iconBubble",children:e.jsx(l,{})}),e.jsxs("div",{children:[e.jsx("h3",{children:"Layout guidelines"}),e.jsx("p",{children:"Keep nova pages consistent and easy to scan."})]})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Use 24–32px padding from the route wrapper edges."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Prefer 2–3 columns on desktop, one column on mobile."]}),e.jsxs("li",{children:[e.jsx("span",{className:"dot"}),"Keep actions on the right, titles on the left."]})]})]})]})]})]});export{d as default};
