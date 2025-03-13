"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Just checking if the page is scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80 sticky top-0 z-50"
    >
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
                className="text-xl font-bold text-black hidden sm:inline"
              >
                Africa's Blockchain Club
              </span>
            </Link>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex items-center gap-2">
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-black hover:bg-transparent"
              >
                About
              </Button>
            </Link>

            <Link href="/#events">
              <Button
                variant="ghost"
                className="text-black hover:bg-transparent"
              >
                Events
              </Button>
            </Link>

            <Link href="/projects">
              <Button
                variant="ghost"
                className="text-black hover:bg-transparent"
              >
                Projects
              </Button>
            </Link>

            <Link href="/#resources">
              <Button
                variant="ghost"
                className="text-black hover:bg-transparent"
              >
                Resources
              </Button>
            </Link>

            <Link href="/vision">
              <Button
                variant="ghost"
                className="text-black hover:bg-transparent"
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
