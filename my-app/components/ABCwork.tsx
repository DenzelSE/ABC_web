"use client";

import Image from "next/image"; // Import the Image component

const carouselItems = [
  { id: "item1", title: "Item 1", imageUrl: "/research/sam6.png", link: "/page1" },
  { id: "item2", title: "Item 2", imageUrl: "/research/gameMel.png", link: "/page2" },
  { id: "item3", title: "Item 3", imageUrl: "/projects/BioHealth.jpg", link: "/page3" },
  { id: "item4", title: "Item 4", imageUrl: "/research/bybit.jpg", link: "/page4" },
  { id: "item5", title: "Item 5", imageUrl: "/research/placeholder.jpg", link: "/page5" },
  { id: "item6", title: "Item 6", imageUrl: "/research/placeholder.jpg", link: "/page6" },
];

const extendedItems = [...carouselItems, ...carouselItems];

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {extendedItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="image-container">
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                className="carousel-image" 
                width={220}  // Specify width
                height={220} // Specify height (same value for square shape)
              />
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
          width: calc(250px * ${extendedItems.length}); /* Width based on item count */
        }

        .carousel-item {
          min-width: 250px;
          height: 250px; /* Set consistent height for each image container */
          margin: 0 15px; /* Space between images */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          width: 250px; /* Ensure image container has consistent size */
          height: 250px;
          border-radius: 40%; /* Make the container rounded */
          overflow: hidden; /* Hide any overflow */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .carousel-image {
          object-fit: cover; /* Ensure images cover the container's area */
          width: 100%;
          height: 100%;
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
