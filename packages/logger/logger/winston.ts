import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, metadata, errors } = format;

export function createBroscoLogger(loggerLabel: string) {
  const envFormat =
    process.env.NODE_ENV === "production"
      ? format.json()
      : format.prettyPrint();
  const logger = createLogger({
    level: process.env.LOG_LEVEL ?? "silly",
    format: combine(label({ label: loggerLabel })),
    transports: [
      new transports.Console({
        format: combine(
          metadata({
            fillExcept: ["timestamp", "level", "label", "message"],
          }),
          errors({ stack: true }),
          timestamp({
            format: "MMM-DD-YYYY HH:mm:ss",
          }),
          envFormat,
        ),
      }),
    ],
  });
  return logger;
}

// EXAMPLES

// logger.error("error");
// logger.warn("warn");
// logger.info("info");
// logger.http("error");
// logger.verbose("verbose");
// logger.debug("debug");
// logger.silly("silly");

// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
//   };
