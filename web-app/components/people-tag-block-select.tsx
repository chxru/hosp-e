import React from "react";
import {
  Box,
  Text,
  Center,
  Avatar,
  Divider,
  VStack,
  HStack,
  Spacer,
} from "@chakra-ui/react";

const PeopleTagSmallBlockSelect: React.FC = ({}) => {
  return (
    <>
      <Center backgroundColor="green.50">
        <Center>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Center>
        <Center pl="10px" pr="55px">
          <VStack align="flex-start">
            <Text fontWeight="bold" fontSize="xs">
              Maneesha nethmini
            </Text>
            <Text color="GrayText" fontSize="xs">
              VOG Surgent
            </Text>
          </VStack>
        </Center>
      </Center>
    </>
  );
};

export default PeopleTagSmallBlockSelect;
