import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useLayoutEffect(() => {
        // Enable browser's automatic scroll restoration
        // This is crucial for correctly returning to the previous position on POP
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
        }
    }, []);

    useLayoutEffect(() => {
        // Since global scroll-behavior: smooth is removed from CSS,
        // window.scrollTo(0, 0) will be naturally instant.

        // Only manually scroll to top on PUSH (new page) or REPLACE
        // Let the browser's 'auto' restoration handle the POP (back) behavior
        if (navType !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [pathname, navType]);

    return null;
}
