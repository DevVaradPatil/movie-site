import React, { useEffect, useState } from 'react'
import Card from './Card';
import { getNowPlayingMovies } from '../utils/api';

const CardContainer = () => {
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
    <div>
        <div className='movie-list'>
        {movies && movies.map(movie => (
            <Card key={movie.id} image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} title={movie.title}/>
        ))}
      </div>
       
    </div>
  )
}

export default CardContainer