"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    src: "/abc_events/1.JPG",
    alt: "Blockchain Workshop",
    caption: "Our recent blockchain fundamentals workshop",
  },
  {
    src: "/abc_events/2.jpg",
    alt: "Hackathon",
    caption: "Africa's Blockchain Hackathon 2023",
  },
  {
    src: "/abc_events/5.jpg",
    alt: "Smart Contract Development Class",
    caption: "Learning Solidity for smart contract development",
  },
  {
    src: "/abc_events/6.jpg",
    alt: "Web3 Conference",
    caption: "Our team at the African Web3 Conference",
  },
]

export function ImageCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl text-center mb-12 pt-10">Our Activities</h2>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#D8CFC4] text-black p-4 rounded-b-md">
                      <p className="text-lg text-center">{image.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

