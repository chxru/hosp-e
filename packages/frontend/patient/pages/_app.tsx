import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Sidebar from "@hospe/ui-core/components/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </ChakraProvider>
  );
}
export default MyApp;
