import { Socket, Server } from "socket.io";

export const demoHandler = async (io: Server, socket: Socket) => {
  socket.on("chat", (msg) => {
    io.emit("chat", msg);
  });
};
