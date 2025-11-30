import{d as h,r as o,j as e,B as m,F as u,p as f,k as g,C as l,D as n,E as t}from"./index-DNs2t0HA.js";const b={Wrap:h.div`
        display: flex;
        height: 100vh;
        color: var(--color-text);
        background: var(--color-bg);

        /* LEFT SIDE ART */
        .leftPane {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--color-bg-elevated);
            padding: 40px;

            @media (max-width: 900px) {
                display: none;
            }

            .artShell {
                text-align: center;

                .pill {
                    width: 280px;
                    height: 80px;
                    background: #7da7ff33;
                    border-radius: 40px;
                    margin: 0 auto 20px;
                }

                .characters {
                    display: flex;
                    justify-content: center;
                    gap: 20px;

                    .char {
                        font-size: 42px;
                        animation: float 3s ease-in-out infinite;
                    }

                    .two {
                        animation-delay: 0.3s;
                    }
                    .three {
                        animation-delay: 0.6s;
                    }
                }

                @keyframes float {
                    0% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }

                .caption {
                    margin-top: 20px;
                    font-size: 14px;
                    color: var(--color-text-muted);
                }
            }
        }

        /* RIGHT SIDE FORM */
        .rightPane {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;

            .formShell {
                width: 100%;
                max-width: 420px;

                .topRow {
                    margin-bottom: 22px;

                    h1 {
                        font-family: "Poppins", sans-serif;
                        font-size: 28px;
                        margin-bottom: 6px;
                        color: var(--color-heading);
                    }

                    .signinText {
                        font-size: 13px;
                        color: var(--color-text-muted);
                    }

                    .linkish {
                        background: none;
                        border: none;
                        color: var(--color-link);
                        cursor: pointer;
                        font-size: 13px;
                    }
                }

                .socialRow {
                    display: flex;
                    gap: 12px;

                    .socialButton {
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        padding: 10px 16px;
                        border-radius: 10px;
                        background: var(--color-surface);
                        border: 1px solid var(--color-border);
                        cursor: pointer;
                        color: var(--color-heading);
                        transition: 0.2s ease;

                        &:hover {
                            background: var(--color-surface-soft);
                            transform: translateY(-2px);
                        }
                    }
                }

                .divider {
                    margin: 20px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    .line {
                        flex: 1;
                        height: 1px;
                        background: var(--color-border);
                    }

                    .label {
                        font-size: 12px;
                        color: var(--color-text-muted);
                    }
                }

                .loginForm {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    .fieldGroup {
                        label {
                            font-size: 13px;
                            margin-bottom: 4px;
                            display: block;
                            color: var(--color-heading);
                        }

                        .inputShell {
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            padding: 10px 14px;
                            border-radius: 10px;
                            background: var(--color-surface);
                            border: 1px solid var(--color-border);
                            transition: 0.2s ease;

                            svg {
                                font-size: 18px;
                                color: var(--color-text-muted);
                            }

                            input {
                                flex: 1;
                                background: transparent;
                                border: none;
                                outline: none;
                                font-size: 14px;
                                color: var(--color-text);
                            }

                            .iconInline {
                                background: none;
                                border: none;
                                cursor: pointer;
                                color: var(--color-text-muted);
                                font-size: 18px;

                                &:hover {
                                    color: var(--color-heading);
                                }
                            }
                        }
                    }

                    .primarySubmit {
                        margin-top: 10px;
                        padding: 12px;
                        border: 1px solid var(--color-heading);
                        background: var(--color-heading);
                        color: var(--color-bg);
                        border-radius: 12px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: 0.2s;

                        &:hover {
                            filter: brightness(1.1);
                            transform: translateY(-2px);
                        }
                    }
                }
            }
        }
    `},v=()=>{const[a,i]=o.useState(!1),[r,c]=o.useState(!1),d=()=>i(s=>!s),p=()=>c(s=>!s),x=s=>{s.preventDefault()};return e.jsxs(b.Wrap,{children:[e.jsx("div",{className:"leftPane",children:e.jsxs("div",{className:"artShell",children:[e.jsx("div",{className:"pill"}),e.jsxs("div",{className:"characters",children:[e.jsx("div",{className:"char one",children:"🧑‍💻"}),e.jsx("div",{className:"char two",children:"🚀"}),e.jsx("div",{className:"char three",children:"✨"})]}),e.jsx("p",{className:"caption",children:"Create your Nova account in seconds."})]})}),e.jsx("div",{className:"rightPane",children:e.jsxs("div",{className:"formShell",children:[e.jsxs("header",{className:"topRow",children:[e.jsx("h1",{children:"Create account"}),e.jsxs("p",{className:"signinText",children:["Already have an account?"," ",e.jsx("button",{type:"button",className:"linkish",children:"Log in"})]})]}),e.jsxs("div",{className:"socialRow",children:[e.jsxs("button",{type:"button",className:"socialButton google",children:[e.jsx(m,{}),e.jsx("span",{children:"Sign up with Google"})]}),e.jsxs("button",{type:"button",className:"socialButton ms",children:[e.jsx(u,{})," ",e.jsx("span",{children:"Sign up with Microsoft"})]})]}),e.jsxs("div",{className:"divider",children:[e.jsx("span",{className:"line"}),e.jsx("span",{className:"label",children:"or use email"}),e.jsx("span",{className:"line"})]}),e.jsxs("form",{onSubmit:x,className:"loginForm",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("label",{htmlFor:"name",children:"Full Name"}),e.jsxs("div",{className:"inputShell",children:[e.jsx(f,{}),e.jsx("input",{id:"name",type:"text",placeholder:"Your name",required:!0})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsxs("div",{className:"inputShell",children:[e.jsx(g,{}),e.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",required:!0})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("label",{children:"Password"}),e.jsxs("div",{className:"inputShell",children:[e.jsx(l,{}),e.jsx("input",{type:a?"text":"password",placeholder:"Create password",required:!0}),e.jsx("button",{type:"button",className:"iconInline",onClick:d,children:a?e.jsx(n,{}):e.jsx(t,{})})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("label",{children:"Confirm Password"}),e.jsxs("div",{className:"inputShell",children:[e.jsx(l,{}),e.jsx("input",{type:r?"text":"password",placeholder:"Re-enter password",required:!0}),e.jsx("button",{type:"button",className:"iconInline",onClick:p,children:r?e.jsx(n,{}):e.jsx(t,{})})]})]}),e.jsx("button",{type:"submit",className:"primarySubmit",children:"Create account"})]})]})})]})};export{v as default};
