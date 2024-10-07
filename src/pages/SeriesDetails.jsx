import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the movie ID from the URL
import { IoCalendarNumber, IoFilm } from "react-icons/io5";
import { FaStar, FaRegStar, FaStarHalfStroke } from "react-icons/fa6";
import { searchMoviesByTitle, searchSeriesByTitle } from "../utils/api";
import { TbRating18Plus } from "react-icons/tb";
import { MdOutlineChildCare } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";
import Loader from "../components/Loader";
import { UserContext } from "../contexts/UserContext"; 
import toast from "react-hot-toast";

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

const SeriesDetails = () => {
  const { title } = useParams(); // Get movie ID from the URL
  const [movie, setMovie] = useState(null); // To store fetched movie details
  const [loading, setLoading] = useState(true); // Loading state
  const { user, favorites, addFavorite } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the movie is already in favorites
  useEffect(() => {
    console.log("Favourites", favorites);
    if (favorites.some((fav) => fav.title === title)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, title]);

  useEffect(() => {
    // Fetch the movie details by ID when component mounts
    const fetchMovie = async () => {
      try {
        const movieData = await searchSeriesByTitle(title);
        setMovie(movieData[0]);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [title]);

  if (loading) {
    return <Loader />;
  }

  if (!movie) {
    return (
      <p className="text-xl w-full h-[200px] flex items-center justify-center text-black">
        Movie not found.
      </p>
    );
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

  // Function to handle "Add to Favourites"
  const handleAddToFavourites = async () => {
    if (!user) {
      toast.error("You need to be logged in to add movies to favourites!");
      return;
    }

    try {
      // Check if the movie is already a favorite
      const isAlreadyFavorite = favorites.some(
        (fav) => fav.title === movie.title
      );
      if (isAlreadyFavorite) {
        toast.error("This movie is already in your favourites.");
        return;
      }

      // Add movie to favorites using context method
      await addFavorite(movie);
      toast.success("Movie added to favourites!", {
        icon: "❤️",
      });
    } catch (error) {
      console.error("Error adding movie to favourites:", error);
      toast.error("Failed to add movie to favourites.");
    }
  };

  // Remove the movie from favorites
  const removeFromFavorites = async () => {
    if (!user) {
      alert("You need to be logged in to remove favorites.");
      return;
    }

    try {
      // Use context method to remove from favorites
      await removeFavorite(movie);

      setIsFavorite(false); // Unmark the movie as favorite
      toast.success("Removed from favorites!");
    } catch (error) {
      toast.error("Error removing movie from favorites");
    }
  };

  return (
    <div
      className="w-full relative flex flex-col justify-center items-center bg-cover bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://image.tmdb.org/t/p/original/${backdrop_path}')`,
        minHeight: "calc(100vh - 74px)",
      }}
    >
      <div className="flex items-center gap-12 text-primary-text">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="h-[450px]"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="Movie Poster"
          />
          <button
            className={`mt-3 py-2 w-full flex items-center justify-center gap-2 rounded-sm transition-all duration-300 
    ${
      isFavorite
        ? "bg-red-500 hover:bg-red-600"
        : "bg-accent-primary hover:bg-accent-secondary"
    }`}
            onClick={isFavorite ? removeFromFavorites : handleAddToFavourites}
          >
            {isFavorite ? "Remove from Favourites" : "Add to Favourites"}
            <IoIosHeart fontSize={20} />
          </button>
        </div>
        <div className="bg-transparent backdrop-blur-xl border-gray-300 border-2 w-[900px] px-5 py-5 min-h-[500px] rounded-lg">
          <div className="flex items-center justify-between text-primary-text">
            <h1 className="font-bold text-[40px]">{title}</h1>
            <div className="flex gap-2 items-center">
              <IoCalendarNumber fontSize={20} />
              <p className="text-xl">{release_date}</p>
            </div>
          </div>

          <div className="text-primary-text">
            <p className="text-xl">{overview}</p>
          </div>

          <div className="flex mt-8 items-center justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-primary-text">
                <IoFilm fontSize={25} />
                <p className="text-xl">Genre</p>
              </div>
              <div className="flex gap-2 flex-wrap w-full">
                {genre_ids.map((genre, index) => (
                  <div
                    key={index}
                    className="text-white bg-gray-500/50 rounded-full py-1 px-4"
                  >
                    {genreMap[genre]}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-around mt-4">
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-2 text-primary-text">
                <p className="text-xl">Rating</p>
              </div>
              <p className="text-3xl flex gap-1">{stars}</p>
            </div>
            <div className="flex items-center flex-col gap-2 text-xl">
              <p>{adult ? "Adult" : "General"}</p>
              {adult ? (
                <TbRating18Plus fontSize={32} className="text-red-500" />
              ) : (
                <MdOutlineChildCare fontSize={32} className="text-blue-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
