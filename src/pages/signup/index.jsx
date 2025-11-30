// src/pages/signup/index.jsx
import { useState } from "react";
import { Styled } from "./styled";
import {
    TbBrandGoogle,
    TbBrandWindows, // 👈 yahan change
    TbMail,
    TbLock,
    TbEye,
    TbEyeOff,
    TbUser,
} from "react-icons/tb";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePass1 = () => setShowPassword((prev) => !prev);
    const togglePass2 = () => setShowPassword2((prev) => !prev);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Styled.Wrap>
            {/* LEFT IMAGE PANEL */}
            <div className="leftPane">
                <div className="artShell">
                    <div className="pill" />
                    <div className="characters">
                        <div className="char one">🧑‍💻</div>
                        <div className="char two">🚀</div>
                        <div className="char three">✨</div>
                    </div>
                    <p className="caption">Create your Nova account in seconds.</p>
                </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="rightPane">
                <div className="formShell">
                    <header className="topRow">
                        <h1>Create account</h1>
                        <p className="signinText">
                            Already have an account?{" "}
                            <button type="button" className="linkish">
                                Log in
                            </button>
                        </p>
                    </header>

                    {/* SOCIAL BUTTONS */}
                    <div className="socialRow">
                        <button type="button" className="socialButton google">
                            <TbBrandGoogle />
                            <span>Sign up with Google</span>
                        </button>

                        <button type="button" className="socialButton ms">
                            <TbBrandWindows /> {/* 👈 yahan change */}
                            <span>Sign up with Microsoft</span>
                        </button>
                    </div>

                    <div className="divider">
                        <span className="line" />
                        <span className="label">or use email</span>
                        <span className="line" />
                    </div>

                    {/* SIGNUP FORM */}
                    <form onSubmit={handleSubmit} className="loginForm">
                        <div className="fieldGroup">
                            <label htmlFor="name">Full Name</label>
                            <div className="inputShell">
                                <TbUser />
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                        </div>

                        <div className="fieldGroup">
                            <label htmlFor="email">Email</label>
                            <div className="inputShell">
                                <TbMail />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="fieldGroup">
                            <label>Password</label>
                            <div className="inputShell">
                                <TbLock />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="iconInline"
                                    onClick={togglePass1}
                                >
                                    {showPassword ? <TbEyeOff /> : <TbEye />}
                                </button>
                            </div>
                        </div>

                        <div className="fieldGroup">
                            <label>Confirm Password</label>
                            <div className="inputShell">
                                <TbLock />
                                <input
                                    type={showPassword2 ? "text" : "password"}
                                    placeholder="Re-enter password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="iconInline"
                                    onClick={togglePass2}
                                >
                                    {showPassword2 ? <TbEyeOff /> : <TbEye />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="primarySubmit">
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </Styled.Wrap>
    );
};

export default Signup;
