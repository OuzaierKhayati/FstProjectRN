import { Socket, Server } from "socket.io";

let drawBoard: any[] = [];

export const drawHandler = async (io: Server, socket: Socket) => {
  socket.emit("draw", drawBoard);
  socket.on("draw", (msg) => {
    drawBoard = msg;
    io.emit("draw", msg);
  });
};
