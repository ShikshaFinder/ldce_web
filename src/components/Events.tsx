import React, { useState, useEffect } from "react";
import Image from "next/image";

function Events() {
  interface Event {
    id: number;
    name: string;
    description: string;
    venue: string;
    event_date: string;
    event_time: string;
    reg_url: string;
    cover_image: string;
    brochure: string;
    department_id: string | null;
  }

  const [events, setEvents] = useState<Event[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = events.length;
  const baseURL = "https://stag-api.ldce.ac.in/"; // Assuming this is your API's base URL

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  async function eventsFetch() {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Origin", "localhost:8000");
    myHeaders.append(
      "Cookie",
      "XSRF-TOKEN=eyJpdiI6IkhIaWdiQ1RrZENKTEFRR2VBWHdJYmc9PSIsInZhbHVlIjoiNU1DZmh0SHVLZytjRTFMZ3Q4UGhqWWVDMmdtSHhXNWtNYjE2QmsvYlcyNzVYYVVKNmtTYnJjNUx0VjB5dHdaL3VQbXQxbVdOMlU3V25pQ3lzeGpTTE43OVB3NVRia2lnV2VyMGNSdjRBZkFTcC9xa1U4NVRuWEpVM1dCT3l2em0iLCJtYWMiOiI0NDlkZjNiYWNlZTc5ODAxZTk0Y2I5OTlkYmE4ZDg1NzlhNGU5NTNjZTI5NThhZTRhOWZkOTRlZmNiYmI0NzIxIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IlpHV2RqRXFmTlZ2bHFrZzFia3pDNGc9PSIsInZhbHVlIjoiRVNtemcyTkRacGtNQjlEanZFRTdaT3NvRUtFRXl2MVpLeG1NaDFZQ2NBVldxb0NHN0JhVkhWVGdNOWpmaWVlQWtKQzAxOE00ckZmNDlHclQ1cDlRN3FkNEpkaFVMcC9Wak52WFhpQTBYYnlKSWFScmoySWs2WC9GQldUMThVKzkiLCJtYWMiOiI4OGUyYTM1MGI0ODY4YjRjNTVjNzAyZDcyNTY1Njk0OTk2NjAxMTA0YTc2MjAxYmNhNDY1Y2ZhZmJmOWJhNWFkIiwidGFnIjoiIn0%3D"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as RequestRedirect,
    };

    try {
      const response = await fetch(
        "https://stag-api.ldce.ac.in/api/events",
        requestOptions
      );
      const result = await response.json();

      if (result.status && result.data) {
        const formattedEvents = result.data.map((event: Event) => ({
          ...event,
          cover_image: `${baseURL}${event.cover_image}`,
        }));
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  }

  useEffect(() => {
    eventsFetch();
  }, []);

  return (
    <div className="py-10 text-center">
      <div className="relative">
        <span className="absolute inset-0 flex items-center justify-center">
          <div className="w-full border-t border-blue-400"></div>
        </span>
        <h2 className="relative text-xl font-bold mx-4 text-blue-500 px-2 bg-white inline-block">
          Events
        </h2>
      </div>
      <h1 className="text-4xl font-bold mt-0 mb-10">Latest Events</h1>

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
          {events.map((event, index) => (
            <div
              className="carousel-item w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              key={event.id}
            >
              <div className="card bg-base-100 border border-gray-300 shadow-md mx-2 flex flex-col h-full">
                <figure>
                  <Image
                    src={event.cover_image}
                    alt="Event Image"
                    width={400}
                    height={300}
                    className="w-full object-cover h-100 transition-transform duration-300 transform hover:scale-110"
                  />
                </figure>
                <div className="card-body flex flex-col overflow-y-auto max-h-60 flex-grow bg-[#f2f2f2]">
                  <h3 className="text-lg font-bold">{event.name}</h3>
                  <p className="text-left">{event.description}</p>
                  <p className="text-left text-sm">Venue: {event.venue}</p>
                  <p className="text-left text-sm">
                    Date: {event.event_date} | Time: {event.event_time}
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href={event.reg_url}
                    className="btn w-full mb-0 bg-blue-800 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
