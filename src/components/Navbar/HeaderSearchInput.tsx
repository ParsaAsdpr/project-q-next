import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const HeaderSearchInput = ({colorMode}: {colorMode: 'light' | 'dark'}) => {
  return (
    <InputGroup>
      <Input
        fontSize="xs"
        placeholder="دوست داری چی بدونی؟"
        bg="brand.100"
        border="none"
        transition="all 0.3s, width 0.6s ease"
        _placeholder={{
          color: colorMode === "light" ? "#555" : "#ccc",
        }}
        focusBorderColor="brand.800"
        _focus={{
          w: "250px",
        }}
      />
      <InputLeftElement>
        <Icon as={BiSearch} color="brand.800" />
      </InputLeftElement>
    </InputGroup>
  );
};

export default HeaderSearchInput;
