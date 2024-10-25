import React, { useState } from 'react'
import Image from 'next/image';


function News() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const newsData = [
    {
      imageSrc: "/news1.jpeg",
      date: '16 DEC 2023',
      title: 'Latest News Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageSrc: '/news1.jpeg',
      date: '15 DEC 2023',
      title: 'Latest News Title 2',
      description: 'Nunc luctus, metus vitae ultricies tincidunt, ex sapien gravida nulla.',
    },
    {
      imageSrc: '/news1.jpeg',
      date: '14 DEC 2023',
      title: 'Latest News Title 3',
      description: 'Mauris tincidunt felis ut dui tincidunt, nec ultrices neque cursus.',
    },
    {
      imageSrc: '/news1.jpeg',
      date: '14 DEC 2023',
      title: 'Latest News Title 3',
      description: 'Mauris tincidunt felis ut dui tincidunt, nec ultrices neque cursus.',
    },
    {
      imageSrc: '/news1.jpeg',
      date: '14 DEC 2023',
      title: 'Latest News Title 3',
      description: 'Mauris tincidunt felis ut dui tincidunt, nec ultrices neque cursus.',
    },
    {
      imageSrc: '/news1.jpeg',
      date: '14 DEC 2023',
      title: 'Latest News Title 3',
      description: 'Mauris tincidunt felis ut dui tincidunt, nec ultrices neque cursus.',
    },
    // Add more news items here
  ];

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
    <h2 className="relative text-xl font-bold mx-4 text-blue-500 px-2 bg-white inline-block">NEWS</h2>
  </div>
    <h1 className="text-4xl font-bold mt-0 mb-10">Latest News</h1>

    <div className="flex justify-between">
    <button className="btn btn-circle ml-12 mb-2" onClick={prevSlide}>❮</button>
    <button className="btn btn-circle mr-12 mb-2" onClick={nextSlide}>❯</button>
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
                  src={news.imageSrc}
                  alt="News Image"
                  width={400}
                  height={300}
                  className="w-full object-cover h-100 transition-transform duration-300 transform hover:scale-110"
                />
              </figure>
              <div className="card-body flex flex-col overflow-y-auto max-h-60 flex-grow bg-[#f2f2f2]">
                <div>
                <p className='text-left overflow-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis nesciunt numquam veniam nihil, repellat nemo eius soluta non nostrum.</p>
                  <div className="card-actions w-full"></div>
                </div>
              </div>
              <div className="mt-auto">
                    <button className="btn w-full mb-0 bg-blue-800 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">Read More</button>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  

  </div>
  


  );
};

export default News