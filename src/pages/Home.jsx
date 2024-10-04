import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../utils/api';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMoviesData = await getPopularMovies();
      setPopularMovies(popularMoviesData);
      const topRatedMoviesData = await getTopRatedMovies();
      setTopRatedMovies(topRatedMoviesData)
      const upcomingMoviesData = await getUpcomingMovies();
      setUpcomingMovies(upcomingMoviesData)
    };

    fetchMovies();
  }, []);

  
  

  return (
    <div className='bg-primary-bg h-full min-h-screen text-primary-text'>
      <Header/>
      {
        popularMovies && (
          <CategoryList title={"Popular Movies"} movies={popularMovies}/>
        )
      }
      {
        topRatedMovies && (
          <CategoryList title={"Top Rated Movies"} movies={topRatedMovies}/>
        )
      }
      {
        upcomingMovies && (
          <CategoryList title={"Upcoming Movies"} movies={upcomingMovies}/>
        )
      }
    </div>
  );
}

export default Home;
