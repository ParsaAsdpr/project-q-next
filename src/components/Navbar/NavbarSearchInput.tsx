import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const NavbarSearchInput = () => {
  return (
    <InputGroup>
      <Input
        fontSize="xs"
        placeholder="دوست داری چی بدونی؟"
        bg="primary.100"
        border="none"
        transition="all 0.3s, width 0.6s ease"
        focusBorderColor="primary.800"
        _focus={{
          w: "250px",
        }}
      />
      <InputLeftElement>
        <Icon as={BiSearch} color="primary.800" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default NavbarSearchInput;
