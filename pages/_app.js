/** @format */

import { NextSeo } from "next-seo";
import { Provider } from "react-redux";
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/index.scss";
import store from "../store";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <NextSeo
                    title="Tohir Bobojonov"
                    additionalMetaTags={[
                        { property: "og:title", content: "Tohir Bobojonov" },
                    ]}
                    additionalLinkTags={[
                        {
                            rel: "shortcut icon",
                            type: "image/png",
                            href: "/icon-web.png",
                        },
                        {
                            rel: "stylesheet",
                            href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
                        },
                    ]}
                />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default MyApp;
