import { Socket, Server } from "socket.io";

export const drawHandler = async (io: Server, socket: Socket) => {
  socket.on("draw", (msg) => {
    io.emit("draw", msg);
  });
};
