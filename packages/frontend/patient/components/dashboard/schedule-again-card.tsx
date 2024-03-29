import React from "react";
import { Box, Center, HStack } from "@chakra-ui/react";

import PeopleTagSmallBlock from "./people-tag-block-sm";
import PeopleTagSmallBlockSelect from "./people-tag-block-select";

const PeopleHstackBlock: React.FC = () => {
  return (
    <>
      <Box>
        <HStack>
          <Center
            p="3"
            border="1px"
            borderWidth="thin"
            borderColor="green.300"
            borderRadius="35px"
            rounded={{ base: "full", md: "3xl", lg: "full" }}
            backgroundColor="green.50"
          >
            <PeopleTagSmallBlockSelect />
          </Center>
          <Center
            p="3"
            boxShadow="lg"
            borderRadius="35px"
            rounded={{ base: "full", md: "3xl", lg: "full" }}
          >
            <PeopleTagSmallBlock />
          </Center>
        </HStack>
      </Box>
    </>
  );
};

export default PeopleHstackBlock;
