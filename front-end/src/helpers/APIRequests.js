import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestSellerOrders = async (endpoint, body) => {
  const { data } = await api.get(endpoint, body);
  return data;
};

export const requestAPI = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestDelete = async (endpoint) => {
  await api.delete(endpoint);
};

export const requestStatus = async (endpoint, body) => {
  await api.patch(endpoint, body);
};

export default api;
