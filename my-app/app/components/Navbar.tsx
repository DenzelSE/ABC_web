"use client"

import Link from "next/link"
import Image from "next/image"
// import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme } = useTheme()

  return (
    <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              {/* <Image
                src={
                  theme === "dark"
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABClogo_White_transparent_bg-nPG3t03bs3c6igfkyeJP3JXqooXFdZ.png"
                    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ABClogo-Black_transparent_bg-cpHmeRp09XBDxIB5KKbaf0lok7mLwg.png"
                }
                alt="Africa's Blockchain Club Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              /> */}
              <span className="text-xl font-bold text-gray-700 hidden sm:inline">Africa's Blockchain Club</span>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link href="/#about" className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link
              href="/#events"
              className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"
            >
              Events
            </Link>
            <Link
              href="/#projects"
              className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/#resources"
              className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md text-sm font-medium"
            >
              Resources
            </Link>
            {/* <Button className="ml-4 bg-blue-500 text-white hover:bg-blue-600">Join Us</Button> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

