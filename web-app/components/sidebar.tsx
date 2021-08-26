import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IconType } from "react-icons/lib";
import { FiSearch, FiBell, FiMenu } from "react-icons/fi";

interface sidebarProps {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavItem = (props: {
  children: React.ReactNode;
  icon: IconType;
  route: string;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { icon, children, route, ...rest } = props;
  return (
    <Flex
      align="center"
      py="20px"
      cursor="pointer"
      color="black"
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: "gray.600",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const SidebarContent = (props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  display?: any;
  w?: string;
  borderRight?: string;
}) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      mt={15}
      pb="10"
      px="50px"
      overflowX="hidden"
      overflowY="auto"
      bg="white"
      w={{ base: 54, md: 60, lg: 72 }}
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        mt="25px"
        mr="100px"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <Flex
          align="center"
          mt={-5}
          mb={5}
          display={{ base: "flex", md: "none" }}
        >
          <Heading size="lg" fontWeight="semibold">
            Hosp - e
          </Heading>
        </Flex>

        {/* Navigation buttons */}
        <Button
          width="3xs"
          justifyContent="left"
          bg="white"
          height="64px"
          mb="30px"
          mt="40px"
          mx={-10}
          _hover={{
            bg: "gray.200",
            borderRadius: "10px",
            borderLeftRadius: "0px",
          }}
          _active={{
            bg: "gray.200",
            borderRadius: "10px",
            borderLeftRadius: "0px",
            transform: "scale(0.98)",
          }}
          _focus={{ _focus: "none" }}
        >
          Dashboard
        </Button>

        <Button
          width="3xs"
          justifyContent="left"
          bg="white"
          height="64px"
          mb="30px"
          mx={-10}
          _hover={{
            bg: "gray.200",
            borderRadius: "10px",
            borderLeftRadius: "0px",
          }}
          _active={{
            bg: "gray.200",
            borderRadius: "10px",
            borderLeftRadius: "0px",
            transform: "scale(0.98)",
          }}
          _focus={{ _focus: "none" }}
        >
          Home
        </Button>
      </Flex>
    </Box>
  );
};

const Sidebar: React.FC<sidebarProps> = ({ children }) => {
  const sidebar = useDisclosure();
  return (
    <Box as="section" bg="gray.50" minH="100vh" backgroundColor="#f8f8f8">
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>

      <Flex
        display={{ base: "flex", md: "flex" }}
        as="header"
        align="center"
        justify={{ base: "space-between", md: "space-between" }}
        w="full"
        px="4"
        bg="white"
        h="14"
        overflowX="auto"
        overflowY="hidden"
        pos="fixed"
        zIndex="sticky"
      >
        <Flex align="center">
          {/* Toggle Button  */}
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<Icon color="gray.500" as={FiMenu} cursor="pointer" />}
            size="lg"
            mr={5}
          />

          <Heading size="lg" fontWeight="semibold">
            Hosp - e
          </Heading>
        </Flex>

        <Flex>
          {/* Search  */}
          <InputGroup
            w="40"
            size="sm"
            display={{ base: "none", md: "flex" }}
            mr={8}
            borderWidth="0px"
          >
            <InputLeftElement>
              <Icon color="gray.500" as={FiSearch} cursor="pointer" />
            </InputLeftElement>
            <Input
              _focus={{ _focus: "none" }}
              placeholder="Search"
              borderRadius="15px"
              background="#F5FAF8"
              fontWeight="semibold"
              borderColor="white"
            />
          </InputGroup>

          {/* notification and profile icon */}
          <Flex align="center">
            <Icon color="gray.500" as={FiBell} cursor="pointer" mr={5} />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
      </Flex>
      <Box ml={{ base: 0, md: 60, lg: 72 }} transition=".3s ease">
        <Box as="main" p="4" overflow="hidden" py={20} bg="white">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
