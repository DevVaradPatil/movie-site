import React from 'react';
import logo from '../assets/netflix.png'
import { Link } from 'react-router-dom';
import { IoSearch, IoHeartOutline } from "react-icons/io5";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-primary-bg text-primary-text p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="" className='h-10' />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="border-b-2 border-b-transparent hover:border-b-accent-primary transition-all duration-200 text-lg hover:text-accent-primary">Home</Link>
          <Link to="/" className="border-b-2 border-b-transparent hover:border-b-accent-primary transition-all duration-200 text-lg hover:text-accent-primary">About</Link>
          <Link to="/" className="border-b-2 border-b-transparent hover:border-b-accent-primary transition-all duration-200 text-lg hover:text-accent-primary">Services</Link>
          <Link to="/" className="border-b-2 border-b-transparent hover:border-b-accent-primary transition-all duration-200 text-lg hover:text-accent-primary">Contact</Link>
        </div>

        {/* Search and Profile Icon */}
        <div className="flex items-center space-x-4">
          <SearchBar/>
          <IoHeartOutline className="text-2xl cursor-pointer" />
          <div className="w-9 h-9 bg-accent-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-secondary">
            <span className="text-primary-text">P</span>
          </div>
          <button className='px-5 py-2 bg-accent-primary text-primary-text rounded-sm font-medium transition-all hover:bg-accent-secondary'>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
