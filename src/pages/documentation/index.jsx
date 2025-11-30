// src/pages/documentation/index.jsx
import { Styled } from "./styled";
import {
    TbBook,
    TbRocket,
    TbLayoutDashboard,
    TbPalette,
    TbDatabase,
    TbHelpCircle,
} from "react-icons/tb";

const sections = [
    {
        id: "getting-started",
        icon: TbRocket,
        title: "Getting started",
        subtitle: "Spin up Nova for a new project in minutes.",
        bullets: [
            "Project structure & routing pattern",
            "Theme tokens and dark / light mode",
            "Where to add new pages & nav items",
        ],
        tag: "Start here",
    },
    {
        id: "layout",
        icon: TbLayoutDashboard,
        title: "Layout & navigation",
        subtitle: "Header, sidebar, multi-level menu, and responsive behavior.",
        bullets: [
            "How side menu collapse / expand works",
            "Using NavLinks component for new routes",
            "Mobile vs desktop breakpoints",
        ],
        tag: "Shell",
    },
    {
        id: "theming",
        icon: TbPalette,
        title: "Theming & tokens",
        subtitle: "Color system, surfaces, typography and reusable helpers.",
        bullets: [
            "Theme CSS variables you can reuse",
            "Creating new surface styles for widgets",
            "Updating brand logo and title safely",
        ],
        tag: "Design",
    },
    {
        id: "data",
        icon: TbDatabase,
        title: "Sample data & state",
        subtitle: "Where demo tables, charts and filters live.",
        bullets: [
            "Dashboard widgets data sources",
            "Users table: filtering, sorting & paging",
            "How to plug in real APIs later",
        ],
        tag: "Data",
    },
    {
        id: "pages",
        icon: TbBook,
        title: "Page blueprints",
        subtitle: "Starter templates for forms, tables and detail pages.",
        bullets: [
            "Starter, Error, Login, Signup pages",
            "Account settings sections and patterns",
            "How to clone a page for a new feature",
        ],
        tag: "Patterns",
    },
    {
        id: "faq",
        icon: TbHelpCircle,
        title: "FAQ & tips",
        subtitle: "Little tricks to keep the codebase clean and fast.",
        bullets: [
            "Naming conventions & folder casing",
            "When to create a component vs a page",
            "Small UX details that make Nova feel premium",
        ],
        tag: "Guides",
    },
];

const Documentation = () => {
    return (
        <Styled.Wrap className="app-max-width app-padding">
            <Styled.HeaderRow>
                <div className="titleBlock">
                    <span className="eyebrow">Nova · System docs</span>
                    <h1>Documentation</h1>
                    <p>
                        Overview of how this dashboard shell is put together –
                        layout, theming, sample data and reusable patterns you
                        can plug into any project.
                    </p>
                </div>

                <div className="metaBlock">
                    <div className="badge version">v0.1 · Frontend only</div>
                    <div className="badge status">Playground build</div>
                </div>
            </Styled.HeaderRow>

            <Styled.Layout>
                {/* LEFT: quick index */}
                <Styled.SideNav className="surface-card">
                    <div className="sideTitle">Sections</div>
                    <ul>
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`} className="sideLink">
                                    <span className="dot" />
                                    <span>{section.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hint">
                        Tip: use this page as living README for the Nova layout.
                    </div>
                </Styled.SideNav>

                {/* RIGHT: cards */}
                <Styled.Content>
                    <Styled.CardGrid>
                        {sections.map((section) => {
                            const Icon = section.icon;
                            return (
                                <article
                                    key={section.id}
                                    id={section.id}
                                    className="card surface-card"
                                >
                                    <header className="cardHeader">
                                        <div className="iconWrap">
                                            <Icon />
                                        </div>
                                        <div>
                                            <h2>{section.title}</h2>
                                            <p className="subtitle">
                                                {section.subtitle}
                                            </p>
                                        </div>
                                        <span className="tag">
                                            {section.tag}
                                        </span>
                                    </header>

                                    <ul className="bulletList">
                                        {section.bullets.map((line) => (
                                            <li key={line}>{line}</li>
                                        ))}
                                    </ul>

                                    <button
                                        type="button"
                                        className="outlineButton"
                                    >
                                        View notes
                                    </button>
                                </article>
                            );
                        })}
                    </Styled.CardGrid>
                </Styled.Content>
            </Styled.Layout>
        </Styled.Wrap>
    );
};

export default Documentation;
