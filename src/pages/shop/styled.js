// src/pages/shop/styled.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const Styled = {
    Wrap: styled.div`
        width: 100%;
        max-width: var(--max-width-content);
        margin: 0 auto;
        padding: var(--space-xl) var(--space-lg);
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);

        @media (max-width: 768px) {
            padding: var(--space-lg) var(--space-md);
        }
    `,

    Hero: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
        gap: var(--space-lg);
        align-items: center;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    HeroCopy: styled.div`
        display: flex;
        flex-direction: column;
        gap: var(--space-md);

        .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border-subtle);
            background: rgba(255, 255, 255, 0.03);
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.09em;
            color: var(--color-text-muted);
        }

        h1 {
            margin-bottom: var(--space-xs);
        }

        .subtitle {
            max-width: 540px;
            color: var(--color-text);
        }

        .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: var(--space-sm);
        }

        .meta-row {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-lg);
            margin-top: var(--space-sm);
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);

            .item {
                display: flex;
                align-items: center;
                gap: 6px;
            }
        }
    `,

    HeroMedia: styled.div`
        position: relative;
        width: 100%;
        min-height: 260px;
        border-radius: var(--radius-xl);
        overflow: hidden;
        background: radial-gradient(circle at top, #1b1b28, #050509 70%);
        border: 1px solid var(--color-border-subtle);
        box-shadow: var(--shadow-soft);

        .image-grid {
            position: relative;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: 2fr 1.4fr;
            grid-template-rows: 1fr 1fr;
            gap: 4px;
            padding: 4px;
        }

        .slot {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            background: var(--color-surface-soft);
        }

        .slot:nth-child(1) {
            grid-row: span 2;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease, filter 0.4s ease;
        }

        .overlay-tag {
            position: absolute;
            left: 10px;
            bottom: 10px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 10px;
            border-radius: 999px;
            background: var(--media-pill-bg);
            color: var(--media-text);
            font-size: var(--font-size-xs);
        }

        &:hover img {
            transform: scale(1.03);
            filter: saturate(1.08);
        }
    `,

    BreadcrumbBar: styled.nav`
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);

        a {
            display: inline-flex;
            align-items: center;
            gap: 4px;
        }

        .separator {
            opacity: 0.7;
        }

        .current {
            color: var(--color-text);
        }
    `,

    ControlsBar: styled.section`
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
        align-items: center;
        justify-content: space-between;

        .left,
        .right {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-sm);
            align-items: center;
        }

        .search-wrap {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 10px;
            border-radius: var(--radius-md);
            background: var(--color-surface);
            border: 1px solid var(--color-border-subtle);
            min-width: 260px;

            input {
                border: none;
                outline: none;
                background: transparent;
                color: var(--color-text);
                font-size: var(--font-size-sm);
                width: 100%;
            }

            svg {
                opacity: 0.8;
            }
        }

        .pill-toggle {
            display: inline-flex;
            border-radius: var(--radius-sm);
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--color-border-subtle);
            overflow: hidden;
        }

        .pill-item {
            padding: 6px 12px;
            font-size: var(--font-size-xs);
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
            color: var(--color-text-muted);
            transition: background-color var(--transition-fast),
                color var(--transition-fast);
        }

        .pill-item--active {
            background: var(--color-surface-soft);
            color: var(--color-text);
        }

        .sort-select {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);

            select {
                font-size: var(--font-size-xs);
                padding: 4px 10px;
            }
        }

        .result-meta {
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);
        }
    `,

    Layout: styled.section`
        display: grid;
        grid-template-columns: 260px minmax(0, 1fr);
        gap: var(--space-lg);
        align-items: flex-start;

        @media (max-width: 960px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    FilterPanel: styled(motion.aside)`
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border-subtle);
        background: var(--color-surface);
        padding: var(--space-md);
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
        box-shadow: var(--shadow-soft);
    `,

    FilterGroup: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        .label-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 6px;
            font-size: var(--font-size-xs);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--color-text-muted);
        }

        .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .chip {
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border-subtle);
            background: var(--color-surface-soft);
            font-size: var(--font-size-xs);
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: background-color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);

            svg {
                font-size: 0.8rem;
                opacity: 0.9;
            }
        }

        .chip--active {
            background: var(--color-accent);
            color: var(--color-text-invert);
            border-color: var(--color-accent-border);
            transform: translateY(-1px);
        }

        .range {
            display: flex;
            flex-direction: column;
            gap: 4px;
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);

            input[type="range"] {
                width: 100%;
            }
        }

        .toggle-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 8px;
            font-size: var(--font-size-xs);
            color: var(--color-text);
        }

        .toggle {
            width: 32px;
            height: 18px;
            border-radius: 999px;
            border: 1px solid var(--color-border-subtle);
            background: rgba(255, 255, 255, 0.03);
            display: inline-flex;
            align-items: center;
            padding: 2px;
            cursor: pointer;
        }

        .toggle-thumb {
            width: 14px;
            height: 14px;
            border-radius: 999px;
            background: var(--color-accent);
            transform: translateX(0);
            transition: transform var(--transition-fast);
        }

        .toggle--on .toggle-thumb {
            transform: translateX(12px);
        }

        .small-link {
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);
            display: inline-flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
        }
    `,

    ProductArea: styled.section`
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    `,

    ProductSummaryRow: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: var(--font-size-xs);
        color: var(--color-text-muted);
        flex-wrap: wrap;
        gap: var(--space-sm);
    `,

    ProductGrid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-sm);
    `,

    ProductList: styled.div`
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    `,

    ProductCard: styled(motion.article)`
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border-subtle);
        background: var(--color-surface);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        min-height: 260px;
        cursor: pointer;
        transition: border-color var(--transition-med),
            box-shadow var(--transition-med), transform var(--transition-med);

        &:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-soft);
            transform: translateY(-2px);
        }

        .image-wrap {
            position: relative;
            width: 100%;
            height: 160px;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease, filter 0.4s ease;
        }

        .badge-row {
            position: absolute;
            top: 8px;
            left: 8px;
            display: flex;
            gap: 6px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--media-pill-bg);
            color: var(--media-text);
            font-size: var(--font-size-xs);
        }

        .rating {
            position: absolute;
            right: 8px;
            bottom: 8px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--media-pill-bg);
            color: var(--media-text);
            font-size: var(--font-size-xs);
        }

        .body {
            padding: var(--space-sm);
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
        }

        .title {
            font-size: var(--font-size-sm);
            color: var(--color-heading);
        }

        .price {
            font-size: var(--font-size-sm);
            font-weight: 500;
            color: var(--color-heading);
        }

        .meta-row {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .tag-pill {
            padding: 2px 8px;
            border-radius: 999px;
            background: var(--color-surface-soft);
        }

        .actions {
            margin-top: 6px;
            display: flex;
            justify-content: space-between;
            gap: 6px;
        }

        .btn-inline {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 6px 8px;
            border-radius: var(--radius-sm);
            font-size: var(--font-size-xs);
            border: 1px solid var(--color-border-subtle);
            background: var(--color-surface-soft);
            cursor: pointer;
            transition: background-color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .btn-inline--primary {
            background: var(--color-accent);
            color: var(--color-text-invert);
            border-color: var(--color-accent-border);
        }

        .btn-inline:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-strong);
        }

        &:hover img {
            transform: scale(1.05);
            filter: saturate(1.1);
        }
    `,

    ProductRow: styled(motion.article)`
        border-radius: var(--radius-lg);
        border: 1px solid var(--color-border-subtle);
        background: var(--color-surface);
        overflow: hidden;
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        min-height: 200px;
        cursor: pointer;
        transition: border-color var(--transition-med),
            box-shadow var(--transition-med), transform var(--transition-med);

        @media (max-width: 720px) {
            grid-template-columns: minmax(0, 1fr);
        }

        &:hover {
            border-color: var(--color-border-strong);
            box-shadow: var(--shadow-soft);
            transform: translateY(-2px);
        }

        .image-wrap {
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 180px;
            overflow: hidden;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease, filter 0.4s ease;
        }

        .badge-row {
            position: absolute;
            top: 8px;
            left: 8px;
            display: flex;
            gap: 6px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--media-pill-bg);
            color: var(--media-text);
            font-size: var(--font-size-xs);
        }

        .rating {
            position: absolute;
            right: 8px;
            bottom: 8px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--media-pill-bg);
            color: var(--media-text);
            font-size: var(--font-size-xs);
        }

        .body {
            padding: var(--space-sm) var(--space-md);
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .title-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
        }

        .title {
            font-size: var(--font-size-sm);
            color: var(--color-heading);
        }

        .price {
            font-size: var(--font-size-sm);
            font-weight: 500;
            color: var(--color-heading);
        }

        .description {
            font-size: var(--font-size-xs);
            color: var(--color-text);
        }

        .meta-row {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            font-size: var(--font-size-xs);
            color: var(--color-text-muted);
            flex-wrap: wrap;
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .tag-pill {
            padding: 2px 8px;
            border-radius: 999px;
            background: var(--color-surface-soft);
        }

        .actions {
            margin-top: 6px;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .btn-inline {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 6px 10px;
            border-radius: var(--radius-sm);
            font-size: var(--font-size-xs);
            border: 1px solid var(--color-border-subtle);
            background: var(--color-surface-soft);
            cursor: pointer;
            transition: background-color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        .btn-inline--primary {
            background: var(--color-accent);
            color: var(--color-text-invert);
            border-color: var(--color-accent-border);
        }

        .btn-inline:hover {
            transform: translateY(-1px);
            border-color: var(--color-border-strong);
        }

        &:hover img {
            transform: scale(1.05);
            filter: saturate(1.1);
        }
    `,

    PaginationRow: styled.div`
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: var(--space-sm);

        button {
            min-width: 32px;
            height: 32px;
            border-radius: 999px;
            border: 1px solid var(--color-border-subtle);
            background: var(--color-surface);
            color: var(--color-text);
            font-size: var(--font-size-xs);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color var(--transition-fast),
                border-color var(--transition-fast),
                transform var(--transition-fast);
        }

        button:hover:not(:disabled) {
            background: var(--color-hover-surface);
            border-color: var(--color-border-strong);
            transform: translateY(-1px);
        }

        button:disabled {
            opacity: 0.4;
            cursor: default;
        }

        .page--active {
            background: var(--color-accent);
            color: var(--color-text-invert);
            border-color: var(--color-accent-border);
        }
    `,
};
