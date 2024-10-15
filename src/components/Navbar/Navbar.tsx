import NavItem from "./NavItem";
import navbarItems from "../../core/constants/navbarItems";
import { usePathname } from "next/navigation";
import { HStack } from "@chakra-ui/react";

const Navbar = ({colorMode}: {colorMode: 'light' | 'dark'}) => {
  const pathname = usePathname();

  return (
    <HStack
      as="nav"
      mr={5}
      flexShrink={0}
      sx={{
        "a:last-child": {
          border: "none",
        },
      }}
    >
      {navbarItems.map((item) => (
        <NavItem key={item.label} {...item} isActive={item.href === pathname} colorMode={colorMode} />
      ))}
    </HStack>
  );
};

export default Navbar;
