import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../utils/api';
import CardContainer from '../components/CardContainer';
import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    const fetchMovies = async () => {
      setIsLoading(true);
      const popularMoviesData = await getPopularMovies();
      setPopularMovies(popularMoviesData);
      const topRatedMoviesData = await getTopRatedMovies();
      setTopRatedMovies(topRatedMoviesData);
      const upcomingMoviesData = await getUpcomingMovies();
      setUpcomingMovies(upcomingMoviesData);
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  
  

  return (
    <div className='bg-primary-bg h-full min-h-screen text-primary-text'>
      <Header/>
      {
        popularMovies.length > 0 ? (
          <CategoryList title={"Popular Movies"} movies={popularMovies}/>
        ) : (
          <Loader/>
        )
      }
      {
        topRatedMovies.length > 0 ? (
          <CategoryList title={"Top Rated Movies"} movies={topRatedMovies}/>
        ): (
          <Loader/>
        )
      }
      {
        upcomingMovies.length > 0 ? (
          <CategoryList title={"Upcoming Movies"} movies={upcomingMovies}/>
        ) : (
          <Loader/>
        )
      }
    </div>
  );
}

export default Home;
