import Image from "next/image";
import Hero from "../components/Hero";
import { ImageCarousel } from "@/components/imageCarousel";
import About from "@/components/About";
import Features from "@/components/Features";
import Events from "@/components/Events";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80 ">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">Our Activities</h2>
        <ImageCarousel />
      </div>
      <Features />
      <About />
      <Events />
      <Resources />

      <div className="fixed bottom-4 right-4 flex items-center space-x-2">
        <div className="w-12 h-12">
          <Image
            src="/background/bg1.png" 
            alt="ABC Spirit Animal"
            width={50}
            height={50}
          />
        </div>

        <span className="text-xl font-bold text-gray-900">ABC</span>
      </div>
    </>
  );
}
