/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

interface IProps {
  field: any;
}

const InputField = ({ field }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[field.name];
  return (
    <FormControl isInvalid={!!error}>
      {field.label && <FormLabel>{field.label}</FormLabel>}
      {field.type === "textarea" ? (
        <Textarea {...field} {...register(field.name)} />
      ) : (
        <Input {...field} {...register(field.name)} />
      )}
      {field.helperText && <FormHelperText>{field.helperText}</FormHelperText>}
      {error && (
        <FormErrorMessage>{error.message?.toString()}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
