"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current route
  const hideLayoutOn = ["/vision"]; // Pages where Navbar & Footer are hidden

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayoutOn.includes(pathname) && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayoutOn.includes(pathname) && <Footer />}
    </div>
  );
}
