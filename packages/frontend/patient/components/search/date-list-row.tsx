import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";

const TableRow: React.FC<{date: string; time:string; number:string}> = ({date, time, number}) => {

  return (
    <>
      <Tr>
        <Td>{date}</Td>
        <Td>{time}</Td>
        <Td> {number}</Td>
        <Td>
          <Button
            w="88px"
            h="38px"
            borderRadius="8px"
            bg="#CDD8FD"
            textColor="#3E66FB"
            borderColor="#9DB1FD"
            borderWidth="2px"
          >
            Book
          </Button>
        </Td>
      </Tr>
    </>
  );
};

export default TableRow;