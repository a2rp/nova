import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const node = document.querySelector(".routesWrapper");
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior, block: "start" });
                return;
            }
        }
        if (node?.scrollTo) node.scrollTo({ top: 0, left: 0, behavior });
        else window.scrollTo({ top: 0, left: 0, behavior });
    }, [pathname, hash, behavior]);

    return null;
}