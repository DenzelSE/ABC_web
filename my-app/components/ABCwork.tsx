"use client";

import Image from "next/image"; 
import { useRouter } from "next/navigation"; 
import { useState } from "react";

const carouselItems = [
  { id: "item1", title: "Item 1", imageUrl: "/Covers/samCover.jpg", link: "/vision" },
  { id: "item2", title: "Item 2", imageUrl: "/research/gameMel.png", link: "/vision" },
  { id: "item3", title: "Item 3", imageUrl: "/projects/BioHealth.jpg", link: "/page3" },
  { id: "item4", title: "Item 4", imageUrl: "/research/bybit.jpg", link: "/vision" },
  { id: "item5", title: "Item 5", imageUrl: "/research/placeholder.jpg", link: "/page5" },
  { id: "item6", title: "Item 6", imageUrl: "/research/placeholder.jpg", link: "/page6" },
];

const extendedItems = [...carouselItems, ...carouselItems];

const ImageCarousel = () => {
  const router = useRouter();
  const [loadedImages, setLoadedImages] = useState({});

  const handleClick = (link) => {
    router.push(link);
  };

  const handleMouseEnter = () => {
    document.querySelector(".carousel").style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    document.querySelector(".carousel").style.animationPlayState = "running";
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="carousel-container">
      <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {extendedItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div
              className="image-container"
              onClick={() => handleClick(item.link)}
            >
              {/* Only show the image when it's loaded */}
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                fill={true} 
                className={`carousel-image object-cover transition-opacity duration-500 ${
                  loadedImages[item.id] ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => handleImageLoad(item.id)}
              />
              <div className="image-text">
                <p className="text">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
        }

        .carousel {
          display: flex;
          animation: scroll 6s linear infinite;
          width: calc(250px * ${extendedItems.length});
        }

        .carousel-item {
          min-width: 220px;
          height: 200px;
          margin: 0 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .image-container {
          width: 220px;
          height: 200px;
          border-radius: 10%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          position: relative;
        }

        .carousel-image {
          object-fit: cover;
          transition: opacity 0.5s ease-in-out;
        }

        .image-text {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          text-align: center;
          padding: 5px;
          border-bottom-left-radius: 10%;
          border-bottom-right-radius: 10%;
        }

        .text {
          margin: 0;
          font-size: 14px;
          font-weight: bold;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
