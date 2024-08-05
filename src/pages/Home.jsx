import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies } from '../utils/api';
import CardContainer from '../components/CardContainer';

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

      <CardContainer/>
    </div>
  );
}

export default Home;
