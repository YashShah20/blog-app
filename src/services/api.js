import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/`,
});

api.interceptors.request.use((config) => {
  config.headers.user_id = 1;
  return config;
});

export default api;
