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
        <div className="fixed top-0 left-0 inset-0 flex justify-center items-center bg-white z-30">
            <div className="loader">Loading...</div>
        </div>
    ) : null;
};

export default GlobalLoading;
