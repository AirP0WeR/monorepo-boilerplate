import { createBroscoLogger } from "@brosco/logger";
import express from "express";

export const loggerWeb = createBroscoLogger("web");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  loggerWeb.info(`Example app listening on port ${PORT}`);
});
