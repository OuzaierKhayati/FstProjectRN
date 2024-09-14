<<<<<<< HEAD
import { Socket, Server } from "socket.io";

let drawBoard: any[] = [];

export const drawHandler = async (io: Server, socket: Socket) => {
  socket.emit("draw", drawBoard);
  socket.on("draw", (msg) => {
    drawBoard = msg;
    io.emit("draw", msg);
  });
};
=======
import { Socket, Server } from "socket.io";

let drawBoard: any[] = [];

export const drawHandler = async (io: Server, socket: Socket) => {
  socket.emit("draw", drawBoard);
  socket.on("draw", (msg) => {
    drawBoard = msg;
    io.emit("draw", msg);
  });
};
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
