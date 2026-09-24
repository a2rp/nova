import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        padding: 24px;
        color: var(--color-text-muted);
        background-color: var(--color-bg-elevated);
        border-top: 1px solid var(--color-border);
        font-size: 12px;

        .footerIntro,
        .footerGroups,
        .footerBottom {
            display: flex;
            align-items: center;
        }

        .footerIntro {
            gap: 10px;

            img {
                width: 34px;
                height: 34px;
                object-fit: contain;
                border-radius: 8px;
            }

            div {
                display: grid;
                gap: 2px;
            }

            strong {
                color: var(--color-heading);
            }

            span {
                color: var(--color-text-muted);
            }
        }

        .footerText {
            max-width: 620px;
            margin: 16px 0;
            line-height: 1.6;
        }

        .footerGroups {
            flex-wrap: wrap;
            gap: 28px;
        }

        .footerGroups > div {
            display: grid;
            gap: 8px;
        }

        .footerGroups > div > span {
            color: var(--color-heading);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: .08em;
        }

        .iconLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .iconLinks a {
            display: grid;
            width: 34px;
            height: 34px;
            place-items: center;
            color: var(--color-text-muted);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            transition: color .18s ease, border-color .18s ease, text-shadow .18s ease, box-shadow .18s ease;
        }

        .iconLinks a:hover {
            color: var(--color-heading);
            border-color: var(--color-heading);
            text-shadow: 0 0 10px rgba(255, 255, 255, .25);
            box-shadow: 0 0 14px rgba(255, 255, 255, .08);
        }

        .footerBottom {
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 18px;
            padding-top: 14px;
            border-top: 1px solid var(--color-border);
        }

        .footerBottom a {
            color: var(--color-text);
            transition: color .18s ease, text-shadow .18s ease;
        }

        .footerBottom a:hover {
            color: var(--color-heading);
            text-shadow: 0 0 10px rgba(255, 255, 255, .25);
        }

        @media (max-width: 768px) {
            padding: 20px 16px;
        }
    `,
};