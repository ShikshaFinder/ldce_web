import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

type FottersectionProps = {
  title: string;
  subtitles: string[];
};

const Fottersection: React.FC<FottersectionProps> = ({ title, subtitles }) => {
  return (
    <div className="text-center md:text-left">
      <h6 className="font-semibold underline decoration-white-500 text-white mb-4">{title}</h6>
      <ul className="md:list-disc pl-5 space-y-2">
        {subtitles.map((subtitle, index) => (
          <li key={index}>
            <a
              href="#"
              className="transform hover:scale-105 transition duration-200 text-gray-300 hover:text-blue-400"
            >
              {subtitle}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-10 text-xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Address Section */}
        <div className="text-center md:text-left">
          <img
            src="https://ldceweb.netlify.app/img/ldce-logo.png"
            width="100"
            height="100"
            alt="College Logo"
            className="mx-auto md:mx-0 mb-4"
          />
          <p>
            L.D. College of Engineering<br />
            Opp Gujarat University, Navrangpura,<br />
            Ahmedabad - 380015, GUJARAT INDIA
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-blue-500 transform hover:scale-110 transition duration-200"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transform hover:scale-110 transition duration-200"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-pink-500 transform hover:scale-110 transition duration-200"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-blue-700 transform hover:scale-110 transition duration-200"><FaLinkedin /></a>
          </div>
        </div>


        {/* First Section */}
        <Fottersection
          title="About"
          subtitles={["History", "Admission Procedure", "Directions", "Fees & Description", "Committees"]}
        />


         {/* Second Section */}
         <Fottersection
          title="Quick Links"
          subtitles={["Campus Map", "About us", "Contact", "Useful Links", "Student Induction"]}
        />


 
        {/* Third Section */}
        <Fottersection
          title="Important Info"
          subtitles={["MOU", "TEQIP", "Tender Notice", "Campus Map"]}
        />


      </div>
    </footer>
  );
}

export default Footer;
