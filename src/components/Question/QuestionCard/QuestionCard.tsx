"use client";
import IQuestion from "@/core/types/IQuestion";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import QuestionCardHeader from "./QuestionCardHeader";

const QuestionCard = ({ question }: { question: IQuestion }) => {
  const { colorMode } = useColorMode();
  return (
    <Card
      bg={colorMode === "dark" ? "#3a3a3a" : "fff"}
      shadow="md"
      px={6}
      py={2}
    >
      <QuestionCardHeader />
      <CardBody pt={0} fontSize='sm' dangerouslySetInnerHTML={{ __html: question.body }}></CardBody>
      <CardFooter justifyContent="space-between">
        <Box
          display="flex"
          gap={1.5}
          rounded="full"
          bg="brand.50"
          cursor="pointer"
          border="1px solid"
          borderColor="brand.400"
          color="brand.900"
          px={3}
          fontSize="xs"
          _hover={{
            bg: "brand.100",
          }}
          sx={{
            p: {
              py: 1,
            },
          }}
        >
          <Text>پسند</Text>
          <Divider
            orientation="vertical"
            height="100%"
            borderColor="brand.400"
          />
          <Text>{question.downvotes}</Text>
        </Box>
        <Text fontSize="2xs" color="text-light" fontWeight={400}>
          جواب ۱ از ۲
        </Text>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
