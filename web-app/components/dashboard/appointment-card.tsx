import React from "react";
import {
  Avatar,
  Box,
  Center,
  Divider,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

const AppointmentBlock: React.FC = () => {
  return (
    <>
      <Box my="15px" py="20px" borderRadius="25px" boxShadow="lg">
        <HStack>
          <Center px="10px">
            <VStack align="flex-start">
              <Text fontWeight="bold" fontSize="md">
                2 March
              </Text>
              <Text color="GrayText">16:30</Text>
            </VStack>
          </Center>

          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>

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

          <Center mx="25px" height="50px">
            <Divider orientation="vertical" />
          </Center>

          <Spacer />

          <Center px="5px">
            <Text fontWeight="bold" fontSize="md">
              202
            </Text>
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default AppointmentBlock;
