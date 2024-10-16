import type { Metadata } from "next";
import "./globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "@/core/libs/theme";
import Header from "@/components/Navbar/Header";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl">
        <ChakraProvider theme={theme}>
          <Header />
          <Box maxW="7xl" w="full" mx="auto">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
