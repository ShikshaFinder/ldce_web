"use client"
import React, { useState, useEffect } from "react";
import EventCard from "./ui/EventCard";

function Events() {
  interface Event {
    id: number;
    name: string;
    description: string;
    venue: string;
    event_date: string;
    event_time: string;
    reg_url: string;
    cover_image: string | null;
    brochure: string;
    department_id: string | null;
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3; // Show 3 items per slide
  const totalSlides = Math.ceil(events.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  async function eventsFetch() {
    try {
      const response = await fetch("https://stag-api.ldce.ac.in/api/events", {
        headers: {
          Authorization: "Bearer PMAT-01JA56ABRBF4HP439YQRKVCF2C",
        },
      });
      const data = await response.json();
      setEvents(data.data);
    } catch (error) {
      console.log("Error fetching events:", error);
    }
  }

  useEffect(() => {
    eventsFetch();
  }, []);

  return (
    <div className="py-10 px-1 md:px-19 text-center">
      {/* <h1 className="text-4xl font-bold mt-0 mb-10">Events Calander</h1> */}

      <div className="flex justify-center mb-2">
        <button
          className="btn btn-circle absolute left-0 ml-4"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="btn btn-circle absolute right-0 mr-4"
          onClick={nextSlide}
        >
          ❯
        </button>
        <div className=" mr-4">
          <hr />
          <h1 className="text-4xl font-bold mt-0 mb-10">Events Calander</h1>
        </div>
      </div>
      <hr className="border-blue-700 mb-4" />

      <div className="carousel w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${(events.length / itemsPerSlide) * 100}%`,
          }}
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              className="w-1/3 flex-shrink-0 p-4"
              style={{
                maxWidth: `${100 / itemsPerSlide}%`,
              }}
            >
              <EventCard
                img={event.cover_image || "/Achivement_img4.jpeg"}
                link={event.reg_url}
                name={event.name}
                discription={event.description || "No description available."}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
