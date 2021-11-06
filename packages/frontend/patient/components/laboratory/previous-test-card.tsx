import React from "react";

import {
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

const OldCard: React.FC<{
  day: number;
  month: number;
  yr: number;
  status: string;
  type: string;
}> = ({ day, month, yr, status, type }) => {

  return (
    <>
    <Flex shadow="lg" mb={12} w="max-content" direction="column">
      <Text my={4} ml={3} fontSize="18px" textColor="#777A79"> {type} </Text>
      <Grid
        h="max-content"
        templateRows="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(5,1fr)",
        }}
        
      >
        <GridItem colSpan={1} ml={3}>
          <Text fontSize="18px" textColor="#343E3B">
            Date
          </Text>
        </GridItem>

        {/* Display Date */}
        <GridItem colSpan={2}>
          <Text fontSize="18px" textColor="#343E3B" ml={10}>
            {day} / {month} / {yr}
          </Text>
        </GridItem>

        {/* Button */}
        <GridItem
          rowSpan={2}
          colSpan={2}
          visibility={{ base: "hidden", md: "visible" }}
        >
          <Button
            mt={{ base: "0", md: "20px" }}
            mx={{base:"0px", md:"40px"}}
            bg="brand.secondry"
            textColor="white"
            w="100px"
          >
            View
          </Button>
        </GridItem>

        <GridItem colSpan={1} ml={3} mt={{ base: "0", md: "10px" }}>
          <Text fontSize="18px" textColor="#343E3B">
            Status
          </Text>
        </GridItem>

        {/* Status of the test */}
        <GridItem colSpan={2} mt={3}>
          <Text fontSize="18px" textColor="#343E3B" ml={10}>
            {status}
          </Text>
        </GridItem>

        {/* Mobile View Button */}
        <GridItem
          rowSpan={2}
          colSpan={2}
          visibility={{ base: "visible", md: "hidden" }}
        >
          <Button
            mt={{ base: "10px", md: "0px" }}
            bg="brand.secondry"
            textColor="white"
            ml={{base:"5px", md:"0"}}
            mb={{base:"10px", md:"0px"}}
          >
            View
          </Button>
        </GridItem>
      </Grid>
      </Flex>
    </>
  );
};

export default OldCard;
