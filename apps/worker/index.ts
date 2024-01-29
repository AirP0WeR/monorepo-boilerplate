import express from "express";

import { loggerWorker } from "./src/logger";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const PORT = process.env.WORKER_PORT || 9999;
const NODE_ENV = process.env.NODE_ENV || "none";

app.listen(PORT, () => {
  loggerWorker.info(`Example app listening on port ${PORT}`);
  loggerWorker.info(`Example app listening on port ${NODE_ENV}`);
});
