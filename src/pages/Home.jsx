import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies } from '../utils/api';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';

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
    <div className='bg-primary-bg h-full min-h-screen text-primary-text'>
      <Header/>
      <CardContainer/>
    </div>
  );
}

export default Home;
