import { Html, Head, Main, NextScript } from "next/document";

function Document() {
    return (
        <Html lang="en">
            <Head>
                {
                    // eslint-disable-next-line @next/next/no-css-tags
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                    />
                }
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;
