<<<<<<< HEAD
import { Server } from "socket.io";
import { sleep } from "../helpers/time";

const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const snakeHandler = async (io: Server) => {
  while (true) {
    await sleep(Math.random() * 1000);
    io.emit("snake", {
      x: randomInteger(0, 500),
      y: randomInteger(0, 500),
      id: randomInteger(0, 4),
    });
  }
};
=======
import { Server } from "socket.io";
import { sleep } from "../helpers/time";

const randomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const snakeHandler = async (io: Server) => {
  while (true) {
    await sleep(Math.random() * 1000);
    io.emit("snake", {
      x: randomInteger(0, 500),
      y: randomInteger(0, 500),
      id: randomInteger(0, 4),
    });
  }
};
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
