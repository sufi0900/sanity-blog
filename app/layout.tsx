// import Navbar from "./Navbar2";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`}
      >
        {" "}
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Navbar />
          <Providers>
            <main className=" mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
