// src/pages/login/index.jsx
import { useState } from "react";
import { Styled } from "./styled";
import {
    TbBrandGoogle,
    TbLock,
    TbMail,
    TbEyeOff,
    TbEye,
} from "react-icons/tb";
import { FaMicrosoft } from "react-icons/fa6";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // yahan baad mein real auth hook / API wire kar sakte ho
    };

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Styled.Wrap>
            {/* Left illustration panel */}
            <div className="leftPane">
                <div className="artShell">
                    <div className="pill" />
                    <div className="characters">
                        <div className="char one">🙂</div>
                        <div className="char two">😄</div>
                        <div className="char three">😉</div>
                    </div>
                    <p className="caption">
                        Team Nova, carrying your next release together.
                    </p>
                </div>
            </div>

            {/* Right form panel */}
            <div className="rightPane">
                <div className="formShell">
                    <header className="topRow">
                        <h1>Log in</h1>
                        <p className="signupText">
                            Don&apos;t have an account?{" "}
                            <button type="button" className="linkish">
                                Sign up
                            </button>
                        </p>
                    </header>

                    {/* Social buttons */}
                    <div className="socialRow">
                        <button type="button" className="socialButton google">
                            <TbBrandGoogle />
                            <span>Sign in with Google</span>
                        </button>
                        <button type="button" className="socialButton ms">
                            <FaMicrosoft />
                            <span>Sign in with Microsoft</span>
                        </button>
                    </div>

                    <div className="divider">
                        <span className="line" />
                        <span className="label">or use email</span>
                        <span className="line" />
                    </div>

                    {/* Email / password form */}
                    <form onSubmit={handleSubmit} className="loginForm">
                        <div className="fieldGroup">
                            <label htmlFor="email">Email</label>
                            <div className="inputShell">
                                <TbMail />
                                <input
                                    id="email"
                                    type="email"
                                    defaultValue="demo@nova.app"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="password">Password</label>
                            <div className="inputShell">
                                <TbLock />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="pasword"
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    className="iconInline"
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                    onClick={togglePassword}
                                >
                                    {showPassword ? <TbEyeOff /> : <TbEye />}
                                </button>
                            </div>
                        </div>

                        <div className="metaRow">
                            <label className="remember">
                                <input type="checkbox" defaultChecked />
                                <span>Remember this device</span>
                            </label>

                            <button type="button" className="linkish">
                                Forgot password?
                            </button>
                        </div>

                        <button type="submit" className="primarySubmit">
                            Log in
                        </button>
                    </form>

                    <button type="button" className="troubleLink">
                        Trouble signing in?
                    </button>
                </div>
            </div>
        </Styled.Wrap>
    );
};

export default Login;
