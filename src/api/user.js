import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // future mein real backend ka URL yahan
});

export const userApi = {
  getMe: () => api.get('/user/me'),
  getMyStats: () => api.get('/user/stats'),
};