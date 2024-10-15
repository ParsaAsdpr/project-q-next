"use client";
import { extendTheme } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  initialColorMode: 'system',
  useSystemColorMode: true,
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
      50: "#59dc9810",
      100: "#59dc9840",
      200: "#59dc9870",
      300: "#59dc9899",
      400: "#59dc98b3",
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
