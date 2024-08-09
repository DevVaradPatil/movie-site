import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeaderCard from "./HeaderCard";
import { getNowPlayingMovies } from "../utils/api";
import { NextArrow, PrevArrow } from "./Arrows";

const Header = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "10%",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    easing: "ease-in-out",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getNowPlayingMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <div className="w-full h-full py-10">
      <Slider {...settings}>
        {movies &&
          movies.map((movie, index) => (
            <div className="px-5" key={index}>
              <HeaderCard
                title={movie.title}
                desc={movie.overview}
                date={movie.release_date}
                rating={movie.vote_average}
                backdropUrl={movie.backdrop_path}
                genreId={movie.genre_ids[0]}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Header;
