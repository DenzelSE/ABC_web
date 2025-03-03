"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
import Image from "next/image";


export default function FullscreenCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFullscreen) {
          setIsFullscreen(true); // Activate fullscreen when the trigger element is visible
        } else if (!entry.isIntersecting && isFullscreen) {
          setIsFullscreen(false); // Deactivate fullscreen when it's no longer in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the trigger element is visible
    );

    const target = document.getElementById("carousel-trigger");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, [isFullscreen]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Exit fullscreen after scrolling past a certain threshold
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Normal content before carousel */}
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <h1 className="text-4xl">Scroll Down to Enter Fullscreen Carousel</h1>
      </div>

      {/* Larger trigger section for better detection */}
      <div id="carousel-trigger" className="h-[100px] bg-transparent"></div>

      {/* Fullscreen Carousel */}
      <div
        ref={emblaRef}
        className={cn(
          "fixed top-0 left-0 w-screen h-screen transition-all duration-700 ease-in-out z-50", // Ensure full-screen carousel on top
          isFullscreen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}
      >
        <div className="overflow-hidden w-full h-full">
          {/* Horizontal scroll container */}
          <div
            className="flex w-full h-full overflow-x-auto snap-x snap-mandatory"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {/* Slide 1 with different background and text */}
            <div className="min-w-full h-full bg-[#D1D1D1] flex flex-col items-center justify-center text-white snap-start pt-20">
            {/* Heading */}
            <dt className="text-7xl font-Plush text-gray-900 text-center" style={{ position: 'absolute', top: '7cm', left: '40%', transform: 'translateX(-50%)' }}>
                Our
            </dt>
            <dt className="text-7xl font-Plush text-gray-900 text-center" style={{ position: 'absolute', top: '7cm', left: '65%', transform: 'translateX(-50%)' }}>
                Mission
            </dt>            
            {/* Paragraph below the heading */}
            <dd className="mt-6 text-2xl font-Plush text-gray-700 text-center max-w-xl">
              To empower developers with the knowledge and tools needed to build the decentralized future of Africa.
            </dd>
          </div>
          <div className="fixed left-1/2 transform -translate-x-1/2" style={{ top: '3cm' }}>
            <div className="w-64 h-64">
              <Image
                src="/background/bg1.png" 
                alt="ABC Spirit Animal"
                width={300}
                height={300}
              />
            </div>
          </div>
          
            {/* Slide 2 with different background and text */}
            <div
              className="min-w-full h-full bg-green-500 flex items-center justify-center text-white text-4xl snap-start"
            >
              Slide 2 - Background Green
            </div>
            {/* Slide 3 with random text */}
            <div
              className="min-w-full h-full bg-red-500 flex items-center justify-center text-white text-4xl snap-start"
            >
              Slide 3 - Background Red
            </div>
            {/* Slide 4 with random text */}
            <div
              className="min-w-full h-full bg-yellow-500 flex items-center justify-center text-white text-4xl snap-start"
            >
              Slide 4 - Background Yellow
            </div>
            {/* Slide 5 with random text */}
            <div
              className="min-w-full h-full bg-purple-500 flex items-center justify-center text-white text-4xl snap-start"
            >
              Slide 5 - Background Purple
            </div>
          </div>
        </div>
      </div>

      {/* Exiting fullscreen after scrolling */}
      {hasScrolled && !isFullscreen && (
        <div className="text-center p-4">
          <h2 className="text-xl">You Scrolled Out of Fullscreen Mode!</h2>
        </div>
      )}
    </div>
  );
}
