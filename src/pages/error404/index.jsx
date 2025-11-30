// src/pages/error404/index.jsx
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import { TbAlertTriangle, TbArrowLeft, TbHome } from "react-icons/tb";

const Error404 = () => {
    return (
        <Styled.Wrap>
            <div className="shell">
                <div className="iconRing">
                    <span className="blurGlow" />
                    <TbAlertTriangle className="icon" />
                </div>

                <p className="code">404</p>
                <h1>Page not found</h1>
                <p className="sub">
                    This route doesn&apos;t exist in Nova yet. The link may be old, or
                    the page hasn&apos;t been wired up.
                </p>

                <div className="actions">
                    <NavLink to="/dashboard" className="btn primary">
                        <TbHome />
                        Back to dashboard
                    </NavLink>
                    <NavLink to="/starter" className="btn ghost">
                        <TbArrowLeft />
                        Go to starter page
                    </NavLink>
                </div>

                <p className="hint">
                    Tip: You can reuse the Starter workspace layout to build this page
                    and then update the navigation.
                </p>
            </div>
        </Styled.Wrap>
    );
};

export default Error404;
