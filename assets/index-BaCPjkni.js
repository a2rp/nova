import{d as e,j as r,z as a,N as o,u as t,A as s}from"./index-DNs2t0HA.js";const n={Wrap:e.div`
        min-height: calc(100vh - 140px);
        display: flex;
        align-items: center;
        justify-content: center;

        .shell {
            max-width: 520px;
            width: 100%;
            border-radius: 20px;
            padding: 28px 24px 22px;
            border: 1px solid var(--color-border);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.08),
                    transparent 55%
                ),
                var(--color-surface);
            box-shadow: var(--shadow-soft);
            text-align: center;
        }

        .iconRing {
            position: relative;
            margin: 0 auto 10px;
            width: 72px;
            height: 72px;
            border-radius: 50%;
            border: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;

            .blurGlow {
                position: absolute;
                inset: -10px;
                background: radial-gradient(
                    circle at top,
                    rgba(255, 255, 255, 0.22),
                    transparent 70%
                );
                opacity: 0.2;
            }

            .icon {
                position: relative;
                font-size: 32px;
                color: var(--color-heading);
            }
        }

        .code {
            font-size: 26px;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--color-text-muted);
            margin-bottom: 4px;
        }

        h1 {
            font-size: 20px;
            color: var(--color-heading);
            margin-bottom: 4px;
        }

        .sub {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-bottom: 16px;
        }

        .actions {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-bottom: 10px;

            .btn {
                position: relative;
                overflow: hidden;
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                border-radius: 999px;
                padding: 7px 16px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                text-decoration: none;
                cursor: pointer;
                transition: background 0.18s ease, border-color 0.18s ease,
                    transform 0.14s ease, box-shadow 0.18s ease,
                    color 0.18s ease;

                svg {
                    font-size: 14px;
                    transition: transform 0.16s ease;
                }

                &::before {
                    content: "";
                    position: absolute;
                    inset: -1px;
                    border-radius: inherit;
                    background: radial-gradient(
                        circle at center,
                        rgba(255, 255, 255, 0.16),
                        transparent 65%
                    );
                    opacity: 0;
                    transform: scale(0.9);
                    transition: opacity 0.18s ease, transform 0.18s ease;
                    pointer-events: none;
                }

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                    color: var(--color-heading);
                }

                &:hover::before {
                    opacity: 1;
                    transform: scale(1);
                }

                &:hover svg {
                    transform: translateX(-2px);
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;

                    &:hover {
                        filter: brightness(1.05);
                        color: var(--color-bg);
                    }
                }

                &.ghost {
                    background-color: transparent;
                }
            }
        }

        .hint {
            font-size: 11px;
            color: var(--color-text-muted);
        }

        @media (width < 600px) {
            .shell {
                padding-inline: 16px;
            }
        }
    `},l=()=>r.jsx(n.Wrap,{children:r.jsxs("div",{className:"shell",children:[r.jsxs("div",{className:"iconRing",children:[r.jsx("span",{className:"blurGlow"}),r.jsx(a,{className:"icon"})]}),r.jsx("p",{className:"code",children:"404"}),r.jsx("h1",{children:"Page not found"}),r.jsx("p",{className:"sub",children:"This route doesn't exist in Nova yet. The link may be old, or the page hasn't been wired up."}),r.jsxs("div",{className:"actions",children:[r.jsxs(o,{to:"/dashboard",className:"btn primary",children:[r.jsx(t,{}),"Back to dashboard"]}),r.jsxs(o,{to:"/starter",className:"btn ghost",children:[r.jsx(s,{}),"Go to starter page"]})]}),r.jsx("p",{className:"hint",children:"Tip: You can reuse the Starter workspace layout to build this page and then update the navigation."})]})});export{l as default};
