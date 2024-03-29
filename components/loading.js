/** @format */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Loading = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = (url) => url !== router.asPath && setLoading(true);
        const handleComplete = (url) => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    });

    return loading ? (
        <div className="absolute inset-0 flex justify-center items-center bg-white z-30">
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    ) : (
        <div></div>
    );
};

export default Loading;
