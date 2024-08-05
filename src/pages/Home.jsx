import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies } from '../utils/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getNowPlayingMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
    
  }, [movies])
  
  

  return (
    <div className='bg-primary-bg h-screen text-primary-text'>
      Home
      <div className='w-full h-10 bg-secondary-bg text-secondary-text '>
        see more
      </div>
      <button className='bg-button-primary-bg text-button-primary-text'>
        Watch Now
      </button>
      <NavLink to='signup' className='mt-5'>SignUp</NavLink>

      <div className='movie-list'>
        {movies && movies.map(movie => (
          <div key={movie.id} className='py-2'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
