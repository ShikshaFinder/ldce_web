import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

interface newsData {
  id: number;
  heading: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

function News() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsData, setNewsData] = useState<newsData[]>([]);
  console.log(newsData);
  async function NewsFetch() {
    try {
      const response = await fetch("https://stag-api.ldce.ac.in/api/news", {
        headers: {
          Authorization: "Bearer PMAT-01JA56ABRBF4HP439YQRKVCF2C",
        },
      });
      const data = await response.json();
      setNewsData(data.data);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  }

  useEffect(() => {
    NewsFetch();
  }, []);

  const totalSlides = newsData.length;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-10 text-center">
      <div className="relative">
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="w-full border-t border-blue-400"></div>
        </span>
        <h2 className="relative text-xl font-bold mx-4 text-blue-500 px-2 bg-white inline-block">
          NEWS
        </h2>
      </div>
      <h1 className="text-4xl font-bold mt-0 mb-10">Latest News</h1>

      <div className="flex justify-between">
        <button className="btn btn-circle ml-12 mb-2" onClick={prevSlide}>
          ❮
        </button>
        <button className="btn btn-circle mr-12 mb-2" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="flex justify-center">
        <div className="carousel w-full mx-10">
          {newsData.map((news, index) => (
            <div
              id={`slide${index + 1}`}
              className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              key={index}
            >
              <div className="card bg-base-100 border border-gray-300 shadow-md mx-2 flex flex-col h-full">
                <figure>
                  <Image
                    src={"/Images/13.jpg"}
                    alt="News Image"
                    width={400}
                    height={300}
                    className="w-full object-cover h-100 transition-transform duration-300 transform hover:scale-110"
                  />
                </figure>
                <div className="card-body flex flex-col overflow-y-auto max-h-60 flex-grow bg-[#f2f2f2]">
                  <div>
                    <p className="text-left overflow-auto">
                      {news.description}
                    </p>
                    <div className="card-actions w-full"></div>
                  </div>
                </div>
                <div className="mt-auto">
                  <button className="btn w-full mb-0 bg-blue-800 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
