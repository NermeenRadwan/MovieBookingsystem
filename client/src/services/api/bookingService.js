import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${API_BASE}/bookings`, bookingData);
  return response.data;
};

export const getBookingsByUser = async (userId) => {
  const response = await axios.get(`${API_BASE}/bookings/user/${userId}`);
  return response.data;
};

export const cancelBooking = async (bookingId) => {
  const response = await axios.delete(`${API_BASE}/bookings/${bookingId}`);
  return response.data;
};