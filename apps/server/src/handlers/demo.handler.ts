<<<<<<< HEAD
import { Socket, Server } from "socket.io";

export const demoHandler = async (io: Server, socket: Socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
};
=======
import { Socket, Server } from "socket.io";

export const demoHandler = async (io: Server, socket: Socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
};
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
