import React from 'react'

// Define prop types using TypeScript
type CardProps = {
  title: string;
  desc: string;
  img: string;
};

const Card: React.FC<CardProps> = ({ title, desc, img }) => {
  return (
    <>
      <div className="rounded-lg">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt={title} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              {desc}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

function Achivements() {
  return (
    <>
      {/* Achivements title start */}
      <div className="relative border-t bg-background">
        <div className="absolute inset-0 h-36 opacity-90 lg:h-48"></div>
        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-12 lg:pt-24">
          <header className="mx-auto max-w-2xl text-center">
            {/* <h1 className="mb-4 font-semibold text-xl">
              What we are proud of !
            </h1> */}
            <h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Achievements
            </h1>
            <p className="mt-5 text-sm font-semibold text-gray-400">
              We are proud of the students who are working hard to make a
              difference.
            </p>
          </header>
        </div>
      </div>
      {/* Achivements title end */}
      {/* card start */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 px-5 sm:px-10 lg:px-[120px] justify-items-center">
        <Card
          title={"LDCE"}
          desc={"LDCE is a good place to learn and grow."}
          img={"./Achivement_img1.jpeg"}
        />
        <Card
          title={"LDCE"}
          desc={"LDCE is a good place to learn and grow."}
          img={"./Achivement_img2.jpeg"}
        />
        <Card
          title={"LDCE"}
          desc={"LDCE is a good place to learn and grow."}
          img={"./Achivement_img3.png"}
        />
        <Card
          title={"LDCE"}
          desc={"LDCE is a good place to learn and grow."}
          img={"./Achivement_img4.jpeg"}
        />
      </div>

      {/* card end */}
    </>
  );
}

export default Achivements