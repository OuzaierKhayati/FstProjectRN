import { Router } from "express";
import { sleep } from "../helpers/time";

const DemoController = Router();

DemoController.get("/", async (req, res) => {
  const { throwError } = req.query;
  await sleep(2000);
  if (throwError === "true") {
    return res.status(400).json({ message: "You requested an error." });
  }
  res.json({ message: "Hello World" });
});

export default DemoController;
