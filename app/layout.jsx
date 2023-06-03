import ThemeProvider from "../context/ThemeProvider";
import "../styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
});

export const metadata = {
  title: "mg[dev]'s Portfolio Site",
  description:
    "Frontend developer specializing in building web sites and web applications with React and Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
