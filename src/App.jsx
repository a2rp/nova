import { NavLink } from "react-router-dom";
import { Styled } from "./App.styled";
import { useEffect, useRef, useState } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";
import Header from "./components/header";
import NavLinks from "./components/navlinks";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/backToTop";

const App = () => {
    // true = showSideMenu, false = hideSideMenu
    const [hideSideMenu, setHideSideMenu] = useState(
        () => window.innerWidth > 1200
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setHideSideMenu(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const routesRef = useRef(null);

    const handleNavLinkNavigate = () => {
        // mobile width par link click ke baad menu close
        if (window.innerWidth < 1200) {
            setHideSideMenu(false);
        }
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                {/* LEFT NAV SECTION */}
                <Styled.NavLinksSection
                    className={hideSideMenu ? "showSideMenu" : "hideSideMenu"}
                >
                    <div className="navlinksMain">
                        <div className="navlinksHeaderLinkMenuToggleLink">
                            <NavLink to="/home" className="navlinksHeaderLink">
                                <div className="logoWrapper">
                                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Nova logo" />
                                </div>
                                <div className="brandName">Nova</div>
                            </NavLink>

                            <div
                                className="menuToggleLink"
                                onClick={() => setHideSideMenu(false)}
                            >
                                <RiMenuFold3Fill size={32} />
                            </div>
                        </div>

                        <div className="navlinksWrapper">
                            <NavLinks onNavigate={handleNavLinkNavigate} />
                        </div>
                    </div>
                </Styled.NavLinksSection>

                {/* RIGHT SIDE */}
                <Styled.RoutesWrapper>
                    <Header onOpenSideMenu={() => setHideSideMenu(true)} />
                    <div className="routesWrapper" ref={routesRef}><AppRoutes /></div>
                    <Footer />
                </Styled.RoutesWrapper>
            </Styled.Main>
            <ScrollToTop />
            <BackToTop targetRef={routesRef} />
        </Styled.Wrapper>
    );
};

export default App;
