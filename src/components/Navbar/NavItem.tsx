import Link from "next/link";
import { Link as ChakraLink, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

const NavItem = ({
  isActive,
  label,
  icon,
  href,
  colorMode
}: {
  isActive?: boolean;
  label: string;
  icon: IconType;
  href: string;
  colorMode: 'light' | 'dark';
}) => {
  const navItemColors = colorMode === 'light' ? ['#111', '#777'] : ['#fff', '#ccc'];
  return (
    <ChakraLink
      as={Link}
      href={href}
      fontWeight={isActive ? "bold" : 500}
      fontSize={13}
      color={isActive ? navItemColors[0] : navItemColors[1]}
      px={4}
      borderLeft="1px solid #ddd"
      _hover={{
        textDecor: "none",
        color: !isActive && (colorMode === 'light' ? "#555" : "#eee"),
      }}
    >
      <HStack
        alignItems="center"
        position="relative"
        gap={1.5}
        sx={{
          ":before": {
            content: '""',
            position: "absolute",
            bottom: "-50%",
            right: "50%",
            transform: "translateX(50%)",
            bg: "primary.500",
            rounded: "full",
            transition: "0.2s ease-out",
            h: 1.5,
            w: isActive ? 1.5 : 0,
          },
          ":hover:before": {
            w: "80%",
          },
        }}
      >
        <Icon as={icon} />
        <Text>{label}</Text>
      </HStack>
    </ChakraLink>
  );
};

export default NavItem;
