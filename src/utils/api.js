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
