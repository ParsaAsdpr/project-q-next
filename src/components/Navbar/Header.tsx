"use client";
import {
  Box,
  Button,
  ColorModeScript,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import HeaderSearchInput from "./HeaderSearchInput";
import Link from "next/link";
import NotificationButton from "./NotificationButton";
import theme from "@/core/libs/theme";
import Navbar from "./Navbar";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Header = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box shadow="sm" bg={colorMode === "dark" ? "#2f2f2f" : "white"} as="header">
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <HStack
        mx="auto"
        justifyContent="space-between"
        maxW="7xl"
        w="100%"
        px={{ base: 4, xl: 0 }}
      >
        <HStack>
          <Box
            flexShrink={0}
            bg={colorMode === "dark" ? "primary.900" : "primary.500"}
            h={14}
            w={28}
            borderBottomRadius={7}
            mb={2.5}
          ></Box>
          <Navbar colorMode={colorMode} />
          <HeaderSearchInput colorMode={colorMode} />
        </HStack>

        <HStack>
          <NotificationButton colorMode={colorMode} />
          <Button
            as={Link}
            href="/login"
            variant="outline"
            fontSize="xs"
            borderColor="primary.900"
            textColor="primary.900"
            rounded="full"
            _hover={{
              bg: "primary.900",
              color: "white",
            }}
          >
            ورود / ثبت نام
          </Button>
          <IconButton
            aria-label="Toggle Dark Mode"
            colorScheme="primary.500"
            icon={colorMode === "dark" ? <MdDarkMode /> : <CiLight />}
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
            fontSize="2xl"
            variant="ghost"
            rounded="full"
          ></IconButton>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;
