import bodyParser from "body-parser";
import express from "express";
import DemoController from "./controllers/demo.controller";

const app = express();

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

/************Start Server*************/
const PORT: string | number = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
