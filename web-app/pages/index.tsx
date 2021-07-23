import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hosp - e</title>
        <meta name="description" content="Welcome to hosp-e" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justify="center" alignItems="center" height="100vh">
        <Text>Hosp - e</Text>
      </Flex>
    </>
  );
}
