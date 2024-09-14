<<<<<<< HEAD
import { io } from 'socket.io-client';

export const socket = io(
  import.meta.env.VITE_API_URL || 'ws://localhost:5000',
  {
    reconnectionDelayMax: 10000,
  }
);
=======
import { io } from 'socket.io-client';

export const socket = io(
  import.meta.env.VITE_API_URL || 'ws://localhost:5000',
  {
    reconnectionDelayMax: 10000,
  }
);
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
