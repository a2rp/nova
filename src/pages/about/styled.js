import styled from "styled-components";

export const Styled = {
    Wrap: styled.div`
        display: grid;
        gap: var(--space-2xl);

        .block {
            display: grid;
            gap: var(--space-md);
            padding: var(--space-xl);
            border-radius: var(--radius-xl);
        }

        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            @media (max-width: 560px) {
                flex-direction: column;
                align-items: flex-start;
            }
        }

        h1,
        h2 {
            margin: 0;
            color: var(--color-heading);
        }

        .text {
            color: var(--color-text);
            line-height: 1.8;
            font-size: 1rem;
        }

        .chip {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 10px;
            font-size: 12px;
            background: var(--color-accent-soft);
            color: var(--color-heading);
            border: 1px solid var(--color-accent-border);
            border-radius: 999px;
            width: max-content;
        }
    `,

    /* ===================== HERO ===================== */
    Hero: styled.section`
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: var(--space-xl);
        align-items: center;
        overflow: hidden;

        .miniTag {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: var(--font-size-xs);
            background: var(--color-accent-soft);
            border: 1px solid var(--color-accent-border);
            color: var(--color-heading);
            width: max-content;
            margin-bottom: var(--space-sm);
        }

        .sub {
            font-size: var(--font-size-lg);
            color: var(--color-text);
            max-width: 58ch;
        }

        .heroStats {
            margin-top: var(--space-lg);
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .stat {
            padding: 12px;
            border-radius: var(--radius-lg);
            background: var(--color-surface);
            border: 1px solid var(--color-border-subtle);
            box-shadow: var(--shadow-subtle);
            display: grid;
            gap: 4px;
            text-align: center;
        }

        .val {
            font-weight: 800;
            font-size: 15px;
            color: var(--color-heading);
        }

        .lbl {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .heroCard {
            position: relative;
            height: 320px;
            border-radius: var(--radius-xl);
            overflow: hidden;
            border: 1px solid var(--color-border-subtle);
            background: var(--color-surface);
            box-shadow: var(--shadow-soft);
        }

        .heroCard img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transform: scale(1.02);
        }

        .shade {
            position: absolute;
            inset: 0;
            background: radial-gradient(
                    circle at top left,
                    rgba(0, 0, 0, 0.25),
                    transparent 60%
                ),
                linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
        }

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ===================== FEATURE GRID ===================== */
    FeatureGrid: styled.div`
        margin-top: var(--space-sm);
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;

        .fCard {
            display: flex;
            gap: 12px;
            padding: 14px;
            border-radius: var(--radius-lg);
            background: var(--color-surface-soft);
            border: 1px solid var(--color-border-subtle);
            box-shadow: var(--shadow-subtle);
        }

        .ico {
            width: 42px;
            height: 42px;
            display: grid;
            place-items: center;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border-subtle);
            color: var(--color-heading);
            flex: 0 0 auto;
        }

        h3 {
            margin: 0 0 4px;
            font-size: 15px;
        }

        p {
            margin: 0;
            font-size: 14px;
            color: var(--color-text);
            line-height: 1.6;
        }

        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ===================== STACK GRID ===================== */
    StackGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;

        .stackItem {
            padding: 14px;
            border-radius: var(--radius-lg);
            background: var(--color-surface-soft);
            border: 1px solid var(--color-border-subtle);
            box-shadow: var(--shadow-subtle);
            display: grid;
            gap: 8px;
        }

        h4 {
            margin: 0;
            color: var(--color-heading);
            font-size: 15px;
        }

        ul {
            margin: 0;
            padding-left: 18px;
            display: grid;
            gap: 6px;
            color: var(--color-text);
            font-size: 14px;
        }

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
        }
    `,

    /* ===================== PROFILE ===================== */
    ProfileCard: styled.div`
        display: flex;
        gap: var(--space-lg);
        padding: var(--space-lg);
        border-radius: var(--radius-xl);
        border: 1px solid var(--color-border-subtle);
        background: var(--color-bg-elevated);
        box-shadow: var(--shadow-soft);

        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 20px;
            object-fit: cover;
            border: 1px solid var(--color-border-subtle);
            box-shadow: var(--shadow-subtle);
        }

        .info {
            display: grid;
            gap: var(--space-sm);
        }

        .name {
            margin: 0;
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--color-heading);
        }

        .role {
            margin: 0;
            color: var(--color-text-muted);
            font-size: 0.95rem;
        }

        .bio {
            line-height: 1.7;
            color: var(--color-text);
            max-width: 60ch;
        }

        .highlights {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 6px;
        }

        .hItem {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            background: var(--color-surface);
            border: 1px solid var(--color-border-subtle);
            color: var(--color-heading);
            box-shadow: var(--shadow-subtle);
        }

        .links {
            margin-top: var(--space-sm);
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .links a {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 14px;
            border-radius: var(--radius-md);
            border: 1px solid var(--color-border-subtle);
            background: var(--color-surface-soft);
            color: var(--color-heading);
            font-size: 0.9rem;
            text-decoration: none;
            transition: background var(--transition-med),
                transform var(--transition-fast);

            &:hover {
                background: var(--color-hover-surface);
                transform: translateY(-2px);
            }
        }

        .note {
            margin-top: 6px;
            font-size: 12px;
        }

        @media (max-width: 720px) {
            flex-direction: column;
            align-items: center;
            text-align: center;

            .bio {
                max-width: 100%;
            }
        }
    `,
};
