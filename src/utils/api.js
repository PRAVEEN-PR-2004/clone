import axios from 'axios';

const API_BASE_URL = 'https://gtholidays-server.onrender.com/api';

// Package API calls
export const getPackages = async (type = null) => {
  const url = type ? `${API_BASE_URL}/packages?type=${type}` : `${API_BASE_URL}/packages`;
  const response = await axios.get(url);
  return response.data;
};

export const getPackageById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/packages/${id}`);
  return response.data;
};


