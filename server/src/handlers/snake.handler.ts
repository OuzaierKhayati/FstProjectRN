import { Server } from "socket.io";
import { sleep } from "../helpers/time";

const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const snakeHandler = async (io: Server) => {
  while (true) {
    await sleep(Math.random() * 1000);
    const sockets = io.sockets.sockets;
    io.emit("snake", {
      x: randomInteger(0, 500),
      y: randomInteger(0, 500),
      id: randomInteger(0, 4),
    });
  }
};
