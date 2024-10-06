import React from "react";
import { IoCalendarNumber, IoFilm } from "react-icons/io5";
import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BounceLoader } from "react-spinners";


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

const HeaderCard = ({ title, desc, rating, backdropUrl, date, genreId }) => {
  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const genre = genreMap[genreId] || "Movie";

  const ratingFloat = parseFloat(rating);
  const ratingOutOf5 = ratingFloat / 2;

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(ratingOutOf5)) {
      stars.push(<FaStar fontSize={20} key={i} />);
    } else if (i === Math.ceil(ratingOutOf5) && ratingOutOf5 % 1 !== 0) {
      stars.push(<FaStarHalfStroke fontSize={20} key={i} />);
    } else {
      stars.push(<FaRegStar fontSize={20} key={i} />);
    }
  }

  return (
    <Link to={`/movie/${title}`} className="w-full relative rounded-[42px] flex justify-center items-center overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/${backdropUrl}`}
        alt=""
        className="w-full h-full object-cover z-0"
      />
      <div className="w-full h-full absolute px-6 py-10 top-0 left-0 bg-black/50 rounded-[42px] flex justify-start items-end overflow-hidden z-10">
        <div className="text-xl text-white w-[80%] flex flex-col space-y-2">
          <h1 className="text-4xl font-bold truncate">{title}</h1>
          <div className="flex items-center space-x-8">
            <div className="text-lg flex items-center gap-2 text-neutral-100 font-medium">
              <IoCalendarNumber fontSize={20} />
              {month}-{year}
            </div>
            <div className="text-lg flex items-center gap-2 text-neutral-100 font-medium">
              <IoFilm fontSize={20} /> {genre}
            </div>
            <div className="text-lg flex items-center gap-2 text-neutral-100 font-medium">
              {stars}
            </div>
          </div>
          <p className="text-lg text-neutral-100 ">{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default HeaderCard;
