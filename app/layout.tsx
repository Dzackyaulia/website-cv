import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mhd Teuku Dzacky Aulia - Portfolio",
  description: "Portfolio website of Mhd Teuku Dzacky Aulia - Informatics Student",
  keywords: ["portfolio", "Dzacky", "developer", "informatika"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
