import React from "react";
import Image from "next/image";

const InnovationResearchPatents = () => {
  return (
    <div className=" my-12">
      <div className="container-fluid py-5 px-5 md:px-16 bg-slate-200">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: "800px" }}
          >
            <hr className="border-gray-300 mb-4" />
            <h1 className="mb-0 text-blue-900 text-4xl font-extrabold tracking-tight leading-tight">
              Innovation, Research &amp; Patents
            </h1>
            <hr className="border-blue-400 mt-7 " />{" "}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative group">
              <Image
                src="/Images/startup.jpg"
                className="w-full object-cover h-75"
                alt="Startups"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="text-xl font-bold text-white mb-2 hover:text-primary"
                >
                  Startups
                </a>
                <p className="text-white text-center mb-4">
                  More than 10 startups are registered with the MCA.
                </p>
                <a
                  className="btn-hover-bg bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative group">
              <Image
                src="/Images/patents.jpg"
                className="w-full object-cover h-75"
                alt="Patents"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="text-xl font-bold text-white mb-2 hover:text-primary"
                >
                  Patents
                </a>
                <p className="text-white text-center mb-4">
                  More than 25 patents have been filed by students and faculty.
                </p>
                <a
                  className="btn-hover-bg bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative group">
              <Image
                src="/Images/ssippng.png"
                className="w-full object-cover h-75"
                alt="SSIP Orientations"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <a
                  href="#"
                  className="text-xl font-bold text-white mb-2 hover:text-primary"
                >
                  SSIP Orientations
                </a>
                <p className="text-white text-center mb-4">
                  More than 30 research papers have been published by students
                  and faculty.
                </p>
                <a
                  className="btn-hover-bg bg-primary text-white py-2 px-4 rounded hover:bg-opacity-80"
                  href="#"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationResearchPatents;
