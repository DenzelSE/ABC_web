import Image from "next/image";
import Hero from "../components/Hero";
import { ImageCarousel } from "@/components/imageCarousel";
import About from "@/components/About";

export default function Home() {
  return ( 
    <>
    <Hero />
    <div className="py-12 bg-gray-50">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">Our Activities</h2>
        <ImageCarousel />
      </div>
      <About/>
    </>
  );
}
