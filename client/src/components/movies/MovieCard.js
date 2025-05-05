// src/components/movies/MovieCard.js
import React from 'react';
import { useBooking } from '../../context/BookingContext';

const MovieCard = ({ movie }) => {
  const { dispatch } = useBooking();

  const handleSelect = () => {
    dispatch({
      type: 'SELECT_MOVIE',
      payload: {
        id: movie.id,
        title: movie.title,
        rating: movie.rating,
        // Add other relevant movie data
      }
    });
  };

  return (
    <div className="movie-card" onClick={handleSelect}>
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <p>Year: {movie.year}</p>
      {/* Add more movie details as needed */}
    </div>
  );
};

export default MovieCard;