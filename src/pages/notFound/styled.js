import styled from "styled-components";

export const Styled = {
    Wrap: styled.section`
        width: 100%;
        min-height: calc(100vh - var(--site-header-h, 64px));
        display: grid;
        place-items: center;
        padding-top: calc(var(--site-header-h, 64px) + var(--space-xl));
        padding-bottom: var(--space-2xl);
    `,

    Card: styled.div`
        width: 100%;
        max-width: 720px;
        display: grid;
        gap: var(--space-md);
        text-align: center;
        position: relative;

        .iconShell {
            width: 96px;
            height: 96px;
            margin: 0 auto var(--space-sm);
            display: grid;
            place-items: center;
            border-radius: 999px;
            background: var(--color-surface-soft);
            border: 1px solid var(--color-border-subtle);
            box-shadow: var(--shadow-subtle);
            color: var(--color-heading);
        }

        h1 {
            font-size: clamp(1.8rem, 3vw, 2.4rem);
            margin-bottom: 0;
        }

        .pathBox {
            margin: 0 auto;
            width: 100%;
            max-width: 520px;
            background: var(--color-bg-elevated);
            border: 1px dashed var(--color-border-subtle);
            border-radius: var(--radius-lg);
            padding: 12px 14px;
            display: grid;
            gap: 6px;
            text-align: left;
        }

        .pathLabel {
            font-size: 12px;
            color: var(--color-text-muted);
            letter-spacing: 0.4px;
            text-transform: uppercase;
        }

        .path {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 14px;
            color: var(--color-heading);
            word-break: break-all;
        }

        .actions {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: var(--space-sm);

            .btn-primary,
            .btn-ghost {
                height: 44px;
            }
        }

        .divider {
            height: 1px;
            width: 100%;
            margin: var(--space-sm) 0;
            background: var(--color-border-subtle);
            opacity: 0.8;
        }

        .suggestions {
            display: grid;
            gap: 10px;
            text-align: left;
        }

        .suggestTitle {
            font-weight: 700;
            color: var(--color-heading);
            font-size: 14px;
            letter-spacing: 0.2px;
        }

        .suggestGrid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px;
        }

        .suggestCard {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px;
            border-radius: var(--radius-lg);
            background: var(--color-surface);
            border: 1px solid var(--color-border-subtle);
            box-shadow: var(--shadow-subtle);
            text-decoration: none;
            color: var(--color-text);
            transition: background var(--transition-med),
                border-color var(--transition-med),
                transform var(--transition-med);

            &:hover {
                background: var(--color-hover-surface);
                border-color: var(--color-border-strong);
                transform: translateY(-2px);
            }
        }

        .sIcon {
            width: 36px;
            height: 36px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--color-surface-soft);
            border: 1px solid var(--color-border-subtle);
            color: var(--color-heading);
            flex: 0 0 auto;
        }

        .sBody {
            display: grid;
            gap: 2px;
        }

        .sLabel {
            font-weight: 700;
            font-size: 14px;
            color: var(--color-heading);
        }

        .sDesc {
            font-size: 12px;
        }

        @media (max-width: 720px) {
            .suggestGrid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
