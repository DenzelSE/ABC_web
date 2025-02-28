"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-xl font-bold text-foreground hidden sm:inline">Africa's Blockchain Club</span>
            </Link>
          </div>
          <div className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/#about"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              About
            </Link>
            <Link
              href="/#events"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Events
            </Link>
            <Link
              href="/#projects"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Projects
            </Link>
            <Link
              href="/#resources"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Resources
            </Link>
            <Link
              href="/#resources"
              className="text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-blue-500"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default  Navbar;

