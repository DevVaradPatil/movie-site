import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies, getOnTheAirSeries, getPopularMovies, getPopularSeries, getTopRatedMovies, getTopRatedSeries, getUpcomingMovies } from '../utils/api';
import CardContainer from '../components/CardContainer';
import HeaderForSeries from '../components/HeaderForSeries';
import CategoryListSeries from '../components/CategoryListSeries';


const Series = () => {
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);
    const [popularSeries, setPopularSeries] = useState([]);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
  
    useEffect(() => {
      const fetchMovies = async () => {
        const onTheAirSeriesData = await getOnTheAirSeries();
        console.log(onTheAirSeriesData)
        setOnTheAirSeries(onTheAirSeriesData);
  
        const popularSeriesData = await getPopularSeries();
        setPopularSeries(popularSeriesData);
  
        const topRatedSeriesData = await getTopRatedSeries();
        setTopRatedSeries(topRatedSeriesData);
      };
  
      fetchMovies();
    }, []);
  
  return (
    <div className='bg-primary-bg h-full min-h-screen text-primary-text'>
      <HeaderForSeries/>
      {
        onTheAirSeries && (
          <CategoryListSeries title={"On the Air Series"} movies={onTheAirSeries}/>
        )
      }
      {
        popularSeries && (
          <CategoryListSeries title={"Popular Series"} movies={popularSeries}/>
        )
      }
      {
        topRatedSeries && (
          <CategoryListSeries title={"Top Rated Series"} movies={topRatedSeries}/>
        )
      }
    </div>
  )
}

export default Series