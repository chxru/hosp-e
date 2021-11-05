import React from "react";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import TableRow from "./date-list-row";

const ResultCard: React.FC<{ name: string; type: string; hospital: string }> =
  ({ name, type, hospital }) => {
    //temporary data for fill appointment date list
    const today = new Date();

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <>
        <Box
          w="250px"
          h="max-content"
          bg="brand.background"
          borderRadius="12px"
          align="center"
        >
          <Avatar width="80px" height="80px" name={name} mt="40px" />
          <Text
            mt="40px"
            textColor="brand.text"
            fontSize="18px"
            fontWeight="bold"
          >
            {name}
          </Text>
          <Text textColor="brand.text">{type}</Text>
          <Button
            mt="40px"
            mb="40px"
            w="150px"
            h="40px"
            bg="brand.secondry"
            textColor="white"
            fontSize="16px"
            onClick={onOpen}
          >
            Book
          </Button>
        </Box>

        {/*  Modal to book the doctor */}
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
          <ModalOverlay />
          <ModalContent h="max-content">

            <ModalBody>
              <Flex
                mt="40px"
                align="center"
                justifyContent="space-between"
                alignContent="flex-start"
              >
                {/* Doctor's details */}
                <Flex justifyContent="center" align="center">
                  <Avatar width="80px" height="80px" name={name} />

                  <Flex direction="column">
                    <Text
                      ml={5}
                      textColor="brand.text"
                      fontSize="18px"
                      fontWeight="bold"
                    >
                      {name}
                    </Text>

                    <Text ml={5} textColor="brand.text">
                      From {hospital}
                    </Text>
                  </Flex>
                </Flex>

                <Flex align="end">
                  <Text ml={5} textColor="brand.text" fontSize="20px">
                    {type}
                  </Text>
                </Flex>
              </Flex>

              {/* Appointment date list */}

              <Table variant="simple" mt="30px">
                <Thead>
                  <Tr bg="#dfe3e7">
                    <Th>Date</Th>
                    <Th>Time</Th>
                    <Th>No of Appointment</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>

                {/* Table body */}
                <Tbody>
                  <TableRow
                    date={today.toLocaleDateString()}
                    time={today.toLocaleTimeString()}
                    number="15"
                  />

                  <TableRow
                    date={today.toLocaleDateString()}
                    time={today.toLocaleTimeString()}
                    number="50"
                  />

                  <TableRow
                    date={today.toLocaleDateString()}
                    time={today.toLocaleTimeString()}
                    number="20"
                  />

                  <TableRow
                    date={today.toLocaleDateString()}
                    time={today.toLocaleTimeString()}
                    number="30"
                  />
                </Tbody>
              </Table>
            </ModalBody>

            <ModalFooter>
              <Button bg="#9DB1FD" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

export default ResultCard;
