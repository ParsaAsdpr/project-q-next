"use client";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Control, Controller } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor = ({
  name,
  placeholder,
  control,
}: {
  placeholder: string;
  control: Control;
  name: string;
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <Controller
      name={name}
      control={control}
      defaultValue="" // Set initial value
      render={({ field: { onChange, value } }) => (
        <Box
          mt={4}
          height="300px"
          pb="50px"
          sx={{
            ".ql-picker-label": {
              direction: "ltr",
            },
            ".ql-editor": {
              textAlign: "right",
              fontFamily: "iranyekan",
            },
          }}
        >
          <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            style={{ height: "100%" }}
          />
        </Box>
      )}
    />
  );
};

export default TextEditor;
