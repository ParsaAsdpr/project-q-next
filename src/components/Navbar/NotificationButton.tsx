"use client";
import {
  Box,
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaBell, FaRegBell } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const NotificationButton = () => {
  const anim = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 10,
    },
    visible: {
      scale: [0.5, 1.2, 1],
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const badgeSize = {
    base: "1rem",
  };

  return (
    <Menu>
      <Tooltip aria-label="hi" label="اعلان ها" hasArrow>
        <MenuButton
          as={Box}
          cursor="pointer"
          userSelect="none"
          rounded="100%"
          _hover={{ bg: "#00000010" }}
        >
          <Stack
            fontSize={25}
            color="#888"
            cursor="pointer"
            position="relative"
            p={1.5}
            transition="0.2s"
          >
            <motion.div
              variants={anim}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "-10%",
                translateX: "20%",
                translateY: "20%",
              }}
            >
              <Text
                color="#fff"
                bg="#ff4b5b"
                rounded="9999px"
                boxSize={badgeSize}
                lineHeight={badgeSize}
                fontSize={10}
                textAlign="center"
                fontWeight={900}
              >
                2
              </Text>
            </motion.div>
            <Icon as={FaRegBell} fontSize='2xl' />
          </Stack>
        </MenuButton>
      </Tooltip>

      <MenuList fontWeight="100" py={3} px={2} rounded={8}>
        {["سلام"].map((notif) => (
          <HStack
            key={notif}
            cursor="pointer"
            role="group"
            _hover={{ bg: "#23a19410" }}
            p={3}
            rounded={5}
            transition="0.2s all"
            width="320px"
            spacing={3}
            mb={1}
          >
            {/* PRIMARY COLOR */}
            <Icon
              fontSize={18}
              as={FaBell}
              _groupHover={{ color: "teal" }}
              transition="0.2s all"
              color="#bbb"
            />
            <Text
              fontSize={12}
              _groupHover={{ color: "teal" }}
              transition="0.2s all"
              fontWeight={400}
              color="#555"
              isTruncated
            >
              {notif}
            </Text>
          </HStack>
        ))}
        <Button
          width="100%"
          bg="#23a19430"
          color="#1b887d"
          _hover={{ bg: "#23a19420", color: "#10665d" }}
          transition="0.2s"
          mt={1}
          fontWeight={500}
          fontSize={13}
          as={Link}
          href="/admin/notifications"
        >
          مشاهده همه اعلان ها
        </Button>
      </MenuList>
    </Menu>
  );
};

export default NotificationButton;
