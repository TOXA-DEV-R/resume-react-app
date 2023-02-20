/** @format */

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GlobalLoading = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (router.isReady) {
            setLoading(false);
        }
    }, []);

    return loading ? (
        <div className="fixed w-full inset-0 z-[9999] bg-white flex justify-center items-center">
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
    ) : null;
};

export default GlobalLoading;
