import React from "react";
import styles from '../styles/Navbar.module.css'; // Adjust the path as necessary
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link"; // Correct import for Next.js

const Navbar = () => {
  return (
    <>
      <nav className={styles.Ldce_nav}>
        <div className={styles.wrapper}>
          <div className={`${styles.logo} flex flex-row items-center`}>
            <img src="./LDCE_Logo.png" className="w-[70px]" alt="Ldce_logo" />
            <a
              href="#"
              className={` hidden md:inline text-lg lg:text-xl xl:block`}
            >
              L. D. COLLEGE OF ENGINEERING
            </a>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className={`${styles.navLinks} mb-0`}>
            <label htmlFor="close-btn" className={`${styles.btnn}`}>
              <X color="#d8315b" size={32} />
            </label>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#" className={styles.desktopItem}>
                About
              </a>
              <input type="checkbox" id="showMega1" />
              <label htmlFor="showMega1" className={styles.mobileItem}>
                About
              </label>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header>The Institute</header>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <header>Legal Forms</header>
                    <ul className={styles.megaLinks}>
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
            <li>
              <a href="#" className={styles.desktopItem}>
                Academics
              </a>
              <input type="checkbox" id="showMega2" />
              <label htmlFor="showMega2" className={styles.mobileItem}>
                Academics
              </label>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header>Intake</header>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <header>Academics</header>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <header>Affiliation/Approval</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <a href="#">AICTE EOA</a>
                      </li>
                      <li>
                        <a href="#">AICTE Environment Policy</a>
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
            <li>
              <a href="#" className={styles.desktopItem}>
                Departments
              </a>
              <input type="checkbox" id="showMega3" />
              <label htmlFor="showMega3" className={styles.mobileItem}>
                Departments
              </label>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <ul className={styles.megaLinks}>
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
            <li>
              <a href="#">Placement</a>
            </li>
            <li>
              <a href="#" className={styles.desktopItem}>
                Campus Life
              </a>
              <input type="checkbox" id="showMega4" />
              <label htmlFor="showMega4" className={styles.mobileItem}>
                Campus Life
              </label>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header>Student Life</header>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <header>Campus Life</header>
                    <ul className={styles.megaLinks}>
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
                  <div className={styles.row}>
                    <header>Infrastructure</header>
                    <ul className={styles.megaLinks}>
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
            <li>
              <a href="#" className={styles.desktopItem}>
                Innovation
              </a>
              <input type="checkbox" id="showMega5" />
              <label htmlFor="showMega5" className={styles.mobileItem}>
                Innovation & StartUps
              </label>
              <div className={styles.megaBox}>
                <div className={styles.content}>
                  <div className={styles.row}>
                    <header>Innovation and Startups</header>
                    <ul className={styles.megaLinks}>
                      <li>
                        <a href="#">SSIP</a>
                      </li>
                      <li>
                        <a href="#">Design Lab</a>
                      </li>
                      <li>
                        <a href="#">Patents</a>
                      </li>
                      <li>
                        <a href="#">Research Grants</a>
                      </li>
                      <li>
                        <a href="#">Incubation Center</a>
                      </li>
                      <li>
                        <a href="#">Information on Covid-19</a>
                      </li>
                      <li>
                        <a href="#">Super Computing Facility</a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.row}>
                    <header>Conference</header>
                    <ul className={styles.megaLinks}>
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
            <li>
              <a href="#" className={styles.desktopItem}>
                More
                <ChevronDown style={{ display: "inline-block" }} size={20} />
              </a>
              <input type="checkbox" id="showDrop" />
              <label htmlFor="showDrop" className={styles.mobileItem}>
                More
                <ChevronDown style={{ display: "inline-block" }} />
              </label>
              <ul className={`${styles.dropMenu} ms-0 ps-0`}>
                <li>
                  <a href="#">NIRF</a>
                </li>
                <li>
                  <a href="#">ARIIA</a>
                </li>
                <li>
                  <a href="#">Student Section </a>
                </li>
                <li>
                  <a href="#">Fees Payment </a>
                </li>
                <li>
                  <a href="#">Study In Gujarat</a>
                </li>
                <li>
                  <a href="#">Grievance </a>
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
          <label htmlFor="menu-btn" className={`${styles.btnn} ${styles.menuBtn}`}>
            <Menu color="#0a2463" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
