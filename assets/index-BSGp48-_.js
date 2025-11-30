import{d as t,j as e,H as l,v as n,I as d,J as c,K as p,L as x}from"./index-DNs2t0HA.js";const r={Wrap:t.div`
        min-height: calc(100vh - 70px);
        padding: 24px 24px 32px;
        color: var(--color-text);

        @media (min-width: 1024px) {
            padding-inline: 32px;
        }
    `,HeaderRow:t.div`
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
    `,Layout:t.div`
        display: grid;
        grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
        gap: 24px;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,SideNav:t.aside`
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
    `,Content:t.div`
        min-width: 0;
    `,CardGrid:t.div`
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
    `},s=[{id:"getting-started",icon:l,title:"Getting started",subtitle:"Spin up Nova for a new project in minutes.",bullets:["Project structure & routing pattern","Theme tokens and dark / light mode","Where to add new pages & nav items"],tag:"Start here"},{id:"layout",icon:n,title:"Layout & navigation",subtitle:"Header, sidebar, multi-level menu, and responsive behavior.",bullets:["How side menu collapse / expand works","Using NavLinks component for new routes","Mobile vs desktop breakpoints"],tag:"Shell"},{id:"theming",icon:d,title:"Theming & tokens",subtitle:"Color system, surfaces, typography and reusable helpers.",bullets:["Theme CSS variables you can reuse","Creating new surface styles for widgets","Updating brand logo and title safely"],tag:"Design"},{id:"data",icon:c,title:"Sample data & state",subtitle:"Where demo tables, charts and filters live.",bullets:["Dashboard widgets data sources","Users table: filtering, sorting & paging","How to plug in real APIs later"],tag:"Data"},{id:"pages",icon:p,title:"Page blueprints",subtitle:"Starter templates for forms, tables and detail pages.",bullets:["Starter, Error, Login, Signup pages","Account settings sections and patterns","How to clone a page for a new feature"],tag:"Patterns"},{id:"faq",icon:x,title:"FAQ & tips",subtitle:"Little tricks to keep the codebase clean and fast.",bullets:["Naming conventions & folder casing","When to create a component vs a page","Small UX details that make Nova feel premium"],tag:"Guides"}],u=()=>e.jsxs(r.Wrap,{className:"app-max-width app-padding",children:[e.jsxs(r.HeaderRow,{children:[e.jsxs("div",{className:"titleBlock",children:[e.jsx("span",{className:"eyebrow",children:"Nova · System docs"}),e.jsx("h1",{children:"Documentation"}),e.jsx("p",{children:"Overview of how this dashboard shell is put together – layout, theming, sample data and reusable patterns you can plug into any project."})]}),e.jsxs("div",{className:"metaBlock",children:[e.jsx("div",{className:"badge version",children:"v0.1 · Frontend only"}),e.jsx("div",{className:"badge status",children:"Playground build"})]})]}),e.jsxs(r.Layout,{children:[e.jsxs(r.SideNav,{className:"surface-card",children:[e.jsx("div",{className:"sideTitle",children:"Sections"}),e.jsx("ul",{children:s.map(a=>e.jsx("li",{children:e.jsxs("a",{href:`#${a.id}`,className:"sideLink",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:a.title})]})},a.id))}),e.jsx("div",{className:"hint",children:"Tip: use this page as living README for the Nova layout."})]}),e.jsx(r.Content,{children:e.jsx(r.CardGrid,{children:s.map(a=>{const i=a.icon;return e.jsxs("article",{id:a.id,className:"card surface-card",children:[e.jsxs("header",{className:"cardHeader",children:[e.jsx("div",{className:"iconWrap",children:e.jsx(i,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:a.title}),e.jsx("p",{className:"subtitle",children:a.subtitle})]}),e.jsx("span",{className:"tag",children:a.tag})]}),e.jsx("ul",{className:"bulletList",children:a.bullets.map(o=>e.jsx("li",{children:o},o))}),e.jsx("button",{type:"button",className:"outlineButton",children:"View notes"})]},a.id)})})})]})]});export{u as default};
