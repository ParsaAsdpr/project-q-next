"use client";
import Form from "@/components/common/Form/Form";
import schema from "./schema";
import InputField from "@/components/common/Form/InputField";
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
    type: "texteditor",
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

  const handleSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Form
      schema={schema}
      endpoint="/api/answers"
      onSuccess={handleSuccess}
      onError={handleError}
      handleSubmit={handleSubmit}
    >
      {fields.map((field, index) => (
        <InputField key={index} {...field} />
      ))}
    </Form>
  );
};

export default PostQuestionForm;
