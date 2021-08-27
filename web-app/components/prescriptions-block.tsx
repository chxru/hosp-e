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

const PrescriptionsBlock: React.FC = ({}) => {
  return (
    <>
      <Box m="15px" p="20px" borderRadius="25px" boxShadow="lg">
        <HStack>
          <Center pl="10px" pr="55px">
            <VStack align="flex-start">
              <Text fontWeight="bold" fontSize="md">
                Euthyrax 50mg
              </Text>
              <Text color="GrayText" fontSize="md">
                Expire on: 12 March 2021
              </Text>
            </VStack>
          </Center>
          <Spacer />
          <Center px="10px">
            <Text fontWeight="bold" fontSize="md">
              05829
            </Text>
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default PrescriptionsBlock;
