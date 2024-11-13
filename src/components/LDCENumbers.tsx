import React from "react";
import CountUp from "react-countup";

import {
  FaUserGraduate,
  FaUserTie,
  FaUserNurse,
  FaUserSecret,
  FaChalkboardTeacher,
  FaUsersCog,
  FaLightbulb,
  FaProjectDiagram,
} from "react-icons/fa";

const StatisticsSection = () => {
  const stats = [
    { count: 50000, label: "Undergraduate Students", icon: FaUserGraduate },
    { count: 1000, label: "Postgraduate Students", icon: FaUserTie },
    { count: 1000, label: "ME Research Scholars", icon: FaUserNurse },
    { count: 15, label: "PhD Research Scholars", icon: FaUserSecret },
    { count: 280, label: "Faculty", icon: FaChalkboardTeacher },
    { count: 150, label: "Staff", icon: FaUsersCog },
    { count: 20, label: "Patents", icon: FaLightbulb },
    { count: 100, label: "Projects", icon: FaProjectDiagram },
  ];

  return (
    <div
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/14.jpg')" }}
    >
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-12">LDCE by the Numbers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg"
            >
              <div className="mb-4">
                {/* Rendering the icon component */}
                <stat.icon className="text-6xl" />
              </div>
              <h3 className="text-4xl font-bold text-yellow-400">
                <CountUp
                  start={0}
                  end={stat.count}
                  duration={2.5}
                  separator=","
                  useEasing={true}
                  redraw={true}
                />
              </h3>
              <p className="mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
