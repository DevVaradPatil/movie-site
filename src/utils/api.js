const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4bd616c818e20f48b1af5184fa76cfdf';

const getHeaders = () => ({
  accept: 'application/json',
});

export const getNowPlayingMovies = async () => {
  const url = `${API_BASE_URL}/movie/now_playing?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};

export const getPopularMovies = async () => {
  const url = `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const getTopRatedMovies = async () => {
  const url = `${API_BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

export const getUpcomingMovies = async () => {
  const url = `${API_BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return [];
  }
};

//Series
export const getAiringSeries = async () => {
  const url = `${API_BASE_URL}/tv/airing_today?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Airing series:', error);
    return [];
  }
};

export const getOnTheAirSeries = async () => {
  const url = `${API_BASE_URL}/tv/airing_today?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching on the air series:', error);
    return [];
  }
};

export const getPopularSeries = async () => {
  const url = `${API_BASE_URL}/tv/popular?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Popular Series:', error);
    return [];
  }
};

export const getTopRatedSeries = async () => {
  const url = `${API_BASE_URL}/tv/top_rated?api_key=${API_KEY}&page=1`;
  const options = {
    method: 'GET',
    headers: getHeaders()
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Top Rated Series:', error);
    return [];
  }
};

