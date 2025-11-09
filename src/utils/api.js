import axios from 'axios';

// Base URLs
const API_BASE_URL = 'https://gtholidays-server.onrender.com/api';
const SERVER_BASE_URL = 'https://gtholidays-server.onrender.com';
const PYTHON_API = 'https://gt-holidays-chatbot.onrender.com';

export const getPackages = async () => {
  const response = await axios.get(`${API_BASE_URL}/packages`);
  return response.data;
};

export const getPackageById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/packages/${id}`);
  return response.data;
};

export const createPackage = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/packages`, data);
  return response.data;
};

export const updatePackage = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}/packages/${id}`, data);
  return response.data;
};

export const deletePackage = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/packages/${id}`);
  return response.data;
};

export const adminLogin = async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/admin/login`, credentials);
  return response.data;
};

export const getSubmissions = async () => {
  const response = await axios.get(`${API_BASE_URL}/submissions`);
  return response.data;
};

export const submitForm = async (data) => {
  const response = await axios.post(`${SERVER_BASE_URL}/submitData`, data);
  return response.data;
};

export const sendChat = async (message) => {
  const response = await axios.post(`${PYTHON_API}/chat`, { message });
  return response.data;
};


