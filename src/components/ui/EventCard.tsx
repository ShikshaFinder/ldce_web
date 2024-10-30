import React from "react";

function EventCard({
  img,
  link,
  name,
  discription,
}: {
  img: string;
  link: string;
  name: string;
  discription: string;
}) {
  return (
    <div className="relative group" style={{ height: '500px' }}>
      <img
        src={img}
        className="w-full object-cover h-full"
        alt="image related with events"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
        <a
          href={link}
          className="text-xl font-bold text-white mb-2 hover:text-primary"
        >
          {name}
        </a>
        <p className="text-white text-center mb-4">{discription}</p>
        <a
          className="btn-hover-bg bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80"
          href={link}
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default EventCard;
