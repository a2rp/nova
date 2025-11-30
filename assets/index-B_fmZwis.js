import{d as je,r as a,j as r}from"./index-DNs2t0HA.js";const ye={Wrap:je.div`
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
    `},ke=[{id:1,name:"Yaga Masamichi",email:"yaga.masamichi@gmail.com",status:"online",role:"Admin",department:"Engineering",phone:"+1 202-555-0180",location:"New York, USA",createdAt:"14 January, 2022",color:"#4f46e5"},{id:2,name:"Nanami Suda",email:"nanami.suda@gmail.com",status:"online",role:"User",department:"Design",phone:"+44 20 7946 2233",location:"London, UK",createdAt:"07 February, 2023",color:"#ec4899"},{id:3,name:"Okkotsu Yuta",email:"okkotsu.yuta@gmail.com",status:"offline",role:"User",department:"Support",phone:"+81 80-6543-8899",location:"Kyoto, Japan",createdAt:"21 June, 2023",color:"#22c55e"},{id:4,name:"Kugisaki Nobara",email:"kugisaki.nobara@gmail.com",status:"online",role:"Supervisor",department:"Marketing",phone:"+61 2 9374 4000",location:"Sydney, Australia",createdAt:"03 November, 2023",color:"#f97316"},{id:5,name:"Nanami Kento",email:"nanami.kento@gmail.com",status:"offline",role:"Admin",department:"Finance",phone:"+1 303-555-0134",location:"Denver, USA",createdAt:"30 August, 2021",color:"#0ea5e9"},{id:6,name:"Fushiguro Megumi",email:"fushiguro.megumi@gmail.com",status:"online",role:"User",department:"Engineering",phone:"+49 30 901820",location:"Berlin, Germany",createdAt:"19 May, 2022",color:"#a855f7"},{id:7,name:"Nitta Akari",email:"nitta.akari@gmail.com",status:"away",role:"Supervisor",department:"Design",phone:"+33 1 4020 5000",location:"Paris, France",createdAt:"12 March, 2023",color:"#22d3ee"},{id:8,name:"Inumaki Toge",email:"inumaki.toge@gmail.com",status:"online",role:"User",department:"Support",phone:"+82 10-7788-5566",location:"Seoul, South Korea",createdAt:"28 July, 2023",color:"#facc15"},{id:9,name:"Miwa Kasumi",email:"miwa.kasumi@gmail.com",status:"online",role:"User",department:"Human Resources",phone:"+81 50-3322-1877",location:"Tokyo, Japan",createdAt:"10 April, 2022",color:"#fb7185"},{id:10,name:"Gojo Satoru",email:"gojo.satoru@gmail.com",status:"away",role:"Admin",department:"Engineering",phone:"+1 415-555-4400",location:"San Francisco, USA",createdAt:"03 May, 2020",color:"#60a5fa"},{id:11,name:"Zenin Maki",email:"zenin.maki@gmail.com",status:"online",role:"Supervisor",department:"Support",phone:"+65 6123 4400",location:"Singapore",createdAt:"09 September, 2022",color:"#34d399"},{id:12,name:"Itadori Yuji",email:"itadori.yuji@gmail.com",status:"offline",role:"User",department:"Marketing",phone:"+55 11 5566-1122",location:"São Paulo, Brazil",createdAt:"18 December, 2021",color:"#f97316"}],C=8,re=["All","Engineering","Design","Support","Marketing","Finance","Human Resources"],we=["All","Online","Offline","Away"],Se=["All","Admin","User","Supervisor"],Ne=[{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"location",label:"Location"},{id:"department",label:"Department"},{id:"role",label:"Role"}],Ae=[{id:"contains",label:"contains"},{id:"equals",label:"equals"},{id:"startsWith",label:"starts with"},{id:"endsWith",label:"ends with"}],Me=()=>{const[$,M]=a.useState(ke),[U,oe]=a.useState(""),[y,te]=a.useState("All"),[k,ae]=a.useState("All"),[w,ne]=a.useState("All"),[F,O]=a.useState(!1),[d,B]=a.useState({column:"name",operator:"contains",value:""}),[p,S]=a.useState(null),[u,le]=a.useState({key:"name",direction:"asc"}),[L,N]=a.useState([]),D=a.useRef(null),[c,R]=a.useState(0),[A,_]=a.useState(!1),[I,f]=a.useState(!1),[z,v]=a.useState(null),[l,T]=a.useState({name:"",email:"",status:"online",role:"User",department:"Engineering",phone:"",location:"",createdAt:""}),[P,E]=a.useState(null),W=a.useRef(null),H=a.useRef(null),Z=a.useRef(null),J=a.useRef(null),se=a.useRef(null);a.useEffect(()=>{const e=o=>{if(F&&W.current&&!W.current.contains(o.target)&&O(!1),I&&H.current&&!H.current.contains(o.target)&&(f(!1),v(null)),p&&J.current&&!J.current.contains(o.target)&&S(null),P){const t=o.target;t.closest&&(t.closest(".rowMenu")||t.closest(".dotsBtn"))||E(null)}};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[F,I,p,P]);const x=a.useMemo(()=>{let e=[...$];const o=U.trim().toLowerCase();o&&(e=e.filter(n=>n.name.toLowerCase().includes(o)||n.email.toLowerCase().includes(o)||n.location.toLowerCase().includes(o))),y!=="All"&&(e=e.filter(n=>n.department===y)),k!=="All"&&(e=e.filter(n=>n.status.toLowerCase()===k.toLowerCase())),w!=="All"&&(e=e.filter(n=>n.role===w));const t=d.value.trim().toLowerCase();if(t&&(e=e.filter(n=>{const j=d.column,i=String(n[j]??"").toLowerCase();if(!i)return!1;switch(d.operator){case"equals":return i===t;case"startsWith":return i.startsWith(t);case"endsWith":return i.endsWith(t);default:return i.includes(t)}})),u!=null&&u.key){const{key:n,direction:j}=u,i=j==="desc"?-1:1;e.sort((s,V)=>{const X=(s[n]??"").toString().toLowerCase(),ee=(V[n]??"").toString().toLowerCase();return X<ee?-1*i:X>ee?1*i:0})}return e},[$,U,y,k,w,d,u]),Y=Math.max(1,Math.ceil(x.length/C)),b=a.useMemo(()=>{if(A)return x;const e=c*C,o=e+C;return x.slice(e,o)},[x,c,A]),ie=A?1:c*C+1,ce=A?x.length:Math.min(x.length,(c+1)*C);a.useEffect(()=>{R(0)},[U,y,k,w,d.value]);const m=e=>{le(o=>{if(!o||o.key!==e)return{key:e,direction:"asc"};const t=o.direction==="asc"?"desc":"asc";return{key:e,direction:t}})},h=e=>!u||u.key!==e?null:u.direction==="asc"?" ↑":" ↓",G=b.length>0&&b.every(e=>L.includes(e.id)),Q=b.some(e=>L.includes(e.id))&&!G;a.useEffect(()=>{D.current&&(D.current.indeterminate=Q)},[Q]);const de=()=>{if(G){const e=new Set(b.map(o=>o.id));N(o=>o.filter(t=>!e.has(t)))}else{const e=b.map(o=>o.id);N(o=>Array.from(new Set([...o,...e])))}},pe=e=>{N(o=>o.includes(e)?o.filter(t=>t!==e):[...o,e])},ue=()=>{const e=new Blob([JSON.stringify(x,null,2)],{type:"application/json"}),o=URL.createObjectURL(e),t=document.createElement("a");t.href=o,t.download="nova-users-export.json",t.click(),URL.revokeObjectURL(o)},xe=()=>{var e;(e=Z.current)==null||e.click()},me=e=>{var n;const o=(n=e.target.files)==null?void 0:n[0];if(!o)return;const t=new FileReader;t.onload=()=>{try{const j=JSON.parse(t.result);if(Array.isArray(j)){const i=j.map((s,V)=>({id:s.id??Date.now()+V+Math.floor(Math.random()*1e3),name:s.name??"Unnamed",email:s.email??"",status:(s.status||"online").toLowerCase(),role:s.role||"User",department:s.department||"Engineering",phone:s.phone||"",location:s.location||"",createdAt:s.createdAt||"",color:s.color||`hsl(${Math.floor(Math.random()*360)},70%,55%)`}));M(i),R(0),N([])}}catch{}},t.readAsText(o),e.target.value=""},he=()=>{T({name:"",email:"",status:"online",role:"User",department:"Engineering",phone:"",location:"",createdAt:""}),v(null),f(!0)},ge=e=>{T({name:e.name,email:e.email,status:e.status,role:e.role,department:e.department,phone:e.phone,location:e.location,createdAt:e.createdAt}),v(e.id),f(!0)},g=(e,o)=>{T(t=>({...t,[e]:o}))},be=e=>{if(e.preventDefault(),!l.name.trim()||!l.email.trim())return;const o={name:l.name.trim(),email:l.email.trim(),status:l.status.toLowerCase(),role:l.role,department:l.department,phone:l.phone,location:l.location,createdAt:l.createdAt};if(z)M(t=>t.map(n=>n.id===z?{...n,...o}:n));else{const t={...o,id:Date.now(),color:`hsl(${Math.floor(Math.random()*360)},70%,55%)`};M(n=>[t,...n])}f(!1),v(null),R(0)},q=e=>{_(!1),R(e)},K=e=>{S(o=>o===e?null:e)},fe=e=>{E(o=>o===e?null:e)},ve=e=>{M(o=>o.filter(t=>t.id!==e)),N(o=>o.filter(t=>t!==e)),E(null)};return r.jsxs(ye.Wrap,{children:[r.jsx("input",{ref:Z,type:"file",accept:"application/json",style:{display:"none"},onChange:me}),r.jsxs("div",{className:"breadcrumbs",children:[r.jsx("span",{className:"crumb",children:"Home"}),r.jsx("span",{className:"crumbSep",children:"/"}),r.jsx("span",{className:"crumb current",children:"Users"})]}),r.jsxs("div",{className:"pageHeader",children:[r.jsx("h1",{children:"User list"}),r.jsxs("div",{className:"headerActions",children:[r.jsx("button",{type:"button",className:"primaryBtn",onClick:he,children:"+ Add User"}),r.jsx("div",{className:"searchShell",children:r.jsx("input",{type:"text",placeholder:"Search user",value:U,onChange:e=>oe(e.target.value)})}),r.jsx("div",{className:"divider"}),r.jsx("button",{type:"button",className:"ghostBtn",onClick:ue,children:"Export"}),r.jsx("button",{type:"button",className:"ghostBtn",onClick:xe,children:"Import"})]})]}),r.jsx("div",{className:"filtersRow",ref:J,children:r.jsxs("div",{className:"filterGroup",children:[r.jsxs("div",{className:"filterDropdown",children:[r.jsx("button",{type:"button",className:"filterTrigger"+(p==="department"?" isOpen":""),onClick:()=>K("department"),children:"Department"}),p==="department"&&r.jsx("div",{className:"filterMenu",children:re.map(e=>r.jsx("div",{className:"filterOption"+(y===e?" active":""),onClick:()=>{te(e),S(null)},children:e},e))})]}),r.jsxs("div",{className:"filterDropdown",children:[r.jsx("button",{type:"button",className:"filterTrigger"+(p==="status"?" isOpen":""),onClick:()=>K("status"),children:"Status"}),p==="status"&&r.jsx("div",{className:"filterMenu",children:we.map(e=>r.jsx("div",{className:"filterOption"+(k===e?" active":""),onClick:()=>{ae(e),S(null)},children:e},e))})]}),r.jsxs("div",{className:"filterDropdown",children:[r.jsx("button",{type:"button",className:"filterTrigger"+(p==="role"?" isOpen":""),onClick:()=>K("role"),children:"Role"}),p==="role"&&r.jsx("div",{className:"filterMenu",children:Se.map(e=>r.jsx("div",{className:"filterOption"+(w===e?" active":""),onClick:()=>{ne(e),S(null)},children:e},e))})]}),r.jsxs("div",{className:"moreFilterWrapper",ref:W,children:[r.jsx("button",{type:"button",className:"moreFilterTrigger"+(F?" active":""),onClick:()=>O(e=>!e),children:"More filters"}),F&&r.jsxs("div",{className:"moreFilterPanel surface-card",children:[r.jsxs("div",{className:"panelHeader",children:[r.jsx("span",{children:"Filter"}),r.jsx("button",{type:"button",onClick:()=>O(!1),children:"×"})]}),r.jsxs("div",{className:"panelBody",children:[r.jsxs("label",{children:[r.jsx("span",{className:"label",children:"Column"}),r.jsx("select",{value:d.column,onChange:e=>B(o=>({...o,column:e.target.value})),children:Ne.map(e=>r.jsx("option",{value:e.id,children:e.label},e.id))})]}),r.jsxs("label",{children:[r.jsx("span",{className:"label",children:"Operator"}),r.jsx("select",{value:d.operator,onChange:e=>B(o=>({...o,operator:e.target.value})),children:Ae.map(e=>r.jsx("option",{value:e.id,children:e.label},e.id))})]}),r.jsxs("label",{children:[r.jsx("span",{className:"label",children:"Value"}),r.jsx("input",{type:"text",value:d.value,onChange:e=>B(o=>({...o,value:e.target.value})),placeholder:"Filter value"})]})]})]})]})]})}),r.jsx("div",{className:"tableShell surface-card",ref:se,children:r.jsxs("table",{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:r.jsx("input",{ref:D,type:"checkbox",checked:G,onChange:de})}),r.jsx("th",{children:"Avatar"}),r.jsxs("th",{className:"sortable",onClick:()=>m("name"),children:["Name",h("name")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("email"),children:["Email",h("email")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("status"),children:["Status",h("status")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("role"),children:["Role",h("role")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("department"),children:["Department",h("department")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("phone"),children:["Phone",h("phone")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("location"),children:["Location",h("location")]}),r.jsxs("th",{className:"sortable",onClick:()=>m("createdAt"),children:["Created At",h("createdAt")]}),r.jsx("th",{})]})}),r.jsxs("tbody",{children:[b.map(e=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsx("input",{type:"checkbox",checked:L.includes(e.id),onChange:()=>pe(e.id)})}),r.jsx("td",{children:r.jsx("div",{className:"avatar",style:{"--avatar-color":e.color},children:e.name.charAt(0)})}),r.jsx("td",{children:e.name}),r.jsx("td",{children:r.jsx("a",{href:`mailto:${e.email}`,children:e.email})}),r.jsx("td",{children:r.jsxs("span",{className:`statusChip status-${e.status}`,children:[e.status==="online"&&"Online",e.status==="offline"&&"Offline",e.status==="away"&&"Away"]})}),r.jsx("td",{children:r.jsx("span",{className:"roleChip",children:e.role})}),r.jsx("td",{children:e.department}),r.jsx("td",{children:e.phone}),r.jsx("td",{children:e.location}),r.jsx("td",{children:e.createdAt}),r.jsxs("td",{className:"actionsCell",children:[r.jsx("button",{type:"button",className:"dotsBtn",onClick:o=>{o.stopPropagation(),fe(e.id)},title:"More actions",children:"⋯"}),P===e.id&&r.jsxs("div",{className:"rowMenu",children:[r.jsx("button",{type:"button",onClick:()=>{ge(e),E(null)},children:"Edit"}),r.jsx("button",{type:"button",className:"danger",onClick:()=>ve(e.id),children:"Delete"})]})]})]},e.id)),b.length===0&&r.jsx("tr",{children:r.jsx("td",{colSpan:11,className:"emptyRow",children:"No users found for current filters."})})]})]})}),r.jsxs("div",{className:"tableFooter",children:[r.jsxs("div",{className:"footerLeft",children:["Showing ",ie,"-",ce," of ",x.length," ","users",r.jsx("button",{type:"button",className:"linkBtn",onClick:()=>_(!0),children:"Show all"})]}),!A&&r.jsxs("div",{className:"pagination",children:[r.jsx("button",{type:"button",onClick:()=>q(Math.max(c-1,0)),disabled:c===0,children:"‹"}),Array.from({length:Y}).map((e,o)=>r.jsx("button",{type:"button",className:"pageBtn"+(o===c?" isActive":""),onClick:()=>q(o),children:o+1},o)),r.jsx("button",{type:"button",onClick:()=>q(Math.min(c+1,Y-1)),disabled:c>=Y-1,children:"›"})]})]}),I&&r.jsx("div",{className:"modalBackdrop",children:r.jsxs("div",{className:"modalCard surface-card",ref:H,children:[r.jsxs("div",{className:"modalHeader",children:[r.jsx("h2",{children:z?"Edit user":"Add user"}),r.jsx("button",{type:"button",onClick:()=>{f(!1),v(null)},children:"×"})]}),r.jsxs("form",{className:"modalBody",onSubmit:be,children:[r.jsxs("div",{className:"modalGrid",children:[r.jsxs("label",{children:[r.jsx("span",{children:"Name"}),r.jsx("input",{type:"text",value:l.name,onChange:e=>g("name",e.target.value),required:!0})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Email"}),r.jsx("input",{type:"email",value:l.email,onChange:e=>g("email",e.target.value),required:!0})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Status"}),r.jsxs("select",{value:l.status,onChange:e=>g("status",e.target.value),children:[r.jsx("option",{value:"online",children:"Online"}),r.jsx("option",{value:"offline",children:"Offline"}),r.jsx("option",{value:"away",children:"Away"})]})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Role"}),r.jsxs("select",{value:l.role,onChange:e=>g("role",e.target.value),children:[r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"User",children:"User"}),r.jsx("option",{value:"Supervisor",children:"Supervisor"})]})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Department"}),r.jsx("select",{value:l.department,onChange:e=>g("department",e.target.value),children:re.filter(e=>e!=="All").map(e=>r.jsx("option",{value:e,children:e},e))})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Phone"}),r.jsx("input",{type:"text",value:l.phone,onChange:e=>g("phone",e.target.value)})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Location"}),r.jsx("input",{type:"text",value:l.location,onChange:e=>g("location",e.target.value)})]}),r.jsxs("label",{children:[r.jsx("span",{children:"Created at"}),r.jsx("input",{type:"text",placeholder:"e.g. 02 May, 2024",value:l.createdAt,onChange:e=>g("createdAt",e.target.value)})]})]}),r.jsxs("div",{className:"modalFooter",children:[r.jsx("button",{type:"button",className:"ghostBtn",onClick:()=>{f(!1),v(null)},children:"Cancel"}),r.jsx("button",{type:"submit",className:"primaryBtn",children:z?"Save changes":"Save user"})]})]})]})})]})};export{Me as default};
