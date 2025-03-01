"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo & Title */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src="/background/bg3.png"
                alt="Logo"
                width={45} 
                height={45}
              />
              <span
                className={`text-xl font-bold ${
                  scrolled ? "text-black" : "text-white"
                } hidden sm:inline`}
              >
                Africa's Blockchain Club
              </span>
            </Link>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/#about"
              className={`${
                scrolled ? "text-black" : "text-white"
              } text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-[#AFAFAF]`}
            >
              About
            </Link>
            <Link
              href="/#events"
              className={`${
                scrolled ? "text-black" : "text-white"
              } text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-[#AFAFAF]`}
            >
              Events
            </Link>
            <Link
              href="/#projects"
              className={`${
                scrolled ? "text-black" : "text-white"}
              text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-[#AFAFAF]`}
            >
              Projects
            </Link>
            <Link
              href="/#resources"
              className={`${
                scrolled ? "text-black" : "text-white"
              } text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-[#AFAFAF]`}
            >
              Resources
            </Link>
            <Link
              href="/#blogs"
              className={`${
                scrolled ? "text-black" : "text-white"}
              text-foreground/80 hover:text-foreground px-2 py-2 rounded-md text-sm font-medium hover:bg-[#AFAFAF]`}
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
