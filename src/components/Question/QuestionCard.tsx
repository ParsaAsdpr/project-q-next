"use client";
import IQuestion from "@/core/types/IQuestion";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const QuestionCard = ({ question }: { question: IQuestion }) => {
  const { colorMode } = useColorMode();
  return (
    <Card bg={colorMode === "dark" ? "#3a3a3a" : "fff"} shadow='md'>
      <CardHeader>
        <Heading size="md">{question.title}</Heading>
      </CardHeader>
      <CardBody dangerouslySetInnerHTML={{ __html: question.body }}></CardBody>
      <CardFooter>
        <HStack>
          <Text>Upvotes: {question.upvotes}</Text>
          <Text>Downvotes: {question.downvotes}</Text>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default QuestionCard;
