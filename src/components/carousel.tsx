// components/Carousel.js
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const slides = [
    {
      img: "https://wsrv.nl/?url=https://ldce-web-nine.vercel.app/carousel/carousel-0.jpg&w=1920&h=1080&fit=cover",
      title: "SAFEGUARD YOUR FUTURE",
      description:
        "L.D.C.E has been providing the world with proficient engineers since 1952.",
    },
    {
      img: "https://wsrv.nl/?url=https://ldce-web-nine.vercel.app/carousel/carousel-1.jpg&w=1920&h=1080&fit=cover",
      title: "SAFEGUARD YOUR FUTURE",
      description:
        "L.D.C.E has been providing the world with proficient engineers since 1952.",
    },
    {
      img: "https://wsrv.nl/?url=https://ldce-web-nine.vercel.app/carousel/carousel-2.jpg&w=1920&h=1080&fit=cover",
      title: "SAFEGUARD YOUR FUTURE",
      description:
        "L.D.C.E has been providing the world with proficient engineers since 1952.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
              <div className="text-white">
                <h5 className="text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h5>
                <br />
                <p className="font-light text-lg md:text-xl">
                  {slide.description}
                </p>
                <div className="flex items-center justify-center mt-5 pb-9">
                    <a
                    className="btn rounded-pill text-white py-3 px-5"
                    href="#explorenow"
                    style={{ backgroundColor: '#1E40AF' }}
                    >
                    Explore Now
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={goToPrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-transparent p-3 rounded-full focus:outline-none hover:bg-gray-400 hover:text-black"
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        onClick={goToNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-transparent p-3 rounded-full focus:outline-none hover:bg-gray-400 hover:text-black"
      >
        &#10095; {/* Right Arrow */}
      </button>
    </div>
  );
};

export default Carousel;
