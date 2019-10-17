const winston = require("winston");
require("winston-postgres");
const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");
const logDir = "log";
var errorLogEmail = process.env.ERROR_LOGS_EMAIL || "";
var sendErrorLogOnEmail = process.env.ERROR_LOG_ON_EMAIL || true;
var saveLogInDb = true;
var saveLogInFile = true;
const env = process.env.NODE_ENV || "development";
var PostgresStr = "postgres://postgres:ztech@44@localhost:5432/mlogger";
const filename = path.join(logDir, "results.log");
var Postgres = require("winston-postgres").Postgres;

const logger = createLogger({
  // change level if in dev environment versus production
  level: env === "development" ? "debug" : "info",

  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),

  transports: [
    new Postgres({
      connectionString: "postgres://postgres:ztech@44@localhost:5432/mlogger",
      level: "info",
      poolConfig: {
        connectionTimeoutMillis: 0,
        idleTimeoutMillis: 0,
        max: 10
      },
      tableName: "winston_logs"
    }),
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      )
    })
  ]
});

if (1) {
  new Postgres({
    connectionString: "postgres://postgres:ztech@44@localhost:5432/mlogger",
    level: "info",
    poolConfig: {
      connectionTimeoutMillis: 0,
      idleTimeoutMillis: 0,
      max: 10
    },
    tableName: "winston_logs"
  });
}

if (saveLogInFile) {
  logger.add(
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      )
    })
  );
}

module.exports = {
  logger: logger,
  errorLogEmail: errorLogEmail,
  sendErrorLogOnEmail: sendErrorLogOnEmail
};
