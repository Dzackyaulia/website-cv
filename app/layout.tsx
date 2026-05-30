import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mhd Teuku Dzacky Aulia",
  description: "Informatics Student | Developer | Problem Solver. Passionate about full-stack development and cloud technology.",
  keywords: ["Mhd Teuku Dzacky Aulia", "Dzacky", "developer", "informatika", "portfolio", "web developer"],
  authors: [{ name: "Mhd Teuku Dzacky Aulia" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Mhd Teuku Dzacky Aulia",
    description: "Informatics Student | Developer | Problem Solver",
    type: "website",
  },
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
