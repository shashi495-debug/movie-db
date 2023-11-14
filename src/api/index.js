import axios from 'axios';

const ax = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = 'd4fbc0cd7f3b6b7ea3c3b8e5c74b8f46';

const params = `?api_key=${API_KEY}&language=en-US`;

const getMovies = (url) => ax.get(`${url}${params}`);

export const getNewReleases = () => getMovies('/movie/now_playing');

export const getPopular = () => getMovies('/movie/popular');
