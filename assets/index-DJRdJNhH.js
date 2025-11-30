import{d as j,r as h,j as e,T as P,e as H,f as Y,h as $,i as R,k as U,l as z,m as O,n as A,o as C,p as E,q as V,s as q,t as K}from"./index-DNs2t0HA.js";const Z={Wrap:j.div`
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
            border-radius: 18px;
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-soft);
        }

        .accountLayout {
            display: grid;
            grid-template-columns: 280px minmax(0, 1fr);
            min-height: 520px;
            overflow: hidden;

            @media (width < 960px) {
                grid-template-columns: minmax(0, 1fr);
            }
        }

        /* ============= LEFT NAV ============= */
        .settingsNav {
            border-right: 1px solid var(--color-border);
            padding: 20px 18px;
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.04),
                    transparent 55%
                ),
                var(--color-surface-soft);

            @media (width < 960px) {
                border-right: none;
                border-bottom: 1px solid var(--color-border);
            }
        }

        .settingsHeader {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 16px;

            .settingsIconCircle {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: radial-gradient(
                    circle at 30% 0%,
                    rgba(255, 255, 255, 0.2),
                    rgba(255, 255, 255, 0.03)
                );
                color: var(--color-heading);

                svg {
                    font-size: 18px;
                }
            }

            .settingsTitleBlock {
                h1 {
                    font-size: 18px;
                    color: var(--color-heading);
                    margin-bottom: 2px;
                }

                p {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }
        }

        .searchSetting {
            margin-bottom: 14px;

            input {
                width: 100%;
                border-radius: 999px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                font-size: 12px;
                padding: 7px 11px;
                outline: none;
                transition: border-color 0.15s ease, background 0.15s ease;

                &::placeholder {
                    color: var(--color-text-muted);
                }

                &:focus {
                    border-color: var(--color-heading);
                    background-color: var(--color-surface-soft);
                }
            }
        }

        .settingsList {
            max-height: 460px;
            overflow-y: auto;
            padding-right: 4px;

            /* thin scrollbar */
            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-thumb) transparent;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--scrollbar-thumb);
                border-radius: 999px;
            }
        }

        .emptySearch {
            font-size: 11px;
            color: var(--color-text-muted);
            padding: 8px 4px;
        }

        .settingsItem {
            width: 100%;
            border-radius: 12px;
            border: 1px solid transparent;
            background: transparent;
            padding: 8px 10px;
            margin-bottom: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease;

            .settingsItemMain {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .settingsItemIcon {
                width: 30px;
                height: 30px;
                border-radius: 999px;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .settingsItemText {
                text-align: left;

                .label {
                    display: block;
                    font-size: 13px;
                    color: var(--color-heading);
                }

                .desc {
                    display: block;
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .activeDot {
                width: 7px;
                height: 7px;
                border-radius: 999px;
                background-color: var(--color-heading);
                flex-shrink: 0;
            }

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-border);
                transform: translateY(-1px);
            }

            &.isActive {
                background: radial-gradient(
                        circle at top left,
                        rgba(255, 255, 255, 0.12),
                        transparent 60%
                    ),
                    var(--color-surface);
                border-color: var(--color-heading);
            }
        }

        /* ============= RIGHT PANEL ============= */
        .settingsPanel {
            padding: 22px 24px 24px;
            display: flex;
            flex-direction: column;
            min-width: 0;

            @media (width < 768px) {
                padding-inline: 16px;
            }
        }

        .panelHeader {
            margin-bottom: 16px;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 10px;

            .panelTitleBlock {
                display: flex;
                align-items: center;
                gap: 10px;

                .panelIconCircle {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background-color: var(--color-surface-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 18px;
                        color: var(--color-heading);
                    }
                }

                h2 {
                    font-size: 18px;
                    color: var(--color-heading);
                    margin-bottom: 2px;
                }

                p {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }
        }

        .panelBody {
            flex: 1;
            overflow-y: auto;
            padding-right: 4px;

            /* subtle scroll */
            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-thumb) transparent;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--scrollbar-thumb);
                border-radius: 999px;
            }
        }

        /* Generic section styles for inner components */
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 10px;
            gap: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionCard {
            background-color: var(--color-surface-soft);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 12px 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 2px;
            }

            .fieldValue {
                font-size: 13px;
                color: var(--color-heading);
            }

            input,
            select,
            textarea {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;
                resize: vertical;
                min-height: 32px;

                &::placeholder {
                    color: var(--color-text-muted);
                }

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .inlineRadios {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 6px;

            label {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                cursor: pointer;

                input {
                    width: auto;
                    min-height: auto;
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .sectionActions {
            margin-top: 10px;
            display: flex;
            gap: 8px;
            justify-content: flex-end;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;

                &:hover {
                    background-color: var(--color-surface);
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `},J={Wrap:j.div`
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionCard {
            background-color: var(--color-surface-soft);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 12px 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
            }

            .fieldGroup.fullWidth {
                grid-column: 1 / -1;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 2px;
            }

            input {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;
                min-height: 32px;

                &::placeholder {
                    color: var(--color-text-muted);
                }

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .phoneCard {
            grid-template-columns: 1fr;
        }

        .visibilityBlock {
            margin-top: 10px;

            .visibilityLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 4px;
            }

            .inlineRadios {
                display: flex;
                flex-wrap: wrap;
                gap: 12px;

                label {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    cursor: pointer;

                    input {
                        width: auto;
                        min-height: auto;
                    }
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .sectionActions {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;
                min-width: 90px;

                &:hover:enabled {
                    /* background-color: var(--color-surface); */
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.6;
                    cursor: default;
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `},T={firstName:"Luke",lastName:"Skywalker",userName:"LukeSkywalker212",country:"United States",state:"Pennsylvania",city:"Essington",street:"500 Powhatan Ave",zip:"19029",addressVisibility:"followers",phoneNumber:"+1 (830) 179-544-8106",phoneVisibility:"everyone"},X=()=>{const[r,d]=h.useState(T),[l,x]=h.useState(!1),a=c=>t=>{const i=t.target.value;d(p=>({...p,[c]:i}))},s=(c,t)=>{d(i=>({...i,[c]:t}))},m=()=>{d(T)},o=()=>{x(!0),setTimeout(()=>{x(!1)},700)};return e.jsxs(J.Wrap,{children:[e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Name"}),e.jsx("p",{children:"Edit your name or username. These details may be visible on public pages."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"First Name"}),e.jsx("input",{type:"text",value:r.firstName,onChange:a("firstName"),placeholder:"First name"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Last Name"}),e.jsx("input",{type:"text",value:r.lastName,onChange:a("lastName"),placeholder:"Last name"})]}),e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"User Name"}),e.jsx("input",{type:"text",value:r.userName,onChange:a("userName"),placeholder:"Username shown to others"})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Address"}),e.jsx("p",{children:"You can edit your address and control who can see it."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Country"}),e.jsx("input",{type:"text",value:r.country,onChange:a("country"),placeholder:"Country"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"State"}),e.jsx("input",{type:"text",value:r.state,onChange:a("state"),placeholder:"State / Province"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"City"}),e.jsx("input",{type:"text",value:r.city,onChange:a("city"),placeholder:"City"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"ZIP"}),e.jsx("input",{type:"text",value:r.zip,onChange:a("zip"),placeholder:"ZIP / Postal code"})]}),e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Street"}),e.jsx("input",{type:"text",value:r.street,onChange:a("street"),placeholder:"Street address"})]})]}),e.jsxs("div",{className:"visibilityBlock",children:[e.jsx("div",{className:"visibilityLabel",children:"Who can see your address?"}),e.jsxs("div",{className:"inlineRadios",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"addressVisibility",checked:r.addressVisibility==="onlyMe",onChange:()=>s("addressVisibility","onlyMe")}),"Only me"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"addressVisibility",checked:r.addressVisibility==="followers",onChange:()=>s("addressVisibility","followers")}),"Followers only"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"addressVisibility",checked:r.addressVisibility==="everyone",onChange:()=>s("addressVisibility","everyone")}),"Everyone"]})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Phone"}),e.jsx("p",{children:"Add a phone number to stay connected and help with account recovery."})]})}),e.jsxs("div",{className:"sectionCard phoneCard",children:[e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Number"}),e.jsx("input",{type:"tel",value:r.phoneNumber,onChange:a("phoneNumber"),placeholder:"+1 555-000-0000"})]}),e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Who can see your phone?"}),e.jsxs("div",{className:"inlineRadios",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"phoneVisibility",checked:r.phoneVisibility==="onlyMe",onChange:()=>s("phoneVisibility","onlyMe")}),"Only me"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"phoneVisibility",checked:r.phoneVisibility==="followers",onChange:()=>s("phoneVisibility","followers")}),"Followers only"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"phoneVisibility",checked:r.phoneVisibility==="everyone",onChange:()=>s("phoneVisibility","everyone")}),"Everyone"]})]})]})]})]}),e.jsxs("div",{className:"sectionActions",children:[e.jsx("button",{type:"button",onClick:m,disabled:l,children:"Reset"}),e.jsx("button",{type:"button",className:"primary",onClick:o,disabled:l,children:l?"Saving…":"Save changes"})]})]})},Q={Wrap:j.div`
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionCard {
            background-color: var(--color-surface-soft);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 12px 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
            }

            .fieldGroup.fullWidth {
                grid-column: 1 / -1;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 2px;
            }

            input,
            select,
            textarea {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;
                min-height: 32px;
                resize: vertical;

                &::placeholder {
                    color: var(--color-text-muted);
                }

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .sectionActions {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;
                min-width: 90px;

                &:hover:enabled {
                    /* background-color: var(--color-surface); */
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.6;
                    cursor: default;
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `},L={company:"Nova Metrics Labs",jobTitle:"Full-Stack Engineer",department:"Product Engineering",employmentType:"fullTime",startedAt:"2021-06",workSummary:"Building internal dashboards, analytics tools and automation pipelines.",skills:"React, Node.js, TypeScript, MongoDB, GraphQL",school:"Core Systems Institute",degree:"Bachelor of Computer Science",field:"Software Engineering",graduationYear:"2016",educationSummary:"Focused on distributed systems, data structures and web technologies."},_=()=>{const[r,d]=h.useState(L),[l,x]=h.useState(!1),a=o=>c=>{const t=c.target.value;d(i=>({...i,[o]:t}))},s=()=>{x(!0),setTimeout(()=>{x(!1)},700)},m=()=>{d(L)};return e.jsxs(Q.Wrap,{children:[e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Work"}),e.jsx("p",{children:"Update your current role and team so colleagues see the right information."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Company"}),e.jsx("input",{type:"text",value:r.company,onChange:a("company"),placeholder:"Company name"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Job Title"}),e.jsx("input",{type:"text",value:r.jobTitle,onChange:a("jobTitle"),placeholder:"Job title"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Department"}),e.jsx("input",{type:"text",value:r.department,onChange:a("department"),placeholder:"Department / Team"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Employment Type"}),e.jsxs("select",{value:r.employmentType,onChange:a("employmentType"),children:[e.jsx("option",{value:"fullTime",children:"Full-time"}),e.jsx("option",{value:"partTime",children:"Part-time"}),e.jsx("option",{value:"contract",children:"Contract"}),e.jsx("option",{value:"freelance",children:"Freelance"}),e.jsx("option",{value:"intern",children:"Internship"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Started"}),e.jsx("input",{type:"month",value:r.startedAt,onChange:a("startedAt")})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Key Skills"}),e.jsx("input",{type:"text",value:r.skills,onChange:a("skills"),placeholder:"Comma-separated skills"})]}),e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Work Summary"}),e.jsx("textarea",{rows:3,value:r.workSummary,onChange:a("workSummary"),placeholder:"Short description of what you work on."})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Education"}),e.jsx("p",{children:"Share where you studied and what you specialised in."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"School / University"}),e.jsx("input",{type:"text",value:r.school,onChange:a("school"),placeholder:"Institute name"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Degree"}),e.jsx("input",{type:"text",value:r.degree,onChange:a("degree"),placeholder:"Degree (e.g. B.Tech, MSc)"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Field of Study"}),e.jsx("input",{type:"text",value:r.field,onChange:a("field"),placeholder:"Field of study"})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Graduation Year"}),e.jsx("input",{type:"text",value:r.graduationYear,onChange:a("graduationYear"),placeholder:"YYYY"})]}),e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Education Summary"}),e.jsx("textarea",{rows:3,value:r.educationSummary,onChange:a("educationSummary"),placeholder:"Highlights of your education or projects."})]})]})]}),e.jsxs("div",{className:"sectionActions",children:[e.jsx("button",{type:"button",onClick:m,disabled:l,children:"Reset"}),e.jsx("button",{type:"button",className:"primary",onClick:s,disabled:l,children:l?"Saving…":"Save changes"})]})]})},ee={Wrap:j.div`
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionCard {
            background-color: var(--color-surface-soft);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 12px 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
            }

            .fieldGroup.fullWidth {
                grid-column: 1 / -1;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 4px;
            }

            select {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .toggleRow {
            cursor: pointer;
            padding: 6px 0;

            .toggleShell {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 2px;
            }

            .toggleSwitch {
                width: 40px;
                height: 20px;
                border-radius: 999px;
                background-color: var(--color-border);
                position: relative;
                padding: 2px;
                transition: background 0.15s ease;

                .thumb {
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: var(--color-heading);
                    transition: transform 0.18s ease;
                }

                &.isOn {
                    background-color: var(--color-heading);

                    .thumb {
                        transform: translateX(20px);
                        background-color: var(--color-bg);
                    }
                }
            }

            .toggleLabel {
                font-size: 12px;
                color: var(--color-heading);
            }

            .helper {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        /* Sessions */
        .sessionsCard {
            grid-template-columns: 1fr;
        }

        .sessionsHeaderRow {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            margin-top: 6px;
            margin-bottom: 6px;
            grid-column: 1 / -1;
        }

        .sessionsTitle {
            display: flex;
            align-items: center;
            gap: 8px;

            .iconCircle {
                width: 26px;
                height: 26px;
                border-radius: 50%;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .label {
                font-size: 12px;
                color: var(--color-heading);
            }

            .meta {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sessionsList {
            list-style: none;
            margin: 4px 0 0;
            padding: 0;
            grid-column: 1 / -1;
            border-radius: 10px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface);
            max-height: 210px;
            overflow-y: auto;

            scrollbar-width: thin;
            scrollbar-color: var(--scrollbar-thumb) transparent;

            &::-webkit-scrollbar {
                width: 6px;
            }
            &::-webkit-scrollbar-track {
                background: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--scrollbar-thumb);
                border-radius: 999px;
            }
        }

        .sessionItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 7px 10px;
            font-size: 12px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);

            &:last-of-type {
                border-bottom: none;
            }

            &:hover {
                background-color: var(--color-surface-soft);
            }

            .deviceBlock {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background-color: var(--color-heading);
                flex-shrink: 0;
            }

            .deviceName {
                color: var(--color-heading);
                display: flex;
                align-items: center;
                gap: 6px;

                .pill {
                    font-size: 10px;
                    border-radius: 999px;
                    padding: 2px 6px;
                    background-color: var(--color-surface-soft);
                    border: 1px solid var(--color-border);
                }
            }

            .metaLine {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .emptySessions {
            padding: 8px 10px;
            font-size: 11px;
            color: var(--color-text-muted);
        }

        .smallBtn {
            font-size: 11px;
            border-radius: 999px;
            padding: 5px 12px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            color: var(--color-text);
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease;

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-heading);
                transform: translateY(-1px);
            }
        }

        .linkBtn {
            font-size: 11px;
            border: none;
            background: none;
            color: var(--color-link);
            cursor: pointer;
            padding: 0 4px;

            &:hover {
                text-decoration: underline;
            }
        }

        /* Data controls */
        .dataRow {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .dataItem {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);

            .dataIcon {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .dataText {
                flex: 1;

                .title {
                    font-size: 13px;
                    color: var(--color-heading);
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .smallBtn {
                flex-shrink: 0;
            }

            &.danger {
                border-color: rgba(255, 107, 107, 0.5);
            }

            .dangerBtn {
                border-color: rgba(255, 107, 107, 0.7);
                color: #ffb3b3;

                &:hover {
                    background-color: rgba(255, 107, 107, 0.12);
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .sectionActions {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;
                min-width: 90px;

                &:hover:enabled {
                    /* background-color: var(--color-surface); */
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.6;
                    cursor: default;
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `},B={profileVisibility:"followers",showOnlineStatus:!0,loginAlerts:!0,twoFactorAuth:!1},D=[{id:1,device:"Chrome on Windows",location:"Bengaluru, India",lastActive:"Just now",current:!0},{id:2,device:"Edge on Windows",location:"Bhopal, India",lastActive:"2 hours ago",current:!1},{id:3,device:"Chrome on Android",location:"Pune, India",lastActive:"Yesterday",current:!1}],re=()=>{const[r,d]=h.useState(B),[l,x]=h.useState(D),[a,s]=h.useState(!1),[m,o]=h.useState(!1),c=n=>u=>{d(b=>({...b,[n]:u.target.value}))},t=n=>()=>{d(u=>({...u,[n]:!u[n]}))},i=n=>{x(u=>u.filter(b=>b.id!==n))},p=()=>{x(n=>n.filter(u=>u.current))},g=()=>{s(!0),setTimeout(()=>s(!1),700)},v=()=>{d(B),x(D)},N=()=>{o(!0),setTimeout(()=>o(!1),800)},y=()=>{window.confirm("This is a demo control. In a real app this would start an account deletion flow.")};return e.jsxs(ee.Wrap,{children:[e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Profile visibility"}),e.jsx("p",{children:"Choose who can see your profile details and activity in search results."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Who can see your profile?"}),e.jsxs("select",{value:r.profileVisibility,onChange:c("profileVisibility"),children:[e.jsx("option",{value:"everyone",children:"Everyone"}),e.jsx("option",{value:"followers",children:"Followers only"}),e.jsx("option",{value:"onlyMe",children:"Only me"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Online status"}),e.jsxs("div",{className:"toggleRow",onClick:t("showOnlineStatus"),children:[e.jsxs("div",{className:"toggleShell",children:[e.jsx("div",{className:"toggleSwitch"+(r.showOnlineStatus?" isOn":""),children:e.jsx("span",{className:"thumb"})}),e.jsx("span",{className:"toggleLabel",children:"Show when I'm online"})]}),e.jsx("p",{className:"helper",children:"If disabled, people will not see your online indicator."})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Login alerts"}),e.jsxs("div",{className:"toggleRow",onClick:t("loginAlerts"),children:[e.jsxs("div",{className:"toggleShell",children:[e.jsx("div",{className:"toggleSwitch"+(r.loginAlerts?" isOn":""),children:e.jsx("span",{className:"thumb"})}),e.jsx("span",{className:"toggleLabel",children:"Send alerts for new logins"})]}),e.jsx("p",{className:"helper",children:"We'll notify you when a new device signs in."})]})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Security"}),e.jsx("p",{children:"Review active sessions and login protection."})]})}),e.jsxs("div",{className:"sectionCard sessionsCard",children:[e.jsxs("div",{className:"fieldGroup fullWidth",children:[e.jsx("div",{className:"fieldLabel",children:"Two-factor authentication"}),e.jsxs("div",{className:"toggleRow",onClick:t("twoFactorAuth"),children:[e.jsxs("div",{className:"toggleShell",children:[e.jsx("div",{className:"toggleSwitch"+(r.twoFactorAuth?" isOn":""),children:e.jsx("span",{className:"thumb"})}),e.jsx("span",{className:"toggleLabel",children:"Require a code when logging in"})]}),e.jsx("p",{className:"helper",children:"We'll ask for a code from an authenticator app or SMS in addition to your password."})]})]}),e.jsxs("div",{className:"sessionsHeaderRow",children:[e.jsxs("div",{className:"sessionsTitle",children:[e.jsx("span",{className:"iconCircle",children:e.jsx(P,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Active sessions"}),e.jsx("div",{className:"meta",children:"Signed-in devices using your account right now."})]})]}),e.jsx("button",{type:"button",className:"smallBtn",onClick:p,children:"Sign out other devices"})]}),e.jsxs("ul",{className:"sessionsList",children:[l.map(n=>e.jsxs("li",{className:"sessionItem",children:[e.jsxs("div",{className:"deviceBlock",children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{children:[e.jsxs("div",{className:"deviceName",children:[n.device,n.current&&e.jsx("span",{className:"pill",children:"This device"})]}),e.jsxs("div",{className:"metaLine",children:[n.location," • Last active"," ",n.lastActive]})]})]}),!n.current&&e.jsx("button",{type:"button",className:"linkBtn",onClick:()=>i(n.id),children:"Sign out"})]},n.id)),l.length===0&&e.jsx("li",{className:"emptySessions",children:"No active sessions found."})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Data & account controls"}),e.jsx("p",{children:"Download a copy of your data or start a deletion request from here."})]})}),e.jsxs("div",{className:"dataRow",children:[e.jsxs("div",{className:"dataItem",children:[e.jsx("div",{className:"dataIcon",children:e.jsx(H,{})}),e.jsxs("div",{className:"dataText",children:[e.jsx("div",{className:"title",children:"Download your data"}),e.jsx("div",{className:"meta",children:"Get an export of your activity, settings and profile data."})]}),e.jsx("button",{type:"button",className:"smallBtn",onClick:N,disabled:m,children:m?"Preparing…":"Request export"})]}),e.jsxs("div",{className:"dataItem danger",children:[e.jsx("div",{className:"dataIcon",children:e.jsx(Y,{})}),e.jsxs("div",{className:"dataText",children:[e.jsx("div",{className:"title",children:"Delete account"}),e.jsx("div",{className:"meta",children:"Permanently remove your account and associated information."})]}),e.jsx("button",{type:"button",className:"smallBtn dangerBtn",onClick:y,children:"Start delete flow"})]})]})]}),e.jsxs("div",{className:"sectionActions",children:[e.jsx("button",{type:"button",onClick:v,disabled:a,children:"Reset"}),e.jsx("button",{type:"button",className:"primary",onClick:g,disabled:a,children:a?"Saving…":"Save changes"})]})]})},ae={Wrap:j.div`
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionCard {
            background-color: var(--color-surface-soft);
            border-radius: 14px;
            border: 1px solid var(--color-border);
            padding: 12px 14px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 18px;

            @media (width < 640px) {
                grid-template-columns: 1fr;
            }

            .fieldGroup {
                display: flex;
                flex-direction: column;
            }

            .fieldLabel {
                font-size: 11px;
                color: var(--color-text-muted);
                margin-bottom: 3px;
            }

            select {
                width: 100%;
                padding: 7px 9px;
                font-size: 12px;
                border-radius: 8px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface);
                color: var(--color-text);
                outline: none;

                &:focus {
                    border-color: var(--color-heading);
                }
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        .previewCard {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px dashed var(--color-border);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.05),
                    transparent 60%
                ),
                var(--color-surface);
            padding: 10px 12px;
            font-size: 12px;

            .previewTitle {
                display: flex;
                align-items: center;
                gap: 8px;
                margin-bottom: 6px;

                .iconBubble {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: var(--color-surface-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 16px;
                        color: var(--color-heading);
                    }
                }

                .label {
                    color: var(--color-heading);
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .previewRow {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
                margin-top: 4px;

                .hint {
                    color: var(--color-text-muted);
                }

                .value {
                    color: var(--color-heading);
                }
            }
        }

        .sectionActions {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;
                min-width: 90px;

                &:hover:enabled {
                    /* background-color: var(--color-surface); */
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.6;
                    cursor: default;
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `},I={language:"en",region:"IN",timeZone:"Asia/Kolkata",dateFormat:"DMY",timeFormat:"24h",numberFormat:"indian",firstDayOfWeek:"mon",currency:"INR"},oe=()=>{const[r,d]=h.useState(I),[l,x]=h.useState(!1),a=c=>t=>{const i=t.target.value;d(p=>({...p,[c]:i}))},s=()=>{x(!0),setTimeout(()=>x(!1),700)},m=()=>{d(I)},o=h.useMemo(()=>{const c=new Date("2025-02-15T14:35:00"),t=c.getDate().toString().padStart(2,"0"),i=(c.getMonth()+1).toString().padStart(2,"0"),p=c.getFullYear();let g="";switch(r.dateFormat){case"MDY":g=`${i}/${t}/${p}`;break;case"YMD":g=`${p}-${i}-${t}`;break;case"DMY":default:g=`${t}/${i}/${p}`;break}const v=c.getHours(),N=c.getMinutes().toString().padStart(2,"0");let y="";if(r.timeFormat==="12h"){const f=v>=12?"PM":"AM";y=`${(v+11)%12+1}:${N} ${f}`}else y=`${v.toString().padStart(2,"0")}:${N}`;const n=123456789e-2;let u="";const[b,F]=n.toFixed(2).split(".");if(r.numberFormat==="indian"){const f=b.slice(-3),w=b.slice(0,-3);let S="";w.length>0?S=w.replace(/\B(?=(\d{2})+(?!\d))/g,",")+","+f:S=f,u=`${S}.${F}`}else r.numberFormat==="comma"?u=n.toLocaleString("en-US"):r.numberFormat==="dot"?u=n.toLocaleString("en-US").replace(/,/g,".").replace(".",",").replace(/\.(?=[^.]*$)/,","):r.numberFormat==="space"&&(u=n.toLocaleString("en-US").replace(/,/g," "));const W=r.currency==="INR"?"₹":r.currency==="USD"?"$":"€",M=r.firstDayOfWeek==="mon"?"Monday":r.firstDayOfWeek==="sun"?"Sunday":"Saturday";return{dateStr:g,timeStr:y,numberStr:u,currencyStr:`${W} ${u}`,weekStart:M}},[r]);return e.jsxs(ae.Wrap,{children:[e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Language"}),e.jsx("p",{children:"Choose your application language. This will affect menus, tooltips and messages."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"App language"}),e.jsxs("select",{value:r.language,onChange:a("language"),children:[e.jsx("option",{value:"en",children:"English"}),e.jsx("option",{value:"hi",children:"Hindi"}),e.jsx("option",{value:"es",children:"Spanish"}),e.jsx("option",{value:"fr",children:"French"}),e.jsx("option",{value:"de",children:"German"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Region"}),e.jsxs("select",{value:r.region,onChange:a("region"),children:[e.jsx("option",{value:"IN",children:"India"}),e.jsx("option",{value:"US",children:"United States"}),e.jsx("option",{value:"GB",children:"United Kingdom"}),e.jsx("option",{value:"EU",children:"European Union"}),e.jsx("option",{value:"APAC",children:"Asia-Pacific"})]})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Time & date"}),e.jsx("p",{children:"Control how dates and times are displayed across the dashboard."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Time zone"}),e.jsxs("select",{value:r.timeZone,onChange:a("timeZone"),children:[e.jsx("option",{value:"Asia/Kolkata",children:"Asia / Kolkata (IST)"}),e.jsx("option",{value:"UTC",children:"UTC"}),e.jsx("option",{value:"Europe/Berlin",children:"Europe / Berlin (CET/CEST)"}),e.jsx("option",{value:"America/New_York",children:"America / New York (ET)"}),e.jsx("option",{value:"Asia/Singapore",children:"Asia / Singapore (SGT)"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Date format"}),e.jsxs("select",{value:r.dateFormat,onChange:a("dateFormat"),children:[e.jsx("option",{value:"DMY",children:"15/02/2025"}),e.jsx("option",{value:"MDY",children:"02/15/2025"}),e.jsx("option",{value:"YMD",children:"2025-02-15"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Time format"}),e.jsxs("select",{value:r.timeFormat,onChange:a("timeFormat"),children:[e.jsx("option",{value:"24h",children:"24-hour (14:35)"}),e.jsx("option",{value:"12h",children:"12-hour (2:35 PM)"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"First day of week"}),e.jsxs("select",{value:r.firstDayOfWeek,onChange:a("firstDayOfWeek"),children:[e.jsx("option",{value:"mon",children:"Monday"}),e.jsx("option",{value:"sun",children:"Sunday"}),e.jsx("option",{value:"sat",children:"Saturday"})]})]})]}),e.jsxs("div",{className:"previewCard",children:[e.jsxs("div",{className:"previewTitle",children:[e.jsx("span",{className:"iconBubble",children:e.jsx($,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Preview"}),e.jsx("div",{className:"meta",children:"This is how time and date will appear in your account."})]})]}),e.jsxs("div",{className:"previewRow",children:[e.jsx("span",{className:"hint",children:"Sample:"}),e.jsxs("span",{className:"value",children:[o.dateStr," · ",o.timeStr," · Week starts on"," ",o.weekStart]})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Numbers & currency"}),e.jsx("p",{children:"Configure how large values and currency amounts are formatted."})]})}),e.jsxs("div",{className:"sectionCard",children:[e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Number formatting"}),e.jsxs("select",{value:r.numberFormat,onChange:a("numberFormat"),children:[e.jsx("option",{value:"indian",children:"Indian grouping (12,34,567.89)"}),e.jsx("option",{value:"comma",children:"1,234,567.89"}),e.jsx("option",{value:"dot",children:"1.234.567,89"}),e.jsx("option",{value:"space",children:"1 234 567.89"})]})]}),e.jsxs("div",{className:"fieldGroup",children:[e.jsx("div",{className:"fieldLabel",children:"Currency"}),e.jsxs("select",{value:r.currency,onChange:a("currency"),children:[e.jsx("option",{value:"INR",children:"INR – Indian rupee"}),e.jsx("option",{value:"USD",children:"USD – US dollar"}),e.jsx("option",{value:"EUR",children:"EUR – Euro"})]})]})]}),e.jsxs("div",{className:"previewCard",children:[e.jsxs("div",{className:"previewTitle",children:[e.jsx("span",{className:"iconBubble",children:e.jsx(R,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Number preview"}),e.jsx("div",{className:"meta",children:"We are using a sample value to show formatting."})]})]}),e.jsxs("div",{className:"previewRow",children:[e.jsx("span",{className:"hint",children:"1,234,567.89 →"}),e.jsx("span",{className:"value",children:o.numberStr})]}),e.jsxs("div",{className:"previewRow",children:[e.jsx("span",{className:"hint",children:"Currency:"}),e.jsx("span",{className:"value",children:o.currencyStr})]})]})]}),e.jsxs("div",{className:"sectionActions",children:[e.jsx("button",{type:"button",onClick:m,disabled:l,children:"Reset"}),e.jsx("button",{type:"button",className:"primary",onClick:s,disabled:l,children:l?"Saving…":"Save changes"})]})]})},se={Wrap:j.div`
        .sectionBlock {
            margin-bottom: 24px;
        }

        .sectionHeader {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 10px;

            h3 {
                font-size: 14px;
                color: var(--color-heading);
            }

            p {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        .sectionDivider {
            margin: 18px 0;
            height: 1px;
            background-color: var(--color-border);
        }

        /* Channels row */
        .channelsRow {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;

            @media (width < 900px) {
                grid-template-columns: 1fr;
            }
        }

        .channelCard {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 10px 12px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            cursor: pointer;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease, box-shadow 0.15s ease;

            .iconBubble {
                width: 28px;
                height: 28px;
                border-radius: 999px;
                background-color: var(--color-surface);
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;

                svg {
                    font-size: 16px;
                    color: var(--color-heading);
                }
            }

            .textBlock {
                flex: 1;

                .title {
                    font-size: 13px;
                    color: var(--color-heading);
                    margin-bottom: 2px;
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }

            .toggleShell {
                display: flex;
                align-items: center;
                justify-content: center;
                padding-left: 4px;
            }

            &:hover {
                background-color: var(--color-surface);
                border-color: var(--color-heading);
                transform: translateY(-1px);
                box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
            }

            &.isActive {
                border-color: var(--color-heading);
            }
        }

        .toggleSwitch {
            width: 40px;
            height: 20px;
            border-radius: 999px;
            background-color: var(--color-border);
            position: relative;
            padding: 2px;
            transition: background 0.15s ease;

            .thumb {
                position: absolute;
                top: 2px;
                left: 2px;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background-color: var(--color-heading);
                transition: transform 0.18s ease;
            }

            &.isOn {
                background-color: var(--color-heading);

                .thumb {
                    transform: translateX(20px);
                    background-color: var(--color-bg);
                }
            }
        }

        /* Digest row */
        .digestRow {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 10px 12px;
            display: grid;
            grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
            gap: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .digestOptions {
            display: flex;
            flex-direction: column;
            gap: 6px;

            label {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 12px;
                cursor: pointer;

                input {
                    width: auto;
                    min-height: auto;
                }
            }
        }

        .digestNote {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 12px;

            .icon {
                font-size: 18px;
                color: var(--color-heading);
                margin-top: 2px;
            }

            .title {
                color: var(--color-heading);
            }

            .meta {
                font-size: 11px;
                color: var(--color-text-muted);
            }
        }

        /* Categories */
        .categoriesGrid {
            margin-top: 4px;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .categoryChip {
            position: relative;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background-color: var(--color-surface-soft);
            padding: 8px 10px;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
            cursor: pointer;
            text-align: left;
            transition: background 0.15s ease, border-color 0.15s ease,
                transform 0.08s ease, box-shadow 0.15s ease;
            color: var(--color-text);

            .icon {
                font-size: 14px;
                margin-right: 4px;
            }

            .sub {
                font-size: 11px;
                color: var(--color-text-muted);
            }

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: inherit;
                opacity: 0;
                background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.12),
                    transparent 60%
                );
                transition: opacity 0.15s ease;
                pointer-events: none;
            }

            &:hover {
                transform: translateY(-1px);
                box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
                border-color: var(--color-heading);

                &::before {
                    opacity: 1;
                }
            }

            &.isActive {
                border-color: var(--color-heading);
                color: var(--color-heading);
            }
        }

        .previewCard {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px dashed var(--color-border);
            background: radial-gradient(
                    circle at top left,
                    rgba(255, 255, 255, 0.05),
                    transparent 60%
                ),
                var(--color-surface);
            padding: 10px 12px;
            font-size: 12px;

            .previewTitle {
                display: flex;
                align-items: center;
                gap: 8px;

                .iconBubble {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background-color: var(--color-surface-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        font-size: 16px;
                        color: var(--color-heading);
                    }
                }

                .label {
                    color: var(--color-heading);
                }

                .meta {
                    font-size: 11px;
                    color: var(--color-text-muted);
                }
            }
        }

        .sectionActions {
            margin-top: 6px;
            display: flex;
            justify-content: flex-end;
            gap: 8px;

            button {
                font-size: 12px;
                border-radius: 999px;
                padding: 6px 14px;
                border: 1px solid var(--color-border);
                background-color: var(--color-surface-soft);
                color: var(--color-text);
                cursor: pointer;
                transition: background 0.15s ease, border-color 0.15s ease,
                    transform 0.08s ease;
                min-width: 90px;

                &:hover:enabled {
                    /* background-color: var(--color-surface); */
                    border-color: var(--color-heading);
                    transform: translateY(-1px);
                }

                &:disabled {
                    opacity: 0.6;
                    cursor: default;
                }

                &.primary {
                    background-color: var(--color-heading);
                    border-color: var(--color-heading);
                    color: var(--color-bg);
                    font-weight: 600;
                }
            }
        }
    `},G={emailEnabled:!0,inAppEnabled:!0,pushEnabled:!1,digestFrequency:"daily",categories:{productUpdates:!0,securityAlerts:!0,billing:!0,marketing:!1,tips:!1}},ie=()=>{const[r,d]=h.useState(G),[l,x]=h.useState(!1),a=i=>()=>{d(p=>({...p,[i]:!p[i]}))},s=i=>()=>{d(p=>({...p,categories:{...p.categories,[i]:!p.categories[i]}}))},m=i=>{const p=i.target.value;d(g=>({...g,digestFrequency:p}))},o=()=>{x(!0),setTimeout(()=>x(!1),700)},c=()=>{d(G)},t=h.useMemo(()=>{const i=[r.emailEnabled?"email":null,r.inAppEnabled?"in-app":null,r.pushEnabled?"push":null].filter(Boolean),p=r.digestFrequency==="daily"?"once a day":r.digestFrequency==="weekly"?"once a week":"once a month",g=Object.entries(r.categories).filter(([,v])=>v).map(([v])=>{switch(v){case"productUpdates":return"product updates";case"securityAlerts":return"security alerts";case"billing":return"billing";case"marketing":return"announcements";case"tips":return"tips & best practices";default:return v}});return{channels:i.length>0?i.join(", "):"no channels currently selected",freq:p,categories:g.length>0?g.join(", "):"no categories selected"}},[r]);return e.jsxs(se.Wrap,{children:[e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Notification channels"}),e.jsx("p",{children:"Turn individual channels on or off. You can still see critical security alerts even if everything is off."})]})}),e.jsxs("div",{className:"channelsRow",children:[e.jsxs("div",{className:"channelCard"+(r.emailEnabled?" isActive":""),onClick:a("emailEnabled"),children:[e.jsx("div",{className:"iconBubble",children:e.jsx(U,{})}),e.jsxs("div",{className:"textBlock",children:[e.jsx("div",{className:"title",children:"Email"}),e.jsx("div",{className:"meta",children:"Messages sent to your primary email address."})]}),e.jsx("div",{className:"toggleShell",children:e.jsx("div",{className:"toggleSwitch"+(r.emailEnabled?" isOn":""),children:e.jsx("span",{className:"thumb"})})})]}),e.jsxs("div",{className:"channelCard"+(r.inAppEnabled?" isActive":""),onClick:a("inAppEnabled"),children:[e.jsx("div",{className:"iconBubble",children:e.jsx(z,{})}),e.jsxs("div",{className:"textBlock",children:[e.jsx("div",{className:"title",children:"In-app"}),e.jsx("div",{className:"meta",children:"Alerts that appear in your Nova notification center."})]}),e.jsx("div",{className:"toggleShell",children:e.jsx("div",{className:"toggleSwitch"+(r.inAppEnabled?" isOn":""),children:e.jsx("span",{className:"thumb"})})})]}),e.jsxs("div",{className:"channelCard"+(r.pushEnabled?" isActive":""),onClick:a("pushEnabled"),children:[e.jsx("div",{className:"iconBubble",children:e.jsx(O,{})}),e.jsxs("div",{className:"textBlock",children:[e.jsx("div",{className:"title",children:"Push"}),e.jsx("div",{className:"meta",children:"Mobile or browser push notifications for time-sensitive activity."})]}),e.jsx("div",{className:"toggleShell",children:e.jsx("div",{className:"toggleSwitch"+(r.pushEnabled?" isOn":""),children:e.jsx("span",{className:"thumb"})})})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Summary digest"}),e.jsx("p",{children:"Receive a compact summary of your account each day, week or month."})]})}),e.jsxs("div",{className:"digestRow",children:[e.jsxs("div",{className:"digestOptions",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"digest",value:"daily",checked:r.digestFrequency==="daily",onChange:m}),"Daily summary"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"digest",value:"weekly",checked:r.digestFrequency==="weekly",onChange:m}),"Weekly overview"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",name:"digest",value:"monthly",checked:r.digestFrequency==="monthly",onChange:m}),"Monthly snapshot"]})]}),e.jsxs("div",{className:"digestNote",children:[e.jsx(A,{className:"icon"}),e.jsxs("div",{children:[e.jsx("div",{className:"title",children:"Security alerts override"}),e.jsx("div",{className:"meta",children:"Critical security notifications may still be sent right away so you can react quickly."})]})]})]})]}),e.jsx("div",{className:"sectionDivider"}),e.jsxs("section",{className:"sectionBlock",children:[e.jsx("div",{className:"sectionHeader",children:e.jsxs("div",{children:[e.jsx("h3",{children:"Notification categories"}),e.jsx("p",{children:"Pick which types of notifications you want to hear about."})]})}),e.jsxs("div",{className:"categoriesGrid",children:[e.jsxs("button",{type:"button",className:"categoryChip"+(r.categories.productUpdates?" isActive":""),onClick:s("productUpdates"),children:[e.jsx(C,{className:"icon"}),"Product updates",e.jsx("span",{className:"sub",children:"New features, improvements"})]}),e.jsxs("button",{type:"button",className:"categoryChip"+(r.categories.securityAlerts?" isActive":""),onClick:s("securityAlerts"),children:[e.jsx(A,{className:"icon"}),"Security alerts",e.jsx("span",{className:"sub",children:"Unusual logins, password changes"})]}),e.jsxs("button",{type:"button",className:"categoryChip"+(r.categories.billing?" isActive":""),onClick:s("billing"),children:[e.jsx(R,{className:"icon"}),"Billing & payments",e.jsx("span",{className:"sub",children:"Invoices, payment issues"})]}),e.jsxs("button",{type:"button",className:"categoryChip"+(r.categories.marketing?" isActive":""),onClick:s("marketing"),children:[e.jsx(C,{className:"icon"}),"News & announcements",e.jsx("span",{className:"sub",children:"Launches, events, campaigns"})]}),e.jsxs("button",{type:"button",className:"categoryChip"+(r.categories.tips?" isActive":""),onClick:s("tips"),children:[e.jsx(C,{className:"icon"}),"Tips & best practices",e.jsx("span",{className:"sub",children:"Guides, productivity tips"})]})]}),e.jsx("div",{className:"previewCard",children:e.jsxs("div",{className:"previewTitle",children:[e.jsx("span",{className:"iconBubble",children:e.jsx(z,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"label",children:"Preview"}),e.jsxs("div",{className:"meta",children:["We'll send ",t.categories," via"," ",t.channels,", bundled ",t.freq,"."]})]})]})})]}),e.jsxs("div",{className:"sectionActions",children:[e.jsx("button",{type:"button",onClick:c,disabled:l,children:"Reset"}),e.jsx("button",{type:"button",className:"primary",onClick:o,disabled:l,children:l?"Saving…":"Save changes"})]})]})},k=[{id:"personal",label:"Personal Information",desc:"Basic details, profile name and public info.",icon:E,component:X},{id:"work",label:"Work & Education",desc:"Company, role, education history.",icon:V,component:_},{id:"privacy",label:"Privacy & Protection",desc:"Visibility, security and data controls.",icon:q,component:re},{id:"language",label:"Language & Region",desc:"Locale, language and regional formats.",icon:K,component:oe},{id:"notifications",label:"Notification & Alerts",desc:"Email, in-app and reminder settings.",icon:z,component:ie}],ne=()=>{const[r,d]=h.useState("personal"),[l,x]=h.useState(""),a=h.useMemo(()=>{const o=l.trim().toLowerCase();return o?k.filter(c=>c.label.toLowerCase().includes(o)):k},[l]),s=k.find(o=>o.id===r)??k[0],m=s.component;return e.jsx(Z.Wrap,{children:e.jsxs("div",{className:"accountLayout surface-card",children:[e.jsxs("aside",{className:"settingsNav",children:[e.jsxs("div",{className:"settingsHeader",children:[e.jsx("div",{className:"settingsIconCircle",children:e.jsx(E,{})}),e.jsxs("div",{className:"settingsTitleBlock",children:[e.jsx("h1",{children:"Account Settings"}),e.jsx("p",{children:"Manage your profile, privacy and app preferences."})]})]}),e.jsx("div",{className:"searchSetting",children:e.jsx("input",{type:"text",placeholder:"Find a setting",value:l,onChange:o=>x(o.target.value)})}),e.jsxs("div",{className:"settingsList",children:[a.length===0&&e.jsx("div",{className:"emptySearch",children:"No settings match this search."}),a.map(o=>{const c=o.icon,t=o.id===r;return e.jsxs("button",{type:"button",className:"settingsItem"+(t?" isActive":""),onClick:()=>d(o.id),children:[e.jsxs("div",{className:"settingsItemMain",children:[e.jsx("span",{className:"settingsItemIcon",children:e.jsx(c,{})}),e.jsxs("span",{className:"settingsItemText",children:[e.jsx("span",{className:"label",children:o.label}),e.jsx("span",{className:"desc",children:o.desc})]})]}),t&&e.jsx("span",{className:"activeDot"})]},o.id)})]})]}),e.jsxs("section",{className:"settingsPanel",children:[e.jsx("header",{className:"panelHeader",children:e.jsxs("div",{className:"panelTitleBlock",children:[e.jsx("div",{className:"panelIconCircle",children:e.jsx(s.icon,{})}),e.jsxs("div",{children:[e.jsx("h2",{children:s.label}),e.jsx("p",{children:s.desc})]})]})}),e.jsx("div",{className:"panelBody",children:e.jsx(m,{})})]})]})})};export{ne as default};
