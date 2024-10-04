import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the movie ID from the URL
import { IoCalendarNumber, IoFilm } from "react-icons/io5";
import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
import { searchMoviesByTitle } from "../utils/api";
import { TbRating18Plus } from "react-icons/tb";
import { MdOutlineChildCare } from "react-icons/md";

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

const MovieDetails = () => {
  const { title } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null); // To store fetched movie details
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch the movie details by ID when component mounts
    const fetchMovie = async () => {
      try {
        const movieData = await searchMoviesByTitle(title);
        setMovie(movieData[0]);
        console.log(movieData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [title]);

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const {
    overview,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    genre_ids,
    adult,
  } = movie;
  const ratingFloat = parseFloat(vote_average);
  const ratingOutOf5 = ratingFloat / 2;

  // Get the stars based on rating
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(ratingOutOf5)) {
      stars.push(<FaStar fontSize={26} key={i} />);
    } else if (i === Math.ceil(ratingOutOf5) && ratingOutOf5 % 1 !== 0) {
      stars.push(<FaStarHalfStroke fontSize={26} key={i} />);
    } else {
      stars.push(<FaRegStar fontSize={26} key={i} />);
    }
  }


  return (
    <div>
      <div
        className="w-full relative flex flex-col justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
          height: "calc(100vh - 74px)",
        }}
      >
        <div className="flex items-center gap-12 text-primary-text">
          <img
            className="h-[450px]"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Movie Poster"
          />
          <div className="bg-transparent backdrop-blur-xl border-gray-300 border-2 w-[900px] h-[500px] rounded-lg">
            <div className="mt-7 ml-7 mr-7 mb-2 flex items-center justify-between text-primary-text">
              <h1 className="font-bold text-[40px]">{title}</h1>
              <div className="flex gap-2 items-center">
                <IoCalendarNumber fontSize={20} />
                <p className="text-xl">{release_date}</p>
              </div>
            </div>

            <div className="text-primary-text ml-7 mr-56">
              <p className="text-xl">{overview}</p>
            </div>

            <div className="flex items-center justify-between mt-7">
              <div className="ml-52 mt-7 flex flex-col items-center gap-2">
                <div className="flex gap-2 text-primary-text">
                  <p className="text-xl">Rating</p>
                </div>
                <p className="text-3xl flex gap-1">{stars}</p>
              </div>
              <div className="mr-52 mt-7 flex items-center flex-col gap-2 text-xl">
                <p>{adult ? "Adult" : "General"}</p>
                {adult ? (
                  <TbRating18Plus fontSize={32} className="text-red-500" />
                ) : (
                    <MdOutlineChildCare fontSize={32} className="text-blue-500"/>
                )}
              </div>
            </div>
            <div className="flex mt-20 items-center justify-between">
              <div className="ml-52 flex flex-col gap-2">
                <div className="flex gap-2 text-primary-text">
                  <IoFilm fontSize={25} />
                  <p className="text-xl">Genre</p>
                </div>
                <div className="flex gap-2 flex-wrap w-full">
                    {genre_ids.map((genre, index) => (
                        <div key={index} className="text-white bg-gray-500/50 rounded-full py-1 px-4">
                            {genreMap[genre]}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
