require("winston-postgres");
const winston = require("winston");
const { createLogger, format, transports } = require("winston");

const path = require("path");
const logDir = "log";
const errorLogEmail = process.env.ERROR_LOGS_EMAIL || "";
const sendErrorLogOnEmail = process.env.ERROR_LOG_ON_EMAIL || false;
const saveLogInDb = process.env.SAVE_ERROR_LOG_IN_DB || false;
const saveLogInFile = process.env.SAVE_ERROR_LOG_IN_FILE || false;
const isDebug = true;

const env = process.env.NODE_ENV || "development";
const PostgresStr = "postgres://postgres:ztech@44@localhost:5432/mlogger";
const filename = path.join(logDir, "results.log");
const Postgres = require("winston-postgres").Postgres;

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),

  transports: []
});

if (isDebug) {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(
          info =>
            `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
        )
      )
    })
  );
}

if (process.env.SAVE_ERROR_LOG_IN_DB) {
  logger.add(
    new Postgres({
      connectionString: PostgresStr,
      poolConfig: {
        connectionTimeoutMillis: 0,
        idleTimeoutMillis: 0,
        max: 10
      },
      tableName: "logalpha"
    })
  );
}
let savefile = function savefile() {
  sails.log("process.env hit inside save", process.env.SAVE_ERROR_LOG_IN_FILE);
  this.logger.add(
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
};

module.exports = {
  logger: logger,
  savefile: savefile,
  errorLogEmail: errorLogEmail,
  sendErrorLogOnEmail: sendErrorLogOnEmail
};
