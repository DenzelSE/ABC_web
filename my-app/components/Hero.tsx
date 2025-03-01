import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Hero() {
  return (
    // <div className="relative overflow-hidden bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] via-purple-50 to-orange-50">
    <div className="relative overflow-hidden bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80 via-purple-50 to-orange-50">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block">
              <p className="mb-4 inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                The Future of Web3 in Africa
              </p>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E2E2E] to-[#4A4A4A]">
              Building Africa's
              <span className="block">Blockchain Future</span>
            </h1>
            <p className="mt-6 text-xl max-w-3xl text-gray-600">
              Join our community of passionate developers and innovators shaping the decentralized web across Africa.
            </p>
            <div className="mt-10 flex gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#4A4A4A] hover:bg-[#D8CFC4] to-[#AFAFAF] text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="bg-[#4A4A4A] hover:bg-[#D8CFC4] to-[#AFAFAF] text-white">
                Learn More
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src="/ABC_logo.jpg"
                alt="Africa's Blockchain Club"
                layout="fill"
                className="relative z-10 rounded-[12px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
