import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Africa's Blockchain Club",
  description: "Building the Web3 future of Africa through education and innovation",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout> 
      </body>
    </html>
  );
}
