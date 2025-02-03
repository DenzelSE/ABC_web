import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Navbar from "@/app/components/Navbar"
// import Footer from "@/app/components/Footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Africa's Blockchain Club",
  description: "Building the Web3 future of Africa through education and innovation",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  )
}

