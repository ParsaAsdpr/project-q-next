"use client";
import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import navbarItems from "../../core/constants/navbarItems";
import { usePathname } from "next/navigation";
import NavbarSearchInput from "./NavbarSearchInput";
import Link from "next/link";
import NotificationButton from "./NotificationButton";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <Box shadow="sm" bg="white">
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
            bg="primary.500"
            h={14}
            w={28}
            borderBottomRadius={7}
            mb={2.5}
          ></Box>
          <HStack
            mr={5}
            flexShrink={0}
            sx={{
              "a:last-child": {
                border: "none",
              },
            }}
          >
            {navbarItems.map((item) => (
              <NavItem
                key={item.label}
                {...item}
                isActive={item.href === pathname}
              />
            ))}
          </HStack>
          <NavbarSearchInput />
        </HStack>

        <HStack>
          <NotificationButton />
          <Button
            as={Link}
            href='/login'
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
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
