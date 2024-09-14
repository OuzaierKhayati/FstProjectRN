<<<<<<< HEAD
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Create a client
export const queryClient = new QueryClient();
=======
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Create a client
export const queryClient = new QueryClient();
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
