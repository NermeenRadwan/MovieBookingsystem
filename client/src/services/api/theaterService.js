import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL;

export const getAllTheaters = async () => {
  const response = await axios.get(`${API_BASE}/theaters`);
  return response.data;
};

export const getTheaterById = async (id) => {
  const response = await axios.get(`${API_BASE}/theaters/${id}`);
  return response.data;
};

export const updateTheaterSeats = async (theaterId, seatData) => {
  const response = await axios.patch(`${API_BASE}/theaters/${theaterId}/seats`, seatData);
  return response.data;
};
