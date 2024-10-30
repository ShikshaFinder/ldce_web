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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
      <div className="mb-4">
        <a
        href={link}
        className="text-3xl text-left font-bold text-white mb-2 block"
        >
        {name}
        </a>
        <p className="text-white text-left">{discription}</p>
      </div>
      <a
        className="btn-hover-bg bg-primary text-white py-2 px-4 rounded transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
        href={link}
      >
        Read More
      </a>
      </div>
    </div>
  );
}

export default EventCard;
