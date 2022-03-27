import { Footer } from "@components/footer";
import { Container } from "@components/layout";
import { Navbar } from "@components/navbar";
import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Container>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
                rel="stylesheet"
            />

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-5NL9XQCSN2"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', 'G-5NL9XQCSN2');
                `}
            </Script>
            <Navbar section={pageProps.section} />
            <Component {...pageProps} />
            <Footer />
        </Container>
    );
}

export default MyApp;
