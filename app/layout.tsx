import Navbar from "./Navbar2";

import "./globals.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
