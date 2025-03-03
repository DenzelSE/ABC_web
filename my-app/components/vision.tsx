"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  { id: 1, title: "Slide 1", content: "Welcome to the future of Web3 in Africa.", bg: "bg-blue-600" },
  { id: 2, title: "Slide 2", content: "Explore decentralized innovations.", bg: "bg-purple-600" },
  { id: 3, title: "Slide 3", content: "Join the movement towards blockchain adoption.", bg: "bg-orange-600" },
];

export default function FullScreenVerticalCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[activeSlide].id}
          className={`absolute inset-0 flex flex-col justify-center items-center text-white text-center ${slides[activeSlide].bg}`}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold">{slides[activeSlide].title}</h2>
          <p className="text-lg mt-4">{slides[activeSlide].content}</p>
          <div className="mt-6 flex gap-4">
            <button onClick={prevSlide} className="bg-white text-black px-4 py-2 rounded-md">Prev</button>
            <button onClick={nextSlide} className="bg-white text-black px-4 py-2 rounded-md">Next</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
