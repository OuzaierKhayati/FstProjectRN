import { Socket, Server } from "socket.io";

export const demoHandler = async (io: Server, socket: Socket) => {
  io.emit("chat", "Hello from server");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat", (msg) => {
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat", "Well received: " + JSON.stringify(msg));
  });
};
