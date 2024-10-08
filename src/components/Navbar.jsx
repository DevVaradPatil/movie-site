import React, { useContext } from "react";
import logo from "../assets/netflix.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearch, IoHeartOutline, IoHeart } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="bg-primary-bg text-primary-text p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="" className="h-10" />
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg duration-200 font-semibold border-b-2 ${
                isActive
                  ? "text-accent-primary border-b-accent-primary"
                  : "border-b-transparent hover:text-accent-primary"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/series"
            className={({ isActive }) =>
              `text-lg duration-200 font-semibold border-b-2 ${
                isActive
                  ? "text-accent-primary border-b-accent-primary"
                  : "border-b-transparent hover:text-accent-primary"
              }`
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg duration-200 font-semibold border-b-2 ${
                isActive
                  ? "text-accent-primary border-b-accent-primary"
                  : "border-b-transparent hover:text-accent-primary"
              }`
            }
          >
            About
          </NavLink>
      
        </div>
        {/* Search and Profile Icon */}
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Link to={"/profile"}>
            <IoHeart className="text-2xl cursor-pointer" />
          </Link>
          {user ? (
            <Link
              to={"/profile"}
              className="w-9 h-9 bg-accent-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-secondary"
            >
              <span className="text-primary-text">
                {user.slice(0, 1).toUpperCase()}
              </span>
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="px-5 py-2 cursor-pointer bg-accent-primary text-primary-text rounded-sm font-medium transition-all hover:bg-accent-secondary"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
