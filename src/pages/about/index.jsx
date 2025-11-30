import React from "react";
import { Styled } from "./styled";
import {
    TbSparkles,
    TbBrandGithub,
    TbBrandLinkedin,
    TbBrandFacebook,
    TbExternalLink,
    TbMail,
    TbRocket,
    TbShieldCheck,
    TbShoppingCart,
    TbSearch,
    TbPackage,
    TbCreditCard,
    TbDeviceDesktopAnalytics,
    TbUsers,
    TbCode,
    TbHeartHandshake,
} from "react-icons/tb";

export default function About() {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrap className="app-max-width app-padding">
            {/* ===================== HERO ===================== */}
            <Styled.Hero className="surface-card">
                <div className="heroLeft">
                    <div className="miniTag">
                        <TbSparkles size={16} />
                        MERN E-Commerce Platform
                    </div>

                    <h1>Designed for real-world scale, built with clean MERN.</h1>

                    <p className="sub">
                        A full-stack shopping platform with modern UX, secure auth,
                        payment readiness, and a backend that follows production
                        architecture from day one.
                    </p>

                    <div className="heroStats">
                        <div className="stat">
                            <div className="val">MERN</div>
                            <div className="lbl">Full Stack</div>
                        </div>
                        <div className="stat">
                            <div className="val">RBAC</div>
                            <div className="lbl">Secure Roles</div>
                        </div>
                        <div className="stat">
                            <div className="val">Scalable</div>
                            <div className="lbl">Clean Structure</div>
                        </div>
                    </div>
                </div>

                <div className="heroRight">
                    <div className="heroCard">
                        <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1400&auto=format&fit=crop"
                            alt="E-commerce hero"
                            loading="lazy"
                        />
                        <div className="shade" />
                    </div>
                </div>
            </Styled.Hero>

            {/* ===================== ABOUT PROJECT ===================== */}
            <section className="block surface-card">
                <div className="head">
                    <h2>About This Project</h2>
                    <div className="chip">
                        <TbRocket size={15} />
                        Production-First Build
                    </div>
                </div>

                <p className="text">
                    This project is a complete MERN E-commerce platform built to
                    match real industry standards. The main idea is to create a
                    store where users can browse products, filter and search,
                    add items to cart or wishlist, complete checkout, and track orders.
                    <br />
                    <br />
                    From the backend side, we are building a scalable architecture:
                    clean folder structure, reusable services, secure auth, role-based access,
                    and future-ready payment integration.
                    <br />
                    <br />
                    The UI follows a premium minimal theme with smooth interactions,
                    careful spacing, and a distraction-free design.
                </p>

                <Styled.FeatureGrid>
                    <div className="fCard">
                        <div className="ico"><TbSearch size={20} /></div>
                        <div className="body">
                            <h3>Smart Product Search</h3>
                            <p>
                                Fast search with filters, categories, and flexible sorting
                                for a smooth shopping experience.
                            </p>
                        </div>
                    </div>

                    <div className="fCard">
                        <div className="ico"><TbShoppingCart size={20} /></div>
                        <div className="body">
                            <h3>Cart + Wishlist Flow</h3>
                            <p>
                                Persistent cart, quick add/remove, quantity updates,
                                and wishlist saving.
                            </p>
                        </div>
                    </div>

                    <div className="fCard">
                        <div className="ico"><TbShieldCheck size={20} /></div>
                        <div className="body">
                            <h3>Secure Authentication</h3>
                            <p>
                                JWT/cookie based auth, protected routes,
                                and future admin tools.
                            </p>
                        </div>
                    </div>

                    <div className="fCard">
                        <div className="ico"><TbCreditCard size={20} /></div>
                        <div className="body">
                            <h3>Payment Ready</h3>
                            <p>
                                Built to support Stripe/Razorpay/COD with clean
                                checkout logic and order receipts.
                            </p>
                        </div>
                    </div>

                    <div className="fCard">
                        <div className="ico"><TbPackage size={20} /></div>
                        <div className="body">
                            <h3>Orders & Tracking</h3>
                            <p>
                                Users can see order history, delivery status, and
                                full purchase details.
                            </p>
                        </div>
                    </div>

                    <div className="fCard">
                        <div className="ico"><TbDeviceDesktopAnalytics size={20} /></div>
                        <div className="body">
                            <h3>Admin Dashboard (Soon)</h3>
                            <p>
                                Product CRUD, user management, order control,
                                sales analytics.
                            </p>
                        </div>
                    </div>
                </Styled.FeatureGrid>
            </section>

            {/* ===================== TECH STACK ===================== */}
            <section className="block surface-card">
                <div className="head">
                    <h2>Tech Stack</h2>
                    <div className="chip">
                        <TbCode size={15} />
                        Modern Tools
                    </div>
                </div>

                <Styled.StackGrid>
                    <div className="stackItem">
                        <h4>Frontend</h4>
                        <ul>
                            <li>React (Vite)</li>
                            <li>Styled-Components</li>
                            <li>React Router</li>
                            <li>Axios / Fetch</li>
                            <li>Theme tokens (dark/light)</li>
                        </ul>
                    </div>

                    <div className="stackItem">
                        <h4>Backend</h4>
                        <ul>
                            <li>Node.js + Express</li>
                            <li>MongoDB + Mongoose</li>
                            <li>JWT/Auth + CORS</li>
                            <li>REST APIs</li>
                            <li>RBAC (later)</li>
                        </ul>
                    </div>

                    <div className="stackItem">
                        <h4>Extras (Planned)</h4>
                        <ul>
                            <li>Stripe / Razorpay</li>
                            <li>Cloudinary image storage</li>
                            <li>Admin analytics dashboard</li>
                            <li>Coupons & offers engine</li>
                        </ul>
                    </div>
                </Styled.StackGrid>
            </section>

            {/* ===================== ABOUT ME ===================== */}
            <section className="block surface-card">
                <div className="head">
                    <h2>About Me</h2>
                    <div className="chip">
                        <TbUsers size={15} />
                        Developer Profile
                    </div>
                </div>

                <Styled.ProfileCard>
                    <img
                        className="avatar"
                        src="https://avatars.githubusercontent.com/u/139075779?v=4"
                        alt="Ashish Ranjan"
                        loading="lazy"
                    />

                    <div className="info">
                        <h3 className="name">Ashish Ranjan</h3>
                        <p className="role">
                            Full-Stack Developer • MERN • React Specialist
                        </p>

                        <p className="bio">
                            I build modern full-stack apps with clean architecture,
                            premium UI/UX, and production-ready structure.
                            I enjoy creative coding, AI, robotics, and futuristic tech.
                            <br /><br />
                            Right now I’m focused on building high-impact MERN systems,
                            strong portfolios, and scalable products that feel smooth,
                            fast, and thoughtfully designed.
                        </p>

                        <div className="highlights">
                            <div className="hItem">
                                <TbHeartHandshake size={16} />
                                Product-first thinking
                            </div>
                            <div className="hItem">
                                <TbCode size={16} />
                                Clean code & structure
                            </div>
                            <div className="hItem">
                                <TbRocket size={16} />
                                UI that feels premium
                            </div>
                        </div>

                        <div className="links">
                            <a href="https://github.com/a2rp" target="_blank" rel="noreferrer">
                                <TbBrandGithub size={18} />
                                GitHub
                            </a>
                            <a
                                href="https://www.ashishranjan.net"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TbExternalLink size={18} />
                                Portfolio
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aashishranjan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TbBrandLinkedin size={18} />
                                LinkedIn
                            </a>
                            <a
                                href="https://www.facebook.com/theash.ashish/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <TbBrandFacebook size={18} />
                                Facebook
                            </a>
                            <a href="mailto:ashish@ashishranjan.net" target="_blank" rel="noreferrer">
                                <TbMail size={18} />
                                Email
                            </a>
                        </div>

                        <div className="note text-muted">
                            © {year} Ashish Ranjan — building things that feel solid,
                            calm, and useful.
                        </div>
                    </div>
                </Styled.ProfileCard>
            </section>
        </Styled.Wrap>
    );
}
