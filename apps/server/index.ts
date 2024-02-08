import pino from "@package/pino-logger";
import express from "express";

import { loggerWorker } from "./src/logger";

const app = express();

app.get("/", (_req, res) => {
  loggerWorker.debug(`Req from express server`);
  res.send("Hello World!");
});
const PORT = process.env.SERVER_PORT || 9999;

app.listen(PORT, () => {
  loggerWorker.debug(`NODE_ENV: ${process.env.NODE_ENV}`);
  loggerWorker.debug(`LOG_LEVEL: ${process.env.LOG_LEVEL}`);
  pino.info(`NODE_ENV: ${process.env.NODE_ENV}`);

  pino.info(new Error("kaboom"), "with hello");
  pino.error(new Error("an error"));
});
