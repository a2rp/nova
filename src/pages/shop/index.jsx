// src/pages/shop/index.jsx
import React, { useCallback, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Styled } from "./styled";

import {
    FiShoppingBag,
    FiSearch,
    FiSliders,
    FiChevronRight,
    FiTag,
    FiTrendingUp,
    FiGrid,
    FiList,
    FiRefreshCw,
    FiStar,
    FiTruck,
    FiClock,
    FiHeart,
    FiBox,
    FiArrowRight,
    FiArrowUpRight,
    FiShield,
} from "react-icons/fi";

const heroImgMain =
    "https://images.unsplash.com/photo-1526481280695-3c687fd543c0?q=80&w=1600&auto=format&fit=crop";
const heroImgSide1 =
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";
const heroImgSide2 =
    "https://images.unsplash.com/photo-1528701800489-20be3c30c1d5?q=80&w=1200&auto=format&fit=crop";

const fallbackImg =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop";

const Shop = () => {
    const navigate = useNavigate();

    const onImgError = useCallback(e => {
        e.currentTarget.src = fallbackImg;
    }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeTag, setActiveTag] = useState("all");
    const [onlyInStock, setOnlyInStock] = useState(false);
    const [priceCap, setPriceCap] = useState(50000);
    const [sortKey, setSortKey] = useState("featured");
    const [viewMode, setViewMode] = useState("grid");
    const [page, setPage] = useState(1);
    const pageSize = 8;

    const products = useMemo(
        () => [
            {
                id: "desk-set-01",
                name: "Focused Desk Setup",
                description:
                    "Curated bundle with monitor, lamp, and storage to clear visual noise.",
                price: 28999,
                category: "workspace",
                rating: 4.8,
                reviews: 214,
                isNew: true,
                isBestSeller: true,
                inStock: true,
                tags: ["bundle", "minimal", "desk"],
                image:
                    "https://images.unsplash.com/photo-1522202195461-41a2f41ee0c3?q=80&w=1200&auto=format&fit=crop",
                eta: "2–3 days",
            },
            {
                id: "chair-01",
                name: "Ergonomic Task Chair",
                description:
                    "Lumbar support, quiet casters, and neutral fabric for long sessions.",
                price: 19999,
                category: "workspace",
                rating: 4.6,
                reviews: 137,
                isNew: false,
                isBestSeller: true,
                inStock: true,
                tags: ["chair", "ergonomic"],
                image:
                    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
                eta: "3–5 days",
            },
            {
                id: "lamp-01",
                name: "Low-Glare Desk Lamp",
                description:
                    "Adjustable colour temperature with a footprint that disappears.",
                price: 5999,
                category: "lighting",
                rating: 4.5,
                reviews: 92,
                isNew: false,
                isBestSeller: false,
                inStock: true,
                tags: ["lamp", "lighting"],
                image:
                    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
                eta: "2–4 days",
            },
            {
                id: "shelf-01",
                name: "Floating Wall Shelf",
                description:
                    "Hide clutter in plain sight with a weight-balanced shelf system.",
                price: 4499,
                category: "storage",
                rating: 4.3,
                reviews: 61,
                isNew: true,
                isBestSeller: false,
                inStock: true,
                tags: ["storage", "wall"],
                image:
                    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
                eta: "4–6 days",
            },
            {
                id: "sofa-01",
                name: "Soft-Edge Sofa",
                description:
                    "For rooms that double as meeting spaces and recovery zones.",
                price: 34999,
                category: "home",
                rating: 4.7,
                reviews: 89,
                isNew: false,
                isBestSeller: true,
                inStock: false,
                tags: ["home", "lounge"],
                image:
                    "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1200&auto=format&fit=crop",
                eta: "Back in stock soon",
            },
            {
                id: "speaker-01",
                name: "Desk Speaker Pair",
                description:
                    "Nearfield audio tuned for low-volume clarity at the desk.",
                price: 12999,
                category: "audio",
                rating: 4.4,
                reviews: 121,
                isNew: true,
                isBestSeller: false,
                inStock: true,
                tags: ["audio", "desk"],
                image:
                    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
                eta: "2–3 days",
            },
            {
                id: "headphones-01",
                name: "Focus Headphones",
                description:
                    "Noise-cancelling with neutral sound profile for long sessions.",
                price: 17999,
                category: "audio",
                rating: 4.9,
                reviews: 402,
                isNew: false,
                isBestSeller: true,
                inStock: true,
                tags: ["audio", "wireless"],
                image:
                    "https://images.unsplash.com/photo-1545235617-9465c4b8baad?q=80&w=1200&auto=format&fit=crop",
                eta: "Next-day delivery",
            },
            {
                id: "rug-01",
                name: "Acoustic Area Rug",
                description:
                    "Softens reverb and visually anchors a workspace in one move.",
                price: 6999,
                category: "home",
                rating: 4.2,
                reviews: 47,
                isNew: true,
                isBestSeller: false,
                inStock: true,
                tags: ["home", "acoustic"],
                image:
                    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1200&auto=format&fit=crop",
                eta: "4–7 days",
            },
            {
                id: "shelf-02",
                name: "Under-Desk Cable Shelf",
                description:
                    "Route power and data without the visible cluster of cables.",
                price: 2999,
                category: "storage",
                rating: 4.1,
                reviews: 58,
                isNew: false,
                isBestSeller: false,
                inStock: true,
                tags: ["storage", "cable"],
                image:
                    "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1200&auto=format&fit=crop",
                eta: "3–5 days",
            },
            {
                id: "monitor-01",
                name: "27\" QHD Monitor",
                description:
                    "Pixel density tuned for long reading and layout work.",
                price: 25999,
                category: "workspace",
                rating: 4.5,
                reviews: 176,
                isNew: true,
                isBestSeller: false,
                inStock: true,
                tags: ["monitor", "display"],
                image:
                    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop",
                eta: "2–3 days",
            },
            {
                id: "lightstrip-01",
                name: "Indirect Light Strip",
                description:
                    "Soft wall wash for after-hours work without harsh contrast.",
                price: 3999,
                category: "lighting",
                rating: 4.3,
                reviews: 73,
                isNew: false,
                isBestSeller: false,
                inStock: true,
                tags: ["lighting", "ambient"],
                image:
                    "https://images.unsplash.com/photo-1587613864521-9ef8f6f9c3f0?q=80&w=1200&auto=format&fit=crop",
                eta: "3–5 days",
            },
            {
                id: "stand-01",
                name: "Laptop Riser",
                description:
                    "Brings your laptop into your sightline without stealing space.",
                price: 2499,
                category: "workspace",
                rating: 4.4,
                reviews: 133,
                isNew: false,
                isBestSeller: true,
                inStock: true,
                tags: ["stand", "laptop"],
                image:
                    "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1200&auto=format&fit=crop",
                eta: "2–4 days",
            },
            {
                id: "organiser-01",
                name: "Desk Drawer Organiser",
                description:
                    "Keeps tiny items sorted so your main surface can stay empty.",
                price: 1799,
                category: "storage",
                rating: 4.0,
                reviews: 39,
                isNew: true,
                isBestSeller: false,
                inStock: true,
                tags: ["storage", "drawer"],
                image:
                    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
                eta: "4–6 days",
            },
        ],
        []
    );

    const categories = [
        { id: "all", label: "All categories" },
        { id: "workspace", label: "Workspace" },
        { id: "lighting", label: "Lighting" },
        { id: "storage", label: "Storage" },
        { id: "home", label: "Home" },
        { id: "audio", label: "Audio" },
    ];

    const tags = [
        { id: "all", label: "Any tag" },
        { id: "bundle", label: "Bundles" },
        { id: "minimal", label: "Minimal" },
        { id: "desk", label: "Desk" },
        { id: "home", label: "Home" },
        { id: "audio", label: "Audio" },
        { id: "lighting", label: "Lighting" },
        { id: "storage", label: "Storage" },
    ];

    const filteredProducts = useMemo(() => {
        let result = products;

        if (searchTerm.trim()) {
            const q = searchTerm.toLowerCase();
            result = result.filter(
                p =>
                    p.name.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q)
            );
        }

        if (activeCategory !== "all") {
            result = result.filter(p => p.category === activeCategory);
        }

        if (activeTag !== "all") {
            result = result.filter(p => p.tags.includes(activeTag));
        }

        if (onlyInStock) {
            result = result.filter(p => p.inStock);
        }

        result = result.filter(p => p.price <= priceCap);

        if (sortKey === "price-asc") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sortKey === "price-desc") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sortKey === "rating") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        } else if (sortKey === "newest") {
            result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        } else {
            // featured: keep base order but float best-sellers + new
            result = [...result].sort((a, b) => {
                const scoreA = (a.isBestSeller ? 2 : 0) + (a.isNew ? 1 : 0);
                const scoreB = (b.isBestSeller ? 2 : 0) + (b.isNew ? 1 : 0);
                return scoreB - scoreA;
            });
        }

        return result;
    }, [products, searchTerm, activeCategory, activeTag, onlyInStock, priceCap, sortKey]);

    const total = filteredProducts.length;
    const pageCount = Math.max(1, Math.ceil(total / pageSize));

    const pagedProducts = useMemo(() => {
        const start = (page - 1) * pageSize;
        return filteredProducts.slice(start, start + pageSize);
    }, [filteredProducts, page, pageSize]);

    const handleResetFilters = () => {
        setSearchTerm("");
        setActiveCategory("all");
        setActiveTag("all");
        setOnlyInStock(false);
        setPriceCap(50000);
        setSortKey("featured");
        setPage(1);
    };

    const handleCategoryClick = catId => {
        setActiveCategory(catId);
        setPage(1);
    };

    const handleTagClick = tagId => {
        setActiveTag(tagId);
        setPage(1);
    };

    const handlePageChange = newPage => {
        if (newPage < 1 || newPage > pageCount) return;
        setPage(newPage);
    };

    const handleProductClick = id => {
        navigate(`/product/${id}`);
    };

    const handleCategoryRoute = id => {
        if (id === "all") {
            navigate("/shop");
        } else {
            navigate(`/shop/category/${id}`);
        }
    };

    const formatPrice = price =>
        `₹${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

    return (
        <Styled.Wrap>
            {/* HERO */}
            <Styled.Hero>
                <Styled.HeroCopy>
                    <motion.div
                        className="eyebrow"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                    >
                        <FiShoppingBag />
                        <span>Curated catalog</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.05 }}
                    >
                        <h1>Calm, configurable shopping surface.</h1>
                        <p className="subtitle">
                            Browse a catalog built like a workspace — with search,
                            filters, and sorting that stay out of your way.
                        </p>
                    </motion.div>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.12 }}
                    >
                        <motion.button
                            className="btn-primary"
                            whileHover={{ scale: 1.03, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setActiveCategory("workspace");
                                setPage(1);
                            }}
                        >
                            <FiGrid />
                            See workspace gear
                            <FiArrowRight />
                        </motion.button>

                        <motion.button
                            className="btn-ghost"
                            whileHover={{ scale: 1.02, y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                setSortKey("price-asc");
                                setPage(1);
                            }}
                        >
                            <FiTrendingUp />
                            Sort by lowest price
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className="meta-row"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <div className="item">
                            <FiTruck />
                            <span>Fast shipping on most workspace items.</span>
                        </div>
                        <div className="item">
                            <FiShield />
                            <span>Secure checkout, encrypted at rest.</span>
                        </div>
                        <div className="item">
                            <FiClock />
                            <span>Filters stay responsive while you browse.</span>
                        </div>
                    </motion.div>
                </Styled.HeroCopy>

                <Styled.HeroMedia>
                    <div className="image-grid">
                        <div className="slot">
                            <img src={heroImgMain} alt="Shop hero main" onError={onImgError} />
                            <div className="overlay-tag">
                                <FiStar />
                                <span>Designed for focus</span>
                            </div>
                        </div>
                        <div className="slot">
                            <img src={heroImgSide1} alt="Desk detail" onError={onImgError} />
                        </div>
                        <div className="slot">
                            <img src={heroImgSide2} alt="Home detail" onError={onImgError} />
                        </div>
                    </div>
                </Styled.HeroMedia>
            </Styled.Hero>

            {/* BREADCRUMBS */}
            <Styled.BreadcrumbBar aria-label="Breadcrumbs">
                <Link to="/home">
                    <FiGrid />
                    <span>Home</span>
                </Link>
                <span className="separator">
                    <FiChevronRight />
                </span>
                <span className="current">Shop</span>
            </Styled.BreadcrumbBar>

            {/* CONTROLS */}
            <Styled.ControlsBar>
                <div className="left">
                    <div className="search-wrap">
                        <FiSearch />
                        <input
                            type="text"
                            placeholder="Search products, bundles, or use-cases…"
                            value={searchTerm}
                            onChange={e => {
                                setSearchTerm(e.target.value);
                                setPage(1);
                            }}
                        />
                    </div>

                    <div className="pill-toggle" aria-label="View mode">
                        <button
                            type="button"
                            className={
                                "pill-item" + (viewMode === "grid" ? " pill-item--active" : "")
                            }
                            onClick={() => setViewMode("grid")}
                        >
                            <FiGrid />
                            Grid
                        </button>
                        <button
                            type="button"
                            className={
                                "pill-item" + (viewMode === "list" ? " pill-item--active" : "")
                            }
                            onClick={() => setViewMode("list")}
                        >
                            <FiList />
                            List
                        </button>
                    </div>
                </div>

                <div className="right">
                    <div className="sort-select">
                        <FiSliders />
                        <span>Sort by</span>
                        <select
                            value={sortKey}
                            onChange={e => {
                                setSortKey(e.target.value);
                                setPage(1);
                            }}
                        >
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price: Low to high</option>
                            <option value="price-desc">Price: High to low</option>
                            <option value="rating">Rating</option>
                            <option value="newest">New this week</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        className="pill-item"
                        onClick={handleResetFilters}
                    >
                        <FiRefreshCw />
                        Reset view
                    </button>

                    <div className="result-meta">
                        {total} item{total === 1 ? "" : "s"} • Page {page} of {pageCount}
                    </div>
                </div>
            </Styled.ControlsBar>

            {/* LAYOUT: FILTERS + PRODUCTS */}
            <Styled.Layout>
                <Styled.FilterPanel
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <Styled.FilterGroup>
                        <div className="label-row">
                            <span>Category</span>
                            <button
                                type="button"
                                className="small-link"
                                onClick={() => handleCategoryRoute(activeCategory)}
                            >
                                <FiArrowUpRight />
                                Jump to view
                            </button>
                        </div>
                        <div className="chips">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    type="button"
                                    className={
                                        "chip" +
                                        (activeCategory === cat.id ? " chip--active" : "")
                                    }
                                    onClick={() => handleCategoryClick(cat.id)}
                                >
                                    <FiBox />
                                    <span>{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </Styled.FilterGroup>

                    <Styled.FilterGroup>
                        <div className="label-row">
                            <span>Tag</span>
                            <span>{activeTag === "all" ? "Any" : activeTag}</span>
                        </div>
                        <div className="chips">
                            {tags.map(tag => (
                                <button
                                    key={tag.id}
                                    type="button"
                                    className={
                                        "chip" + (activeTag === tag.id ? " chip--active" : "")
                                    }
                                    onClick={() => handleTagClick(tag.id)}
                                >
                                    <FiTag />
                                    <span>{tag.label}</span>
                                </button>
                            ))}
                        </div>
                    </Styled.FilterGroup>

                    <Styled.FilterGroup>
                        <div className="label-row">
                            <span>Price cap</span>
                            <span>Up to {formatPrice(priceCap)}</span>
                        </div>
                        <div className="range">
                            <input
                                type="range"
                                min={1500}
                                max={50000}
                                step={500}
                                value={priceCap}
                                onChange={e => {
                                    setPriceCap(Number(e.target.value));
                                    setPage(1);
                                }}
                            />
                            <span>Drag to tune max budget for this view.</span>
                        </div>
                    </Styled.FilterGroup>

                    <Styled.FilterGroup>
                        <div className="label-row">
                            <span>Availability</span>
                        </div>
                        <div className="toggle-row">
                            <span>Show only items currently in stock</span>
                            <button
                                type="button"
                                className={
                                    "toggle" + (onlyInStock ? " toggle--on" : "")
                                }
                                onClick={() => {
                                    setOnlyInStock(prev => !prev);
                                    setPage(1);
                                }}
                            >
                                <span className="toggle-thumb" />
                            </button>
                        </div>
                    </Styled.FilterGroup>

                    <Styled.FilterGroup>
                        <div className="label-row">
                            <span>Shortcuts</span>
                        </div>
                        <button
                            type="button"
                            className="small-link"
                            onClick={() => {
                                setActiveCategory("workspace");
                                setOnlyInStock(true);
                                setSortKey("rating");
                                setPage(1);
                            }}
                        >
                            <FiArrowRight />
                            Focused workspace view
                        </button>
                        <button
                            type="button"
                            className="small-link"
                            onClick={() => {
                                setActiveCategory("audio");
                                setSortKey("price-desc");
                                setPage(1);
                            }}
                        >
                            <FiArrowRight />
                            Premium audio first
                        </button>
                    </Styled.FilterGroup>
                </Styled.FilterPanel>

                <Styled.ProductArea>
                    <Styled.ProductSummaryRow>
                        <span>
                            Showing{" "}
                            <strong>
                                {pagedProducts.length} of {total}
                            </strong>{" "}
                            items
                        </span>
                        <span>
                            This is a frontend-only preview – actions such as “Add to
                            cart” navigate to the relevant surfaces.
                        </span>
                    </Styled.ProductSummaryRow>

                    {viewMode === "grid" ? (
                        <Styled.ProductGrid>
                            {pagedProducts.map(product => (
                                <Styled.ProductCard
                                    key={product.id}
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    <div className="image-wrap">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            onError={onImgError}
                                        />
                                        <div className="badge-row">
                                            {product.isNew && (
                                                <span className="badge">
                                                    <FiClock />
                                                    <span>New</span>
                                                </span>
                                            )}
                                            {product.isBestSeller && (
                                                <span className="badge">
                                                    <FiTrendingUp />
                                                    <span>Best seller</span>
                                                </span>
                                            )}
                                        </div>
                                        <div className="rating">
                                            <FiStar />
                                            <span>{product.rating.toFixed(1)}</span>
                                            <span>·</span>
                                            <span>{product.reviews}</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="title-row">
                                            <div className="title">{product.name}</div>
                                            <div className="price">
                                                {formatPrice(product.price)}
                                            </div>
                                        </div>
                                        <div className="meta-row">
                                            <span>{product.eta}</span>
                                            <span>
                                                {product.inStock ? "In stock" : "Out of stock"}
                                            </span>
                                        </div>
                                        <div className="tags">
                                            {product.tags.map(tag => (
                                                <span key={tag} className="tag-pill">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="actions">
                                            <button
                                                type="button"
                                                className="btn-inline btn-inline--primary"
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    navigate(`/cart`);
                                                }}
                                            >
                                                <FiShoppingBag />
                                                Add to cart (demo)
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-inline"
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    navigate(`/account/wishlist`);
                                                }}
                                            >
                                                <FiHeart />
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Styled.ProductCard>
                            ))}
                        </Styled.ProductGrid>
                    ) : (
                        <Styled.ProductList>
                            {pagedProducts.map(product => (
                                <Styled.ProductRow
                                    key={product.id}
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    <div className="image-wrap">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            onError={onImgError}
                                        />
                                        <div className="badge-row">
                                            {product.isNew && (
                                                <span className="badge">
                                                    <FiClock />
                                                    <span>New</span>
                                                </span>
                                            )}
                                            {product.isBestSeller && (
                                                <span className="badge">
                                                    <FiTrendingUp />
                                                    <span>Best seller</span>
                                                </span>
                                            )}
                                        </div>
                                        <div className="rating">
                                            <FiStar />
                                            <span>{product.rating.toFixed(1)}</span>
                                            <span>·</span>
                                            <span>{product.reviews}</span>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="title-row">
                                            <div className="title">{product.name}</div>
                                            <div className="price">
                                                {formatPrice(product.price)}
                                            </div>
                                        </div>
                                        <p className="description">
                                            {product.description}
                                        </p>
                                        <div className="meta-row">
                                            <span>{product.eta}</span>
                                            <span>
                                                {product.inStock ? "In stock" : "Out of stock"}
                                            </span>
                                        </div>
                                        <div className="meta-row">
                                            <div className="tags">
                                                {product.tags.map(tag => (
                                                    <span key={tag} className="tag-pill">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="actions">
                                            <button
                                                type="button"
                                                className="btn-inline btn-inline--primary"
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    navigate(`/cart`);
                                                }}
                                            >
                                                <FiShoppingBag />
                                                Add to cart (demo)
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-inline"
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    navigate(`/product/${product.id}`);
                                                }}
                                            >
                                                <FiArrowUpRight />
                                                View details
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-inline"
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    navigate(`/account/wishlist`);
                                                }}
                                            >
                                                <FiHeart />
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Styled.ProductRow>
                            ))}
                        </Styled.ProductList>
                    )}

                    {/* PAGINATION */}
                    <Styled.PaginationRow>
                        <button
                            type="button"
                            onClick={() => handlePageChange(page - 1)}
                            disabled={page === 1}
                        >
                            ‹
                        </button>
                        {Array.from({ length: pageCount }).map((_, idx) => {
                            const pageNum = idx + 1;
                            return (
                                <button
                                    key={pageNum}
                                    type="button"
                                    className={pageNum === page ? "page--active" : ""}
                                    onClick={() => handlePageChange(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                        <button
                            type="button"
                            onClick={() => handlePageChange(page + 1)}
                            disabled={page === pageCount}
                        >
                            ›
                        </button>
                    </Styled.PaginationRow>
                </Styled.ProductArea>
            </Styled.Layout>
        </Styled.Wrap>
    );
};

export default Shop;
