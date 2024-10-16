/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import TextEditor from "./TextEditor";

interface IProps {
  placeholder: string;
  name: string;
  label: string;
  type?: string;
  helperText?: string;
}

const InputField = ({ placeholder, name, label, type, helperText }: IProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];
  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      {type === "texteditor" ? (
        <TextEditor placeholder={placeholder} name={name} control={control} />
      ) : (
        <Input
          id={name}
          placeholder={placeholder}
          type={type}
          {...register(name)}
        />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && (
        <FormErrorMessage>{error.message?.toString()}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
