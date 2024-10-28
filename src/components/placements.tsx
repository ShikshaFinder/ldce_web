import React from 'react';
import Image from 'next/image';

const companies = [
  {
    name: "IBM",
    logo: "/placements/ibm-logo-18910.png"  
  },
  {
    name: "Torrent Power",
    logo: "/placements/TORNTPOWER.NS_BIG.png"
  },
  {
    name: "Accenture",
    logo: "/placements/accenture.png"
  },
  {
    name: "L&T",
    logo: "/placements/L&T.png"
  },
  {
    name: "Mahindra EPC",
    logo: "/placements/mahindra-epc.png"
  },
  {
    name: "GSFC",
    logo: "/placements/gsfc.png"
  },
  {
    name: "Cybage",
    logo: "/placements/cybage.png"
  },
  {
    name: "Searce",
    logo: "/placements/searce.png"
  },
  {
    name: "Thomson Reuters",
    logo: "/placements/thomson-reuters.png"
  },
  {
    name: "Surekha Technologies",
    logo: "/placements/surekha-technologies.png"
  },
  {
    name: "IP Calculus",
    logo: "/placements/ip-calculus.png"
  },
  {
    name: "TATA Consultancy",
    logo: "/placements/tata_consultanct_services.png"
  }
];

const Placements = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary uppercase">
            LDCE Placement
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join LDCE for a bright future with top companies
          </p>
        </div>

        <div className="mt-12 relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div key={`${company.name}-1-${index}`} className="flex-none">
                <div className="h-32 w-48 relative">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div key={`${company.name}-2-${index}`} className="flex-none">
                <div className="h-32 w-48 relative">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Placements;