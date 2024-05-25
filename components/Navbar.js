import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { TbMessageChatbot } from "react-icons/tb";
import {
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiUser,
  FiUsers,
  FiLogOut,
  FiZap,
} from "react-icons/fi";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import { FaBloggerB } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { BiWorld, BiNews } from "react-icons/bi";
import {
  SiGooglescholar,
  SiResearchgate,
  SiUdemy,
  SiCoursera,
} from "react-icons/si";

const LinkItems = [
  { name: "NDL", icon: FiTrendingUp, url: "https://ndl.iitkgp.ac.in/" },
  { name: "SCIENCE NEWS", icon: BiNews, url: "sciencenews" },
  { name: "TECH NEWS", icon: BiNews, url: "technews" },
  {
    name: "GOOGLE SCHOLAR",
    icon: SiGooglescholar,
    url: "https://scholar.google.com/",
  },
  {
    name: "AI CHATBOT",
    icon: TbMessageChatbot,
    url: "/ai-chatbot",
  },
  {
    name: "RESEARCH GATE",
    icon: SiResearchgate,
    url: "https://www.researchgate.net/",
  },
  {
    name: "SPOKEN TUTORIAL",
    icon: FiUsers,
    url: "https://spoken-tutorial.org/??/n/",
  },
];

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Quick links
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <SignedIn>
        <NavItem key={"MY INFO"}>
          <UserButton /> <span className="ml-2 pl-2"> PROFILE</span>
        </NavItem>
        {/* Mount the UserButton component */}
      </SignedIn>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          <Link as="a" href={link.url} target="_blank">
            {link.name}
          </Link>
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        VEC Digi Library
      </Text>
    </Flex>
  );
};
