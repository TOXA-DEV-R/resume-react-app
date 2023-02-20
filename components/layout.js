/** @format */

import { Suspense, useState } from "react";
import Navbar from "./navbar/navbar";
import "simplebar/dist/simplebar.min.css";
import Mobile from "./mobile";
import { useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import Loading from "./loading";
import GlobalLoading from "./globalLoading";

const Layout = ({ children }) => {
    const router = useRouter();

    // loader
    const [loader, setLoading] = useState(false);

    const nextWrapRef = useRef(null);
    const mainRef = useRef(null);

    const controlNavbar = () => {
        const width = document.body.clientWidth;

        const nextWrapwidth =
            nextWrapRef.current.getBoundingClientRect().height;
        const mainWidth = mainRef.current.getBoundingClientRect().height;

        if (width < 1024) {
            if (nextWrapwidth <= mainWidth) {
                mainRef.current.style.height = `${mainWidth - 95}px`;
            }
        } else {
            mainRef.current.style.height = `100%`;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", controlNavbar);

        return () => {
            window.removeEventListener("resize", controlNavbar);
        };
    });

    useEffect(() => {
        const handleComplete = (url) => {
            setTimeout(() => {
                controlNavbar();
            }, 0);
        };

        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    });

    useEffect(() => {
        controlNavbar();
    }, []);

    return (
        <>
            <GlobalLoading />
            <div
                className="bg-white flex flex-col lg:flex-row lg:justify-center lg:items-center w-screen h-screen relative next-wrap"
                ref={nextWrapRef}
            >
                <Navbar />
                <Mobile />
                <main
                    className="w-full lg:max-w-[79.688rem] lg:max-h-[38.75rem] h-full pt-4 pb-4 pr-2 pl-2 lg:pl-6 relative"
                    ref={mainRef}
                >
                    <Loading />
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
