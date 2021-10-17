import React from "react";
import {
  Box,
  Center,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiBell, FiX } from "react-icons/fi";

const NotificationBlock: React.FC = () => {
  return (
    <>
      <Box m="15px" p="20px" borderRadius="35px" backgroundColor="green.50">
        <HStack>
          <Center px="10px">
            <Icon w={8} h={8} color="green.800" as={FiBell} />
          </Center>

          <Center pl="10px" pr="55px">
            <VStack align="flex-start">
              <Text fontSize="md">Its been over 1 year since the last PAP</Text>
              <Text color="green.800" fontSize="md" fontWeight="medium">
                Schedule the visit
              </Text>
            </VStack>
          </Center>

          <Spacer />

          <Center px="10px">
            <Icon w={5} h={5} as={FiX} />
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default NotificationBlock;
