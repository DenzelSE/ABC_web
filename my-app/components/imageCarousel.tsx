"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = [
  {
    src: "/event-1.jpg",
    alt: "Blockchain Workshop",
    caption: "Our recent blockchain fundamentals workshop",
  },
  {
    src: "/event-2.jpg",
    alt: "Hackathon",
    caption: "Africa's Blockchain Hackathon 2023",
  },
  {
    src: "/class-1.jpg",
    alt: "Smart Contract Development Class",
    caption: "Learning Solidity for smart contract development",
  },
  {
    src: "/event-3.jpg",
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
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-md">
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

