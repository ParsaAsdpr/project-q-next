import NavItem from "./NavItem";
import navbarItems from "../../core/constants/navbarItems";
import { usePathname } from "next/navigation";
import { HStack } from "@chakra-ui/react";

const Navbar = ({ colorMode }: { colorMode: "light" | "dark" }) => {
  const pathname = usePathname();

  return (
    <HStack
      as="nav"
      position={{ base: "fixed", md: "static" }}
      bottom={0}
      left={0}
      width={{ base: "full", md: "auto" }}
      py={{ base: 5, md: 0 }}
      bg={{base: colorMode === "dark" ? "#2f2f2f" : "white", md: "transparent"}}
      justifyContent={{ base: "center", md: "flex-start" }}
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
          colorMode={colorMode}
        />
      ))}
    </HStack>
  );
};

export default Navbar;
