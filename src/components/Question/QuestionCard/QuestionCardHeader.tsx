import {
  Avatar,
  Button,
  CardHeader,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

const QuestionCardHeader = () => {
  return (
    <CardHeader>
      <VStack w="full" alignItems="flex-start">
        <HStack w="full" justifyContent="space-between">
          <HStack>
            <Avatar src="https://avatar.iran.liara.run/public" />
            <VStack spacing={0} alignItems="start">
              <HStack>
                <Text fontSize="sm" fontWeight={700}>
                  پارسا
                </Text>
                <Button
                  height="auto"
                  py={1}
                  px={2}
                  fontSize="xs"
                  variant="outline"
                  colorScheme="brand"
                  borderColor="brand.700"
                  color="brand.700"
                  _hover={{ bg: "brand.700", color: "white" }}
                >
                  دنبال کردن
                </Button>
              </HStack>
              <Text fontSize="xs" fontWeight={400}>
                نویسنده
              </Text>
            </VStack>
          </HStack>
          <Text fontSize="2xs" fontWeight={400} color="text-light">
            2 روز پیش
          </Text>
        </HStack>
        <Heading size="md" mt={2}>{"سوالات متداول"}</Heading>
      </VStack>
    </CardHeader>
  );
};

export default QuestionCardHeader;
