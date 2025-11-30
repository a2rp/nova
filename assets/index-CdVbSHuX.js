import{d as i,G as n,r as l,j as e,B as c,k as d,C as p,D as x,E as h}from"./index-DNs2t0HA.js";const m={Wrap:i.div`
        min-height: calc(100vh - 70px);
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
        background-color: var(--color-bg);
        color: var(--color-text);

        @media (width < 900px) {
            grid-template-columns: 1fr;
        }

        /* ========== LEFT PANE (ART) ========== */
        .leftPane {
            border-right: 1px solid var(--color-border);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 24px;

            @media (width < 900px) {
                display: none;
            }

            .artShell {
                position: relative;
                max-width: 460px;
                width: 100%;
                aspect-ratio: 4 / 3;
                border-radius: 28px;
                background: radial-gradient(
                        circle at top left,
                        rgba(255, 255, 255, 0.08),
                        transparent 60%
                    ),
                    var(--color-surface);
                border: 1px solid var(--color-border);
                box-shadow: var(--shadow-soft);
                padding: 26px 26px 20px;
                overflow: hidden;
            }

            .pill {
                position: absolute;
                left: 8%;
                right: 10%;
                top: 28%;
                height: 64px;
                border-radius: 999px;
                background: linear-gradient(
                    90deg,
                    rgba(144, 186, 255, 0.9),
                    rgba(132, 210, 255, 0.9)
                );
                box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
            }

            .characters {
                position: absolute;
                left: 14%;
                right: 14%;
                bottom: 22%;
                display: flex;
                justify-content: space-between;
            }

            .char {
                width: 54px;
                height: 80px;
                border-radius: 18px;
                background-color: rgba(140, 232, 200, 0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                box-shadow: 0 10px 22px rgba(0, 0, 0, 0.45);
                transform-origin: bottom center;
                animation: bob 2.4s ease-in-out infinite;
            }

            .char.two {
                background-color: rgba(153, 196, 255, 0.95);
                animation-delay: 0.15s;
            }

            .char.three {
                animation-delay: 0.3s;
            }

            .caption {
                position: absolute;
                left: 24px;
                bottom: 18px;
                right: 24px;
                font-size: 11px;
                color: var(--color-text-muted);
            }

            @keyframes bob {
                0%,
                100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-6px);
                }
            }
        }

        /* ========== RIGHT PANE (FORM) ========== */
        .rightPane {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 32px 24px;

            .formShell {
                max-width: 420px;
                width: 100%;
            }

            .topRow {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                gap: 16px;
                margin-bottom: 20px;

                h1 {
                    font-size: 22px;
                    color: var(--color-heading);
                }

                .signupText {
                    font-size: 12px;
                    color: var(--color-text-muted);
                    white-space: nowrap;
                }
            }

            .linkish {
                border: none;
                background: transparent;
                color: var(--color-link);
                font-size: 12px;
                cursor: pointer;
                padding: 0;

                &:hover {
                    text-decoration: underline;
                }
            }

            /* Social row */
            .socialRow {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom: 18px;
            }

            .socialButton {
                flex: 1 1 160px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-heading);
                font-size: 12px;
                padding: 8px 14px;
                cursor: pointer;
                transition: background 0.18s ease, border-color 0.18s ease,
                    transform 0.12s ease, box-shadow 0.18s ease;

                svg {
                    font-size: 16px;
                }

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                }
            }

            .divider {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 18px;
                font-size: 11px;
                color: var(--color-text-muted);

                .line {
                    flex: 1;
                    height: 1px;
                    background-color: var(--color-border);
                }

                .label {
                    white-space: nowrap;
                }
            }

            .loginForm {
                display: flex;
                flex-direction: column;
                gap: 14px;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
                gap: 4px;

                label {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .inputShell {
                display: flex;
                align-items: center;
                gap: 8px;
                border-radius: 10px;
                padding: 8px 10px;
                background-color: var(--color-surface-soft);
                border: 1px solid var(--color-border);
                transition: border-color 0.16s ease, box-shadow 0.16s ease,
                    background 0.16s ease;

                svg {
                    font-size: 16px;
                    color: var(--color-text-muted);
                }

                input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: transparent;
                    color: var(--color-text);
                    font-size: 13px;

                    &::placeholder {
                        color: var(--color-text-muted);
                    }
                }

                .iconInline {
                    border: none;
                    background: transparent;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                    cursor: pointer;

                    svg {
                        font-size: 16px;
                    }
                }

                &:focus-within {
                    border-color: var(--color-heading);
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.12);
                    background-color: var(--color-surface);
                }
            }

            .metaRow {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 10px;
                margin-top: 4px;
                margin-bottom: 10px;
                font-size: 11px;

                .remember {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    cursor: pointer;

                    input {
                        width: 14px;
                        height: 14px;
                    }
                }
            }

            .primarySubmit {
                width: 100%;
                border-radius: 999px;
                border: 1px solid var(--color-heading);
                background-color: var(--color-heading);
                color: var(--color-bg);
                font-size: 13px;
                font-weight: 600;
                padding: 9px 16px;
                cursor: pointer;
                transition: background 0.18s ease, transform 0.12s ease,
                    box-shadow 0.18s ease;

                &:hover {
                    filter: brightness(1.05);
                    transform: translateY(-1px);
                    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
                }
            }

            .troubleLink {
                margin-top: 14px;
                border: none;
                background: transparent;
                color: var(--color-link);
                font-size: 11px;
                cursor: pointer;
                display: block;
                margin-inline: auto;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        @media (width < 600px) {
            .rightPane {
                padding-inline: 16px;
            }
        }
    `};function b(o){return n({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"},child:[]}]})(o)}const g=()=>{const[o,a]=l.useState(!1),s=r=>{r.preventDefault()},t=()=>{a(r=>!r)};return e.jsxs(m.Wrap,{children:[e.jsx("div",{className:"leftPane",children:e.jsxs("div",{className:"artShell",children:[e.jsx("div",{className:"pill"}),e.jsxs("div",{className:"characters",children:[e.jsx("div",{className:"char one",children:"🙂"}),e.jsx("div",{className:"char two",children:"😄"}),e.jsx("div",{className:"char three",children:"😉"})]}),e.jsx("p",{className:"caption",children:"Team Nova, carrying your next release together."})]})}),e.jsx("div",{className:"rightPane",children:e.jsxs("div",{className:"formShell",children:[e.jsxs("header",{className:"topRow",children:[e.jsx("h1",{children:"Log in"}),e.jsxs("p",{className:"signupText",children:["Don't have an account?"," ",e.jsx("button",{type:"button",className:"linkish",children:"Sign up"})]})]}),e.jsxs("div",{className:"socialRow",children:[e.jsxs("button",{type:"button",className:"socialButton google",children:[e.jsx(c,{}),e.jsx("span",{children:"Sign in with Google"})]}),e.jsxs("button",{type:"button",className:"socialButton ms",children:[e.jsx(b,{}),e.jsx("span",{children:"Sign in with Microsoft"})]})]}),e.jsxs("div",{className:"divider",children:[e.jsx("span",{className:"line"}),e.jsx("span",{className:"label",children:"or use email"}),e.jsx("span",{className:"line"})]}),e.jsxs("form",{onSubmit:s,className:"loginForm",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsxs("div",{className:"inputShell",children:[e.jsx(d,{}),e.jsx("input",{id:"email",type:"email",defaultValue:"demo@nova.app",placeholder:"you@example.com"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsxs("div",{className:"inputShell",children:[e.jsx(p,{}),e.jsx("input",{id:"password",type:o?"text":"password",defaultValue:"pasword",placeholder:"Enter your password"}),e.jsx("button",{type:"button",className:"iconInline","aria-label":o?"Hide password":"Show password",onClick:t,children:o?e.jsx(x,{}):e.jsx(h,{})})]})]}),e.jsxs("div",{className:"metaRow",children:[e.jsxs("label",{className:"remember",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0}),e.jsx("span",{children:"Remember this device"})]}),e.jsx("button",{type:"button",className:"linkish",children:"Forgot password?"})]}),e.jsx("button",{type:"submit",className:"primarySubmit",children:"Log in"})]}),e.jsx("button",{type:"button",className:"troubleLink",children:"Trouble signing in?"})]})})]})};export{g as default};
