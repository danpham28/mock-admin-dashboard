import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

axiosClient.interceptors.request.use((config) => {
  // get token
  const token = '';
  if (!token) return config;
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const { response } = error;

    // Expired token
    if (response && response.status === 401) {
      console.error('Unauthenticated - 401 on client', { data: response.data });
      // clear accessToken from localStorage
      window.location.reload();
      return Promise.reject(error);
    }

    throw error;
  }
);

export default axiosClient;
