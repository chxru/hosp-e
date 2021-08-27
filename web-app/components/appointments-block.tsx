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
import PeopleTagBlock from "./people-tag-block";

const AppointmentBlock: React.FC = ({}) => {
  return (
    <>
      <Box m="15px" p="20px" borderRadius="25px" boxShadow="lg">
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
          <PeopleTagBlock></PeopleTagBlock>
          <Center mx="25px" height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Spacer />
          <Center px="10px">
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
