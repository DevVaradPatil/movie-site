import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-black text-primary-text">
      <div className="flex justify-between">
        <div className="flex flex-col pt-12 pl-36 gap">
          <ul className="flex flex-col gap-4">
            <li className="text-2xl font-bold">Quick Links</li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive ? "text-border-primary" : "hover:text-accent-primary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive ? "text-border-primary" : "hover:text-accent-primary"
                }`
              }
            >
              Series
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive ? "text-border-primary" : "hover:text-accent-primary"
                }`
              }
            >
              About
            </NavLink>
          </ul>
        </div>
        <div className="flex flex-wrap h-[150px] gap-5 bg-black mr-[200px] w-[200px] mt-[65px]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "inherit" }}
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "inherit" }}
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "inherit" }}
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "inherit" }}
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px", color: "inherit" }}
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div className="w-full h-[1px] mt-6 bg-white">
        <div className="ml-36 pt-4">
          © 2024 Movie Website. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
