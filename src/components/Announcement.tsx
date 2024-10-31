import React from "react";

const Announcement = () => {
  return (
    <div className="bg-slate-200 text-gray-600 font-bold text-lg py-3">
      
      <div className="overflow-hidden relative whitespace-nowrap">
        <div className="animate-marquee flex items-center space-x-2">
          {/* Icon */}
          {/* <span className="mr-2"> */}
          
          {/* {/* </span> */}
          {/* Scrolling Text */}
          <p className="inline-block">
            Welcome to our website! Check out our latest updates and
            announcements!

          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;