import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Layout from "@hospe/ui-core/components/Layout";

const theme = extendTheme({
  colors: {
    brand: {
      background: "#F5FAF8",
      text: "#343E3B",
      secondry: "#5AA391",
      sub: "#777A79",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
export default MyApp;
