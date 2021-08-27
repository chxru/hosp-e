import React from "react";
import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

const ImageBlock: React.FC = () => {
  return (
    <>
      <Box m="15px" p="20px" borderRadius="35px" backgroundColor="green.50">
        <HStack>
          <Center pl="10px" pr="55px">
            <VStack align="flex-start">
              <Text fontSize="xl" fontWeight="bold">
                Online consultation <br />
                within 24hr
              </Text>
              <Text color="GrayText" fontSize="md">
                download our mobile app.
              </Text>
            </VStack>
          </Center>

          <Spacer />

          <Center>
            <Image w="250px" h="150px" src="/human.png" alt="Dan Abramov" />
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default ImageBlock;
