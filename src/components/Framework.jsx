import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import reactImage from "../assets/react.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png";
import redux from "../assets/redux.png";
import php from "../assets/php.png";
import cplusplus from "../assets/cplusplus.png";
import tailwind from "../assets/tailwind.png";
const Framework = () => {
  const tools = [
    {
      id: 1,
      src: cplusplus,
      title: "C++",
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: java,
      title: "Java",
      style: "shadow-orange-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: html,
      title: "HTML",
      style: "shadow-red-500",
    },
    {
      id: 5,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailWind",
      style: "shadow-orange-400",
    },
    {
      id: 7,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: express,
      title: "Express JS",
      style: "shadow-gray-500",
    },
    {
      id: 10,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 11,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 12,
      src: php,
      title: "PHP",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="tools/framework"
      className="pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-fit"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 pt-5 p-2 inline">
            Tools | Frameworks
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tools.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Framework;
