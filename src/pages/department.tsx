import Image from "next/image";

export default function DepartmentPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex justify-center items-center h-1/2 min-h-[400px]">
        <Image
          src="/Images/12.jpg"
          alt="Computer Science Department"
          fill
          className="absolute w-full h-full object-cover z-0"
        />
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
        <h1 className="relative text-white text-center font-bold text-4xl z-20">
          Department of Computer Science
        </h1>
      </section>

      {/* Introduction */}
      <section className="container mx-auto py-5">
        <p className="text-center text-lg mx-auto max-w-2xl">
          Welcome to the Department of Computer Science, where innovation meets
          education. Our world-class faculty, cutting-edge research, and
          state-of-the-art facilities provide students with an unparalleled
          learning experience in the fast-paced world of technology.
        </p>
      </section>

      {/* Vision and Mission */}
      <section className="bg-gray-100 py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Our Vision</h5>
              </div>
              <div className="card-body">
                <p>
                  To be a globally recognized center of excellence in computer
                  science education and research, fostering innovation and
                  producing leaders who shape the digital future.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Our Mission</h5>
              </div>
              <div className="card-body">
                <p>
                  To provide high-quality education, conduct cutting-edge
                  research, and promote innovation in computer science,
                  preparing students to be ethical, skilled, and adaptable
                  professionals in a rapidly evolving technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PEOs and PSOs */}
      <section className="container mx-auto py-5">
        <h2 className="text-center font-bold mb-4">
          Program Objectives and Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                Program Educational Objectives (PEOs)
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-none">
                <li>
                  • Graduates will excel in professional careers and/or higher
                  education in computer science and related fields.
                </li>
                <li>
                  • Graduates will demonstrate technical competence and
                  leadership in their chosen fields.
                </li>
                <li>
                  • Graduates will engage in lifelong learning and
                  professional development.
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Program Specific Outcomes (PSOs)</h5>
            </div>
            <div className="card-body">
              <ul className="list-none">
                <li>
                  • Apply computer science principles to design, develop, and
                  evaluate computing systems.
                </li>
                <li>
                  • Analyze complex computing problems and create innovative
                  solutions using current techniques and tools.
                </li>
                <li>
                  • Communicate effectively and work collaboratively in
                  multidisciplinary teams.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="bg-gray-100 py-5">
        <div className="container mx-auto">
          <h2 className="text-center font-bold mb-4">Placements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title text-center">95%</h5>
              </div>
              <div className="card-body text-center">
                <p>Placement Rate</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title text-center">$85,000</h5>
              </div>
              <div className="card-body text-center">
                <p>Average Starting Salary</p>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title text-center">200+</h5>
              </div>
              <div className="card-body text-center">
                <p>Partner Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto py-5">
        <h2 className="text-center font-bold mb-4">Life in Our Department</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/Images/13.jpg"
              alt="Students collaborating in a computer lab"
              fill
              className="rounded object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1 md:col-span-2">
            <Image
              src="/Images/14.jpg"
              alt="Annual tech symposium"
              fill
              className="rounded object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/Images/16.jpg"
              alt="Professor giving a lecture on artificial intelligence"
              fill
              className="rounded object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/Images/17.jpg"
              alt="Student presenting their research project"
              fill
              className="rounded object-cover"
            />
          </div>
          <div className="relative aspect-w-1 aspect-h-1">
            <Image
              src="/Images/18.jpg"
              alt="Robotics competition"
              fill
              className="rounded object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-5 text-center">
        <h2 className="font-bold mb-3">Ready to Join Us?</h2>
        <p className="mb-4 text-gray-600">
          Explore our programs and take the first step towards a rewarding
          career in computer science.
        </p>
        <a href="#" className="btn btn-lg btn-primary">
          Explore Our Programs
        </a>
      </section>
    </div>
  );
}
