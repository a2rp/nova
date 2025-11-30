// src/components/footer/index.jsx
import { Styled } from "./styled";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Styled.Footer>
            <div className="left">© {year} Nova. All rights reserved.</div>

            <div className="right">
                Created with <span className="heart">♥</span> by <a href="https://www.ashishranjan.net" target="_blank">Ashish Ranjan</a>
            </div>
        </Styled.Footer>
    );
};

export default Footer;
