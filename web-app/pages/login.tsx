import React from "react";
import Image from "next/image";
import Head from "next/head";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const LoginPage: React.FC = ({}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Head>
        <title>Hosp - e : Login</title>
        <meta name="description" content="Welcome to hosp-e" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex height="100vh">
        <Flex justify="center" alignItems="center" flexDir="column" width="50%">
          <Text>Login</Text>

          <Container paddingX="12" paddingY="18">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="password">
              <FormLabel>Passowrd</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText>Enter secure password.</FormHelperText>
            </FormControl>
          </Container>
          <Button colorScheme="teal">Login</Button>
        </Flex>
        <Flex width="50%" justify="center" alignItems="center">
          <Container w="300" h="300">
            <Image
              src="/login.jpg"
              width="300"
              height="300"
              alt="login image"
            />
          </Container>
        </Flex>
      </Flex>
    </>
  );
};

export default LoginPage;
