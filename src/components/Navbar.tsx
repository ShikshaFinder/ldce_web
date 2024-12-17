import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link"; 

const Navbar = () => {
  const [navBackground, setNavBackground] = useState("!bg-transparent");
  const [color, setColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavBackground("!bg-white-500");
        setColor("text-black");
      } else {
        setNavBackground("!bg-transparent");
        setColor("text-white");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`Ldce_nav !border-b-[0.8px] border-[#ffffff1a] ${navBackground}`}
      >
        <div className="w-full bg-[#13357b] py-3 px-20">
          <ul className="flex justify-end font-serif text-xs gap-4 text-white">
            <li>GRIEVANCE</li>
            <li>SITEMAP</li>
            <li>STUDENT SECTION</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="wrapper px-10 px-lg-5 py-lg-0">
          <div className="logo gap-6 flex flex-row items-center justify-center">
            <img src="./LDCE_Logo.png" className="w-[70px]" alt="Ldce_logo" />
            <a
              href="/"
              className={` ${color} text-2xl font-serif font-bold text-center`}
            >
              L. D. College Of Engineering
            </a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul
            className={`nav-links flex flex-row items-center font-serif text-lg ${color}  mb-0`}
          >
            <label htmlFor="close-btn" className="btnn close-btn">
              <X color="#d8315b" size={32} />
            </label>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a className="" href="#">
                Home
              </a>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#" className="desktop-item">
                About
                <ChevronDown style={{ display: "inline-block" }} size={20} />
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className="mobile-item">
                About
              </label>
              <div className="mega-box top-[96px]">
                <div className="content">
                  <div className="row">
                    <header>The Institute</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">About LDCE</a>
                      </li>
                      <li>
                        <a href="#">Principal's Message</a>
                      </li>
                      <li>
                        <a href="#">Organization Chart</a>
                      </li>
                      <li>
                        <a href="#">Institute Committees</a>
                      </li>
                      <li>
                        <a href="#">Center Of Excellence - Siemens</a>
                      </li>
                      <li>
                        <a href="#">Center Of Excellence - Welding</a>
                      </li>
                      <li>
                        <a href="#">Newsletters</a>
                      </li>
                      <li>
                        <a href="#">Campus Drive</a>
                      </li>
                    </ul>
                  </div>
                  {/* git trial with terminal */}
                  <div className="row">
                    <header>Legal Forms</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">MOU</a>
                      </li>
                      <li>
                        <a href="#">Mandatory Disclosure</a>
                      </li>
                      <li>
                        <a href="#">Tender Notice</a>
                      </li>
                      <li>
                        <a href="#">TEQIP</a>
                      </li>
                      <li>
                        <a href="#">Right to info. Act</a>
                      </li>
                      <li>
                        <a href="#">Faculty and Staff list</a>
                      </li>
                      <li>
                        <a href="#">Admission & Reservation</a>
                      </li>
                      <li>
                        <a href="#">Recruitment Rules for Faculty</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#" className="desktop-item">
                Academics
                <ChevronDown style={{ display: "inline-block" }} size={20} />
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className="mobile-item">
                Academics
              </label>
              <div className="mega-box top-[96px]">
                <div className="content">
                  <div className="row">
                    <header>Intake</header>
                    <ul className="mega-links">
                      <li>
                        <Link href="/admissions">BE Admission & Courses</Link>
                      </li>
                      <li>
                        <a href="#">PDDC Courses</a>
                      </li>
                      <li>
                        <a href="#">PG Admission & Courses</a>
                      </li>
                      <li>
                        <a href="#">Fulltime phD-ADF scheme(GTU)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Academics</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Academic Calendar</a>
                      </li>
                      <li>
                        <a href="#">Brochure</a>
                      </li>
                      <li>
                        <a href="#">Fee Structure</a>
                      </li>
                      <li>
                        <a href="#">Education Verification</a>
                      </li>
                      <li>
                        <a href="#">Syllabus</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Affiliation/Approval</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">AICTE EOA</a>
                      </li>
                      <li>
                        <a href="#">AICTE Environment Policy</a>
                      </li>
                      <li>
                        <a href="#">Accreditation</a>{" "}
                      </li>

                      <li>
                        <a href="#">Accreditation Status</a>
                      </li>
                      <li>
                        <a href="#">GTU Affiliation</a>
                      </li>
                      <li>
                        <a href="#">NIRF</a>
                      </li>
                      <li>
                        <a href="#">LDCE Green Campus Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#" className="desktop-item">
                Departments
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className="mobile-item">
                Departments
              </label>
              <div className="mega-box top-[96px]">
                <div className="content">
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#">Applied Mechanics</a>
                      </li>
                      <li>
                        <a href="#">Bio Medical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Chemical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Civil Engineering</a>
                      </li>
                      <li>
                        <a href="#">Plastic Technology</a>
                      </li>
                      <li>
                        <a href="#">Rubber Technology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#">Computer Engineering</a>
                      </li>
                      <li>
                        <a href="#">Electrical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Electronics & Communication Engineering</a>
                      </li>
                      <li>
                        <a href="#">Environmental Engineering</a>
                      </li>
                      <li>
                        <a href="#">Textile Technology</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <ul className="mega-links">
                      <li>
                        <a href="#">Information Technology</a>
                      </li>
                      <li>
                        <a href="#">Instrumentation & Control Engineering</a>
                      </li>
                      <li>
                        <a href="#">Science and Humanities</a>
                      </li>
                      <li>
                        <a href="#">Mechanical Engineering</a>
                      </li>
                      <li>
                        <a href="#">Automobile Engineering</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#">Placement</a>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#" className="desktop-item">
                Campus Life
              </a>
              <input type="checkbox" id="showMega4" />
              <label htmlFor="showMega4" className="mobile-item">
                Campus Life
              </label>
              <div className="mega-box top-[96px]">
                <div className="content">
                  <div className="row">
                    <header>Student Life</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">LDCE Clubs</a>
                      </li>
                      <li>
                        <a href="#">Photo Gallery</a>
                      </li>
                      <li>
                        <a href="#">National Service Scheme</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Campus Life</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Placement Cell</a>
                      </li>
                      <li>
                        <a href="#">Entrepreneurship Cell</a>
                      </li>
                      <li>
                        <a href="#">LDCE Alumni Association</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Infrastructure</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">Campus Map</a>
                      </li>
                      <li>
                        <a href="#">Canteen</a>
                      </li>
                      <li>
                        <a href="#">Library</a>
                      </li>
                      <li>
                        <a href="#">Hostel</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#" className="desktop-item">
                Innovation
              </a>
              <input type="checkbox" id="showMega5" />
              <label htmlFor="showMega5" className="mobile-item">
                Innovation & StartUps
              </label>
              <div className="mega-box top-[96px]">
                <div className="content">
                  <div className="row ml-auto bg-white shadow-lg">
                    <header>Innovation and Startups</header>
                    <ul className="mega-links">
                      <li className="mega-item relative group">
                        <a href="#">SSIP</a>
                        <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg px-10 py-2 mr-4">
                          <li>
                            <a href="#">Sub Item 1</a>
                          </li>
                          <li>
                            <a href="#">Sub Item 2</a>
                          </li>
                          <li>
                            <a href="#">Sub Item 3</a>
                          </li>
                        </ul>
                      </li>

                      <li className="mega-item">
                        <a href="#">Design Lab</a>
                      </li>
                      <li className="mega-item">
                        <a href="#">Patents</a>
                      </li>
                      <li className="mega-item">
                        <a href="#">Research Grants</a>
                      </li>
                      <li className="mega-item">
                        <a href="#">Incubation Center</a>
                      </li>
                      <li className="mega-item">
                        <a href="#">Information on Covid-19</a>
                      </li>
                      <li className="mega-item">
                        <a href="#">Super Computing Facility</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row ml-auto bg-white shadow-lg">
                    <header>Conference</header>
                    <ul className="mega-links">
                      <li>
                        <a href="#">ACM-W Regional Celebration 2021</a>
                      </li>
                      <li>
                        <a href="#">National Technology Day 2022</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="transition-colors duration-500 ease-in-out hover:bg-[#13357b] h-[96px] px-3 flex items-center">
              <a href="#" className="desktop-item">
                More
                <ChevronDown style={{ display: "inline-block" }} size={20} />
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className="mobile-item">
                More
                <ChevronDown style={{ display: "inline-block" }} />
              </label>
              <ul className="drop-menu ms-0 ps-0">
                <li>
                  <a href="#">NIRF</a>
                </li>
                <li>
                  <a href="#">ARIIA</a>
                </li>
                <li>
                  <a href="#">Student Section</a>
                </li>
                <li>
                  <a href="#">Fees Payment</a>
                </li>
                <li>
                  <a href="#">Study In Gujarat</a>
                </li>
                <li>
                  <a href="#">Grievance</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btnn menu-btn">
            <Menu color="#0a2463" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
