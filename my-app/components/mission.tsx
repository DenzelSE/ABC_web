"use client"; // Make sure it's a Client Component

import * as React from "react";
import Image from "next/image";

export default function FullscreenCarousel() {
  return (
    <div className="flex min-h-screen justify-center gap-8 bg-gradient-to-r from-[#D8CFC4] to-[#AFAFAF] opacity-80">
      {/* Island 1 */}
      <div className="min-w-[400px] max-w-[600px] h-full bg-[#D1D1D1] flex flex-col items-center justify-center text-white snap-start pt-16 pb-10 rounded-2xl overflow-hidden">
        {/* Image on top */}
        <div className="w-64 h-64 mb-6 rounded-full overflow-hidden">
          <Image
            src="/ABC.png" 
            alt="ABC Spirit Animal"
            width={300}
            height={300}
          />
        </div>
        
        {/* Heading */}
        <dt className="text-5xl font-Plush text-gray-900 text-center">
          Our
        </dt>
        <dt className="text-5xl font-Plush text-gray-900 text-center mt-4">
          Mission
        </dt>
        
        {/* Paragraph below the heading */}
        <dd className="mt-6 text-xl font-Plush text-gray-700 text-center max-w-xl px-4">
          To empower developers with the knowledge and tools needed to build the decentralized future of Africa.
        </dd>
      </div>

      {/* Island 2 */}
      <div className="min-w-[400px] max-w-[600px] h-full bg-[#D1D1D1] flex flex-col items-center justify-center text-white snap-start pt-16 pb-10 rounded-2xl overflow-hidden">
        {/* Image on top */}
        <div className="w-64 h-64 mb-6 rounded-full overflow-hidden">
          <Image
            src="/background/bg1.png" 
            alt="ABC Spirit Animal"
            width={300}
            height={300}
          />
        </div>
        
        {/* Heading */}
        <dt className="text-5xl font-Plush text-gray-900 text-center">
          Our
        </dt>
        <dt className="text-5xl font-Plush text-gray-900 text-center mt-4">
          Vision
        </dt>
        
        {/* Paragraph below the heading */}
        <dd className="mt-6 text-xl font-Plush text-gray-700 text-center max-w-xl px-4">
          A world where blockchain technology is accessible to all and drives positive change in African societies.
        </dd>
      </div>
    </div>
  );
}
