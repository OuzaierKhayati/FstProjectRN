import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Create a client
export const queryClient = new QueryClient();
