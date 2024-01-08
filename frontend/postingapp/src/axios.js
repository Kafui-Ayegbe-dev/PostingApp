import axios from 'axios';

// helper function to make requests to backend
export const makeRequest = axios.create({
    baseURL: "http://localhost:8081/api/",
    withCredentials: true,
  });