import React from "react";
import Image from "next/image";
import {
  Flex,
  Heading,
  Input,
  Button,
  Stack,
  Box,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";

const ResetPassowrd: React.FC = ({}) => {
  return (
    <Flex
      flexDirection="column"
      width="10wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid columns={2} spacing={10}>
        <Stack>
          <Box boxSize="sm">
            <Image src="/images.png" width={500} height={500} alt="fup" />
          </Box>
        </Stack>

        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading color="teal.400">Forgot Password ?</Heading>
          <Avatar bg="teal.500" />
          <Box
            color="gray.900"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xl"
            ml="2"
          >
            Enter the e-mail address associated with your account.
          </Box>
          <Box
            color="gray.700"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="l"
            ml="2"
          >
            We will e-mail you a link to reset your password.
          </Box>
          <Input placeholder="Enter Email Address" />
          <Button colorScheme="teal" size="md">
            Send
          </Button>
        </Stack>
      </SimpleGrid>
    </Flex>
  );
};

export default ResetPassowrd;
