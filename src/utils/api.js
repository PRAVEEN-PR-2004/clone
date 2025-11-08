import axios from 'axios';

const API_BASE_URL = 'https://gtholidays-server.onrender.com/api';

// Package API calls
export const getPackages = async () => {
  const response = await axios.get(`${API_BASE_URL}/packages`);
  return response.data;
};

export const getPackageById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/packages/${id}`);
  return response.data;
};


