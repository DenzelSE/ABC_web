"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Research Paper",
    content: "CEX or DEX? The FTX collapse disruption!: Story behind one of the biggest scams in history.",
    image: "/whatsTheMove/sam6.png",
    btn1: { text: "Learn More", link: "https://medium.com/@africablockchainclub/cex-or-dex-the-ftx-collapse-disruption-f20a863f416a" },
  },
  {
    id: 2,
    title: "Research Paper",
    content: "Unlocking Value in Web3 Gaming: What is GameFi? And why is it a game you might want to play.",
    image: "/whatsTheMove/game.png", 
    btn1: { text: "Discover", link: "https://medium.com/@africablockchainclub/unlocking-value-in-web3-gaming-e92401d553ff" },
  },
  {
    id: 3,
    title: "Shape the Future",
    content: "Be a part of Africa's digital transformation.",
    image: "/images/slide3.jpg",
    btn1: { text: "Get Involved", link: "/involved" },
  },
];

export default function FullScreenVerticalCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [clicked, setClicked] = useState(false);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      nextSlide(); // Scroll down
    } else {
      prevSlide(); // Scroll up
    }
  };

  const handleButtonClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeSlide].id}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image without overlay */}
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage: `url(${slides[activeSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Title and content */}
            <div
              className="absolute flex flex-col items-end text-white"
              style={{
                bottom: "1cm",  // Positioning from the bottom
                right: "4cm",   // Positioning from the right
              }}
            >
              <h2 className="text-5xl font-bold text-shadow">{slides[activeSlide].title}</h2>
              <p className="text-lg mt-4 max-w-xs text-shadow">{slides[activeSlide].content}</p>
              <div className="mt-6 flex gap-4 flex-col items-center sm:items-end">
                <a
                  href={slides[activeSlide].btn1.link}
                  className={`bg-white text-black px-4 py-2 rounded-md transition-all duration-300 ${clicked ? "animate-pulse" : ""}`}
                  onClick={handleButtonClick}
                >
                  {slides[activeSlide].btn1.text}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
