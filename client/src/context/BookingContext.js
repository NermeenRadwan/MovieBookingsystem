import { createContext, useContext, useReducer } from 'react';

const initialState = {
  movies: [], // Add movies array to state
  selectedMovie: null,
  selectedTheater: null,
  selectedShowtime: null,
  selectedSeats: [],
  bookingDetails: null,
  step: 1
};

// Add a new case to your reducer:
const bookingReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return { ...state, movies: action.payload };
    // ... rest of your cases
  }
};

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);