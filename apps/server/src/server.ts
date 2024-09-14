import bodyParser from "body-parser";
import express from "express";
import DemoController from "./controllers/demo.controller";
import http from "http";
import { Server } from "socket.io";
import { demoHandler } from "./handlers/demo.handler";
import { snakeHandler } from "./handlers/snake.handler";
import { drawHandler } from "./handlers/draw.handler";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/***********CORS**********/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

/************Register Routes*************/
const restApi = express.Router();
app.use("/api", restApi);

restApi.use("/demo", DemoController);

/************Socket.io*************/
snakeHandler(io);

io.on("connection", (socket) => {
  console.log("a user connected");

  demoHandler(io, socket);
  drawHandler(io, socket);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

/************Start Server*************/
const PORT: string | number = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
