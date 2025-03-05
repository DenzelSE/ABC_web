import Link from "next/link";
import Image from "next/image";

const resources = [
  {
    link: "/partners",
    label: "Partner With Us",
    image: "/Covers/handshake2.png",
    width: 1200,
    height: 400,
    imageWidth: 400,
    imageHeight: 400,
  },
  {
    link: "/developers",
    label: "Hire a Developer",
    image: "/Covers/com1.png",
    width: 1200,
    height: 400,
    imageWidth: 300,
    imageHeight: 300,
  },
  {
    link: "/researchers",
    label: "Work with a Researcher",
    image: "/Covers/data.png",
    width: 1200,
    height: 400,
    imageWidth: 400,
    imageHeight: 400,
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
          <Link key={index} href={resource.link}>
            <button
              className="w-full flex flex-col items-center justify-center rounded-xl shadow-xl transition-transform group-hover:scale-110 group-hover:animate-pulse bg-[#AFAFAF] text-white font-bold py-6 relative"
              style={{ width: resource.width, height: resource.height }}
            >
              <Image 
                src={resource.image} 
                alt={resource.label} 
                width={resource.imageWidth} 
                height={resource.imageHeight}  
                className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
              />
              <span className="absolute bottom-6 text-2xl font-bold text-white">{resource.label}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
