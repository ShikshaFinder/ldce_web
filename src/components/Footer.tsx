import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-10">
      <div className="container mt-6 mx-auto grid grid-cols-1  md:grid-cols-4 gap-8 justify-center">
        
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

        {/* About Section */}
        <div className='flex-1 flex-col justify-center text-center md:text-left'>
          <h6 className="font-semibold text-white mb-4">About</h6>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">History</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Admission Procedure</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Directions</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Fees & Description</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Committees</a>
        </div>

        {/* Quick Links Section */}
        <div className='flex-1 flex-col justify-center text-center md:text-left'>
          <h6 className="font-semibold text-white mb-4">Quick Links</h6>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Campus Map</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">About us</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Contact</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Useful Links</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Student Induction</a>
        </div>

        {/* Important Info Section */}
        <div className='flex-1 flex-col justify-center text-center md:text-left'>
          <h6 className="font-semibold text-white mb-4">Important Info</h6>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">MOU</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">TEQIP</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Tender Notice</a>
          <a href="#" className="block mb-2 hover:text-white transform hover:scale-105 transition duration-200">Campus Map</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
