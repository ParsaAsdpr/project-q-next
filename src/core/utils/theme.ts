"use client";
import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  direction: "rtl",
  fonts: {
    heading: "iranyekan",
    body: "iranyekan",
  },
  components: {
    Icon: {
      baseStyle: {
        fontSize: 18, // Normally, it is "semibold"
      },
    },
  },
  colors: {
    primary: {
      50: "#e1faed",
      100: "#d2fae5",
      200: "#baf7d7",
      300: "#8de3b6",
      400: "#75ebae",
      500: "#59dc98",
      700: "#4ecf8c",
      800: "#38ba77",
      900: "#27a162",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: props.colorMode === "dark" ? "#333" : "#F6F6F6",
      },
      ".bg-opacity-25": {
        backgroundColor: `rgba(0, 0, 0, 0.25)`, // 25% opacity black background
      },
    }),
  },
});

export default theme;
