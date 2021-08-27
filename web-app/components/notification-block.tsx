import React from "react";
import {
  Box,
  Text,
  Center,
  Avatar,
  Wrap,
  WrapItem,
  Divider,
  VStack,
  Icon,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { MdNotifications, MdClose } from "react-icons/md";

const NotificationBlock: React.FC = ({}) => {
  return (
    <>
      <Box m="15px" p="20px" borderRadius="35px" backgroundColor="green.50">
        <HStack>
          <Center px="10px">
            <Icon w={8} h={8} color="green.800" as={MdNotifications} />
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
            <Icon w={5} h={5} as={MdClose} />
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default NotificationBlock;
