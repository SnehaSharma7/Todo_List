import { useApollo } from "@/hooks/use-apollo";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { client } = useApollo(pageProps);

  if (!client) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Documentation Learning</title>
        <meta name="description" content="Documentation Learning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
