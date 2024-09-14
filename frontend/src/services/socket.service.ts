import { io } from 'socket.io-client';

export const socket = io(
  import.meta.env.VITE_API_URL || 'ws://localhost:5000',
  {
    reconnectionDelayMax: 10000,
  }
);
