import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-fit pt-20 w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around  h-full px-4  sm:flex-row sm:pt-0">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white my">
            B.Tech CSE undergraduate
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am an ambitious B.Tech CSE undergraduate student, passionate about
            the intersection of web development and machine learning algorithms.
            As a keen learner, I am on a constant quest to expand my knowledge
            and skills in these dynamic fields.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-pink-500 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
