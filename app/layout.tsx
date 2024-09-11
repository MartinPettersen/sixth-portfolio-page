import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "@next/font/google";
import { Nunito } from "@next/font/google";
import Navbar from "./components/(navigation)/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-manrope",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Portfolio Page",
  description: "Portfolio page to show off projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${nunito.variable} antialiased`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
