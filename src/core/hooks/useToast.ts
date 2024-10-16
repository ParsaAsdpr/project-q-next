import { useToast as useChakraToast } from "@chakra-ui/react";

const useToast = () => {
  const toast = useChakraToast({
    position: "top-right",
    isClosable: true,
    duration: 5000,
  });

  return toast;
};

export default useToast;
