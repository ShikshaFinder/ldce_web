import React from "react";

const AboutSection = () => {
  return (
    <div className="about-area pb-20 pt-16 px-4 md:px-10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full animate-slideInUp  mb-7 md:mb-10 lg:mb-0">
            <div className="about-image rounded-lg overflow-hidden ">
              <img
                src="https://wsrv.nl/?url=https://ldce-web-nine.vercel.app/Images/15.jpg&w=800&q=75"
                alt="about-image"
                className="w-full h-auto max-w-full"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 w-full lg:ml-16 lg:mr-0 mr-2 lg:mt-0 mt-10">
            <div className="about-content">
              <div className="title mb-6">
                <h2 className="text-4xl text-blue-900 font-bold mb-6 flex items-center">
                  About LDCE
                </h2>
                <hr className="border-blue-700 mb-4" />

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  L. D. College of Engineering, endearingly known as L.D.C.E, is
                  Ahmedabad’s premier engineering college situated in the city’s
                  heart and surrounded by elite organizations like PRL, ATIRA,
                  ISRO, IIM, and CEPT. Founded in 1948 to impart quality higher
                  education in various engineering fields, it has seen
                  unprecedented growth. The college is affiliated with Gujarat
                  Technological University and administered by the Department of
                  Technical Education, Government of Gujarat.{" "}
                  <a
                    href="/"
                    className="text-blue-700  hover:text-blue-900 transition duration-300 ease-in-out"
                  >
                    <b> Read More</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
