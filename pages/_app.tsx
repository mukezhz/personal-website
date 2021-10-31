import "../styles/tailwind.css";
import "../styles/prism.css";

import { ThemeProvider } from "next-themes";
import Head from "next/head";
import LayoutWrapper from "../layouts/LayoutWrapper";

import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
    </ThemeProvider>
  );
}
