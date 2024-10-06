import React, { useState, useEffect, useRef, useCallback } from "react";
import { IoSearch } from "react-icons/io5";
import { searchMoviesByTitle } from "../utils/api";
import { Link } from "react-router-dom";

const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cache, setCache] = useState({});
  const searchRef = useRef(null);

  const debounce = (func, delay) => {
    let debounceTimer;
    return (...args) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchMovies = async (value) => {
    if (value.length > 2) {
      if (cache[value]) {
        setSearchResult(cache[value]);
        setShowDropdown(true);
      } else {
        try {
          const response = await searchMoviesByTitle(value);
          setSearchResult(response);
          setCache((prevCache) => ({ ...prevCache, [value]: response }));
          setShowDropdown(true);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    } else {
      setSearchResult([]);
      setShowDropdown(false);
    }
  };

  const handleSearch = useCallback(debounce(fetchMovies, 300), [cache]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <div ref={searchRef} className="flex relative items-center bg-tertiary-bg text-primary-text border border-border-primary rounded-md px-4 py-2">
      <input
        type="text"
        placeholder="Search..."
        className="border-none outline-none bg-transparent focus:outline-none w-72"
        value={query}
        onChange={handleInputChange}
      />
      <IoSearch className="text-xl" />
      {showDropdown && searchResult.length > 0 && (
        <div className="absolute top-10 mt-1 rounded-md left-0 w-full flex flex-col justify-center items-center gap-3 bg-gray-700/50 backdrop-blur-sm z-50 py-3">
          {searchResult.slice(0, 8).map((movie, index) => {
            const genre = genreMap[movie.genre_ids[0]] || "Movie";
            return (
              <Link to={`/movie/${movie.title}`}
                key={index}
                className="flex w-full gap-2 py-1 transition-all duration-200 hover:bg-gray-500/50 px-3 cursor-pointer"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                  className="w-14 rounded-sm"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-base">
                    {movie.title.length > 30 ? movie.title.slice(0, 30) + "..." : movie.title}
                  </p>
                  <p className="text-sm">{genre}</p>
                  <p className="text-sm text-secondary-text">{movie.release_date}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
