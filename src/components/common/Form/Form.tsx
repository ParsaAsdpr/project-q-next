/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, chakra, ChakraProps } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ReactNode } from "react";

interface IProps extends ChakraProps {
  schema: any;
  endpoint: string;
  handleSubmit?: (data: any) => void;
  onSuccess?: () => void;
  onError?: (err: any) => void;
  children: ReactNode;
}

const Form = ({
  schema,
  endpoint,
  children,
  onSuccess,
  onError,
  handleSubmit,
  ...rest
}: IProps) => {
  type Schema = z.infer<typeof schema>;

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: false,
  });

  const onSubmit: SubmitHandler<Schema> = async (data: Schema) => {
    if (handleSubmit === undefined) {
      const res = await fetch(`${endpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((err) => onError(err));

      if ((res as Response).status === 200) {
        onSuccess();
      } else {
        onError((res as Response).error);
      }
    } else handleSubmit(data);
  };
  return (
    <chakra.form onSubmit={methods.handleSubmit(onSubmit)} {...rest}>
      <FormProvider {...methods}>{children}</FormProvider>
      <Button type="submit" colorScheme="primary">
        ثبت
      </Button>
    </chakra.form>
  );
};

export default Form;
