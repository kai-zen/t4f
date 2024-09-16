import type { AppProps } from "next/app";
import "styles/globals.css";
import { DataProvider, Layout } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}
