"use strict";
"use strict";
const { createLogger, format, transports } = require("winston");
const fs = require("fs");
const path = require("path");

const env = process.env.NODE_ENV || "development";
const logDir = "log";

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const filename = path.join(logDir, "results.log");

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
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      )
    }),
    new transports.File({
      filename,
      format: format.combine(
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      )
    })
  ]
});

var Postgres = require("winston-postgres").Postgres;

winston.add(winston.transports.Postgres, {
  ssl: false, // are you sure you want to do this?
  timestamp: true,
  connectionString: "postgres://postgres:ztech@44@localhost:5432",
  tableName: "winston-logs",
  ignoreMessage: function(level, message, metadata) {
    if (message === "something to ignore") {
      return true;
    }
    return false;
  }
});
module.exports = logger;
