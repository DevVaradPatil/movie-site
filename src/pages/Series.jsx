import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getNowPlayingMovies, getOnTheAirSeries, getPopularMovies, getPopularSeries, getTopRatedMovies, getTopRatedSeries, getUpcomingMovies } from '../utils/api';
import CardContainer from '../components/CardContainer';
import HeaderForSeries from '../components/HeaderForSeries';
import CategoryListSeries from '../components/CategoryListSeries';
import Loader from '../components/Loader';


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
        onTheAirSeries.length > 0 ? (
          <CategoryListSeries title={"On the Air Series"} movies={onTheAirSeries}/>
        ) : (
          <Loader/>
        )
      }
      {
        popularSeries.length > 0 ? (
          <CategoryListSeries title={"Popular Series"} movies={popularSeries}/>
        ) : (
          <Loader/>
        )
      }
      {
        topRatedSeries.length > 0 ? (
          <CategoryListSeries title={"Top Rated Series"} movies={topRatedSeries}/>
        ) : (
          <Loader/>
        )
      }
    </div>
  )
}

export default Series