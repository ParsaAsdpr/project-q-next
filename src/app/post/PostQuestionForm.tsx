"use client";
import Form from "@/components/common/Form";
import schema from "./schema";
import InputField from "@/components/common/InputField";
import useToast from "@/core/hooks/useToast";

const fields = [
  {
    name: "title",
    id: "title",
    label: "عنوان",
    placeholder: "عنوان خود را وارد کنید",
    type: "text",
  },
  {
    name: "body",
    id: "body",
    label: "متن",
    placeholder: "متن خود را وارد کنید",
    type: "textarea",
  },
];
const PostQuestionForm = () => {
  const toast = useToast();

  const handleSuccess = () => {
    toast({
      status: "success",
      title: "با موفقیت انجام شد",
      description: "عملیات با موفقیت انجام شد",
    });
  };

  const handleError = (err: string) => {
    toast({
      status: "error",
      title: "خطا",
      description: err,
    });
  };
  
  return (
    <Form
      schema={schema}
      endpoint="/api/answers"
      onSuccess={handleSuccess}
      onError={handleError}
    >
      {fields.map((field, index) => (
        <InputField key={index} field={field} />
      ))}
    </Form>
  );
};

export default PostQuestionForm;
