import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nikhil-singh-581636212/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/NikhilSingh22",
    },
    {
      id: 3,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:singh.nikhil.2016880@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex lg:justify-between border-2 lg:items-center lg:w-40 h-14 px-4 lg:ml-[-100px] bg-gray-500 lg:hover:ml-[-10px] lg:hover:rounded-md duration-300 ${link.style}`}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
