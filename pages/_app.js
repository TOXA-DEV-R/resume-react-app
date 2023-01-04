/** @format */

import { NextSeo } from "next-seo";
import { Provider } from "react-redux";
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/index.scss";
import store from "../store";

function App({ Component, pageProps }) {
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
                    ]}
                />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default App;
