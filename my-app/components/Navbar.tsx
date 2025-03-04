"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          <div className="flex items-center gap-2">
            <Link href="/#about">
              <Button
                variant="ghost"
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:bg-[#AFAFAF]`}
              >
                About
              </Button>
            </Link>

            <Link href="/#events">
              <Button
                variant="ghost"
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:bg-[#AFAFAF]`}
              >
                Events
              </Button>
            </Link>

            <Link href="/#projects">
              <Button
                variant="ghost"
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:bg-[#AFAFAF]`}
              >
                Projects
              </Button>
            </Link>

            <Link href="/#resources">
              <Button
                variant="ghost"
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:bg-[#AFAFAF]`}
              >
                Resources
              </Button>
            </Link>

            <Link href="/vision">
              <Button
                variant="ghost"
                className={`${
                  scrolled ? "text-black" : "text-white"
                } hover:bg-[#AFAFAF]`}
              >
                Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
