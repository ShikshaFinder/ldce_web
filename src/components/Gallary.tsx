import React, { useState } from "react";

const images = [
  { id: 1, src: "/Images/1.jpg", category: "All" },
  { id: 2, src: "/Images/2.jpg", category: "All" },
  { id: 3, src: "/Images/3.jpg", category: "All" },
  { id: 4, src: "/Images/4.jpg", category: "All" },
  { id: 5, src: "/Images/5.jpg", category: "Sports" },
  { id: 6, src: "/Images/6.jpg", category: "Sports" },
  { id: 7, src: "/Images/7.jpg", category: "Sports" },
  { id: 8, src: "/Images/8.jpg", category: "Sports" },
  { id: 9, src: "/Images/9.jpg", category: "Department" },
  { id: 10, src: "/Images/10.jpg", category: "Department" },
  { id: 11, src: "/Images/11.jpg", category: "Department" },
  { id: 12, src: "/Images/12.jpg", category: "Department" },
  { id: 13, src: "/Images/13.jpg", category: "Department" },
  { id: 14, src: "/Images/14.jpg", category: "Cultural Events" },
  { id: 15, src: "/Images/15.jpg", category: "Cultural Events" },
  { id: 16, src: "/Images/16.jpg", category: "Cultural Events" },
  { id: 17, src: "/Images/17.jpg", category: "Cultural Events" },
  { id: 18, src: "/Images/18.jpg", category: "Cultural Events" },
  { id: 19, src: "/Images/19.jpg", category: "Cultural Events" },
];

const categories = ["All", "Department", "Sports", "Cultural Events"];

function Gallary() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images.filter((image) => image.category === "All")
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 ">
      <div className="mx-auto text-center mb-8" style={{ maxWidth: 900 }}>
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          LDCE Campus Life
        </h1>

        <p className="text-lg mb-0 text-gray-600">
          LDCE has a vibrant campus with diverse activities and events.
        </p>

        {/* <h1 className="text-4xl font-bold mb-4">LDCE CAMPUS LIFE</h1> */}
        {/* <p className="text-base mb-0">LDCE HAS A VIBRANT CAMPUS</p> */}
      </div>

      {/* Category Filter Buttons */}
      <div className="flex justify-center space-x-2 md:space-x-7 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2  py-2 text-xs rounded-lg md:px-4 md:text-xl transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden shadow-lg group rounded-xl"
          >
            <img
              src={image.src}
              alt={`Image ${image.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy" // Enable lazy loading
              onError={(e) => {
                const target = e.target as HTMLImageElement; // Cast to HTMLImageElement
                target.src = "Images/12.png";
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-center">
                <h3 className="text-white text-lg font-bold">
                  {image.category}
                </h3>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition duration-300"
                >
                  View Details <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
            {/* Background Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-blue-800 bg-opacity-70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {/* Text Container */}
              <div className="text-center">
                <h3 className="text-white text-lg font-bold">LDCE Campus</h3>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition duration-300"
                >
                  View All Place <i className="fa fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallary;
