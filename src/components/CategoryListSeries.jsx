import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";
import Card from "./Card";

const CategoryList = ({ movies, title }) => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "10%",
    slidesToShow: 6,
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
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
  return (
    <div className="flex gap-4 flex-col w-full">
      <p className="px-10 text-3xl font-semibold text-primary-text">{title}</p>

      <div className="w-full h-full pb-8">
        <Slider {...settings}>
          {movies &&
            movies.map((movie, index) => (
              <div className="px-5 py-5" key={index}>
                <Card
                  key={movie.id}
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  title={movie.name}
                  year={movie.first_air_date}
                  rating={movie.vote_average}
                  isSeries={true}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryList;