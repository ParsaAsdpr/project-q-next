import { HStack, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const Categories = () => {
  return (
    <List as="nav" bg="white" rounded={5} shadow="sm" py={3} fontSize='sm'>
      <HStack px={4} mb={4}>
        <Text fontWeight={600} fontSize='md'>دسته بندی ها</Text>
      </HStack>
      <ListItem py={2} cursor='pointer' px={6} bg='brand.100' borderRight='2px solid' borderColor='brand.800'>رایانه</ListItem>
      <ListItem py={2} cursor='pointer' px={6} _hover={{
        bg: 'brand.50'
      }}>علمی</ListItem>
    </List>
  );
};

export default Categories;
