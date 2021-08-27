import React from "react";
import { Avatar, Center, Text, VStack } from "@chakra-ui/react";

const PeopleTagBlock: React.FC = () => {
  return (
    <>
      <Center px="10px">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Center>

      <Center pl="10px" pr="55px">
        <VStack align="flex-start">
          <Text fontWeight="bold" fontSize="md">
            Maneesha nethmini
          </Text>

          <Text color="GrayText" fontSize="md">
            VOG Surgent
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default PeopleTagBlock;
