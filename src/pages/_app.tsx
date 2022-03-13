import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-5NL9XQCSN2"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());
        
                    gtag('config', 'GA_MEASUREMENT_ID');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
