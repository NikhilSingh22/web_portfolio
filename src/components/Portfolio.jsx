import React from "react";
import Coursify from "../assets/portfolio/Coursify.png";
import Stocks from "../assets/portfolio/Stocks.jpg";
import ImageEditor from "../assets/portfolio/ImageEditor.jpg";
import MovieRecommenderSystem from "../assets/portfolio/MovieRecommenderSystem.jpg";
import Whiteboard from "../assets/portfolio/Whiteboard.png";
import VanillaJSProjects from "../assets/portfolio/VanillaJSProjects.jpg";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Coursify,
      demo: "https://github.com/NikhilSingh22/coursify-frontend",
      code: "https://github.com/NikhilSingh22/coursify-frontend",
    },
    {
      id: 2,
      src: Stocks,
      demo: "https://github.com/NikhilSingh22/stocks",
      code: "https://github.com/NikhilSingh22/stocks",
    },
    {
      id: 3,
      src: ImageEditor,
      demo: "https://github.com/NikhilSingh22/Image_Editor_JS",
      code: "https://github.com/NikhilSingh22/Image_Editor_JS",
    },
    {
      id: 4,
      src: MovieRecommenderSystem,
      demo: "https://github.com/NikhilSingh22/Recommender-System",
      code: "https://github.com/NikhilSingh22/Recommender-System",
    },
    {
      id: 5,
      src: Whiteboard,
      demo: "https://github.com/NikhilSingh22/Online_whiteboard_sem4",
      code: "https://github.com/NikhilSingh22/Online_whiteboard_sem4",
    },
    {
      id: 6,
      src: VanillaJSProjects,
      demo: "https://github.com/NikhilSingh22/Vanilla_JS_small_projects",
      code: "https://github.com/NikhilSingh22/Vanilla_JS_small_projects",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Checkout out Some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="project overview"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
