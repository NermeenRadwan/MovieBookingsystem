import http from './http';

const API_BASE = '/api/movies';

export const getMovies = async () => {
  try {
    const response = await http.get(API_BASE);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch movies');
  }
};

export const createMovie = async (movieData, token) => {
  try {
    const response = await http.post(API_BASE, movieData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to create movie');
  }
};