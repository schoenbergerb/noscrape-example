import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="preload"
          href="/fonts/example/example.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
