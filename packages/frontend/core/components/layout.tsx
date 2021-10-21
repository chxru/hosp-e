import React from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  FiBell,
  FiCommand,
  FiHome,
  FiMenu,
  FiPackage,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import type { IconType } from "react-icons";

const NavItem = (props: { name: string; route: string; icon: IconType }) => {
  const router = useRouter();
  const { name, route, icon } = props;

  return (
    <Button
      width="200px"
      justifyContent="left"
      alignItems="center"
      bg="brand.background"
      height="75px"
      fontSize="1rem"
      mb="15px"
      color="brand.secondry"
      onClick={() => {
        router.push(route);
      }}
    >
      <Icon color="brand.secondry" as={icon} cursor="pointer" mx="3" />
      {name}
    </Button>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex minWidth="100vw" overflowX="hidden">
        {/* sidebar */}
        <Flex direction="column" mt={50} display={{ base: "none", md: "flex" }}>
          <NavItem name="Home" route="/dashboard" icon={FiHome} />
          <NavItem name="Search" route="/dashboard" icon={FiSearch} />
          <NavItem name="Profile" route="/dashboard" icon={FiUser} />
          <NavItem name="Laboratory" route="/dashboard" icon={FiCommand} />
          <NavItem name="Pharmacy" route="/dashboard" icon={FiPackage} />
        </Flex>

        <Flex direction="column" flexGrow={1} maxWidth="6xl" marginX="auto">
          {/* Topbar */}
          <Flex
            direction="row"
            justify="space-between"
            alignItems="center"
            my={{ base: 30, md: 50 }}
            mx={30}
            overflowY="hidden"
          >
            {/* Title text */}
            <Flex alignItems="center">
              <Icon
                display={{ base: "inline-block", md: "none" }}
                color="brand.secondry"
                as={FiMenu}
                cursor="pointer"
                mr="6"
                onClick={onOpen}
              />

              <Flex
                direction={{ base: "column", md: "row" }}
                fontSize="1.5rem"
                textColor="brand.text"
                lineHeight={1}
                alignItems={{ base: "flex-start", md: "center" }}
              >
                <Text>Welcome to</Text>
                <Text fontWeight="bold" ml={{ base: 0, md: 1 }}>
                  Aloka Hospital
                </Text>
              </Flex>
            </Flex>

            {/* Avatar */}
            <Flex align="center">
              <Icon color="gray.500" as={FiBell} cursor="pointer" />
              <Text
                color="brand.sub"
                display={{ base: "none", sm: "block" }}
                ml={4}
              >
                Danial Smith
              </Text>
              <Avatar size="sm" name="Danial Smith" cursor="pointer" ml={4} />
            </Flex>
          </Flex>
          <Box as="main">{children}</Box>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            {/* TODO: Change UI for drawer buttons */}
            <NavItem name="Home" route="/dashboard" icon={FiHome} />
            <NavItem name="Search" route="/dashboard" icon={FiSearch} />
            <NavItem name="Profile" route="/dashboard" icon={FiUser} />
            <NavItem name="Laboratory" route="/dashboard" icon={FiCommand} />
            <NavItem name="Pharmacy" route="/dashboard" icon={FiPackage} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Layout;
