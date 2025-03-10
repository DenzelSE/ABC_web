"use client";

import { useState, useEffect } from "react";

const carouselItems = [
  { id: "item1", title: "Item 1", imageUrl: "/whatsTheMove/sam6.png", link: "/page1" },
  { id: "item2", title: "Item 2", imageUrl: "/whatsTheMove/gameMel.png", link: "/page2" },
  { id: "item3", title: "Item 3", imageUrl: "/projects/BioHealth.jpg", link: "/page3" },
  { id: "item4", title: "Item 4", imageUrl: "/images/item4.jpg", link: "/page4" },
  { id: "item5", title: "Item 5", imageUrl: "/images/item5.jpg", link: "/page5" },
  { id: "item6", title: "Item 6", imageUrl: "/images/item6.jpg", link: "/page6" },
];

// Duplicate items for seamless looping
const extendedItems = [...carouselItems, ...carouselItems];

const Home = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {extendedItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imageUrl} alt={item.title} className="carousel-image" />
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
          padding: 20px 0; /* Add some padding */
        }

        .carousel {
          display: flex;
          animation: scroll 6s linear infinite;
          width: calc(250px * ${extendedItems.length}); /* Medium size */
        }

        .carousel-item {
          min-width: 250px; /* Balanced image size */
          height: 180px; /* Adjust height */
          margin: 0 15px; /* Adds spacing between images */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
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

export default Home;
