import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/netflix.png"

const Footer = () => {
  return (
    <div className="w-full h-auto bg-black text-primary-text pt-12">
      <div className="flex justify-between px-36">
        {/* Left Section: Logo and Description */}
        <div className="flex gap-4 w-1/2">
          <img src={logo} alt="Cinemix Logo" className="w-28 h-28" />
          <p className="text-gray-400">
          Cinemix Movie Hub is your ultimate source for everything related to movies and series. Whether you’re searching for information about the latest releases, binge-worthy series, or classic films, we’ve got you covered. Stay updated with our curated recommendations, and dive deep into reviews, trailers, and exclusive content. Your movie journey starts here!
          </p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="flex flex-col">
          <ul className="flex flex-col gap-4">
            <li className="text-2xl font-bold text-white">Quick Links</li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive
                    ? "text-accent-primary"
                    : "hover:text-accent-primary text-gray-400"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/series"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive
                    ? "text-accent-primary"
                    : "hover:text-accent-primary text-gray-400"
                }`
              }
            >
              Series
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-semibold ${
                  isActive
                    ? "text-accent-primary"
                    : "hover:text-accent-primary text-gray-400"
                }`
              }
            >
              About
            </NavLink>
          </ul>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex flex-wrap gap-5 mt-8">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <FaYoutube size={30} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent-primary transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="w-full mt-8 border-t border-gray-600 py-4">
        <div className="text-center text-gray-400">
          © 2024 Cinemix Movie Hub. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
