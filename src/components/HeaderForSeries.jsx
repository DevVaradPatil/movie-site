import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HeaderCard from "./HeaderCard";
import { getAiringSeries, getNowPlayingMovies } from "../utils/api";
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

  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesData = await getAiringSeries();
      setSeries(seriesData);
    };

    fetchSeries();
  }, []);

  return (
    <div className="w-full h-full py-10">
      <Slider {...settings}>
        {series &&
          series.map((newseries, index) => (
            <div className="px-5" key={index}>
              <HeaderCard
                title={newseries.name}
                desc={newseries.overview}
                date={newseries.first_air_date}
                rating={newseries.vote_average}
                backdropUrl={newseries.backdrop_path}
                genreId={newseries.genre_ids[0]}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Header;