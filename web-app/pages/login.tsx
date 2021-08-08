
import React from "react";
import Image from "next/image";
import Head from "next/head";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Text,
  Wrap,
  WrapItem,
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

      <Flex p={30} bgColor='#c8e0e8' justifyContent="center" alignItems='center' h='100vh'>

        <Wrap shadow='dark-lg' spacing={0}>
          <WrapItem bgColor='white' h='full' w="50%" justifyContent="center" alignItems="center">
            <SimpleGrid>
              <Image
                src="/NoBackground.png"
                width="1200"
                height="800"
                alt="login image"
              />
            </SimpleGrid>
          </WrapItem>

          <WrapItem bgColor='white' h='full' w='50%' height='' justifyContent="center" alignItems="center" flexDir="column">
            <Text fontSize='40px' fontWeight='bold'>Login</Text>
            <Container paddingX="12" paddingY="18">
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
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
              <HStack spacing={176}>
                <HStack>
                  <Checkbox></Checkbox>
                  <Text>Remember Me</Text>
                </HStack>
                
                <Link color='teal.400' href='#'>Forgot Password</Link>
              </HStack>
            </Container>
            <Button colorScheme="teal">Login</Button>
            <Text>
              Not registered yet?{" "}
              <Link color="teal.500" href="#">
                Sign-up Now
              </Link>
            </Text>
          </WrapItem>
        </Wrap>
        
        
      </Flex>
    </>
  );
};

export default LoginPage;
