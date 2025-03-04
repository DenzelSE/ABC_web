import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Utility for handling Tailwind classes if needed

const resources = [
  {
    image: "/Covers/2.png",
    link: "/partners",
    alt: "Partner With Us",
    width: 1400,  // Your image's natural width
    height: 1000, // Your image's natural height
  },
  {
    image: "/Covers/4.png",
    link: "/developers",
    alt: "Hire a Developer",
    width: 1400,  // Your image's natural width
    height: 1000, // Your image's natural height
  },
  {
    image: "/Covers/6.png",
    link: "/researchers",
    alt: "Work with a Researcher",
    width: 1400,  // Your image's natural width
    height: 1000, // Your image's natural height
  },
];

export default function Partner() {
  return (
    <div id="resources" className="py-24 bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80">
      <h2 className="text-3xl font-extrabold sm:text-4xl text-center mb-12 bg-clip-text text-transparent bg-black">
         Partnerships
        </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 items-center">
        {resources.map((resource, index) => (
          <Link key={index} href={resource.link} className="group relative block w-full">
            <Image
              src={resource.image}
              alt={resource.alt}
              width={resource.width}  
              height={resource.height} 
              className="object-cover rounded-xl shadow-xl transition-transform group-hover:scale-110 group-hover:animate-pulse"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
