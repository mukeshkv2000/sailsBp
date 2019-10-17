const { createLogger, format, transports } = require("winston");
const Postgres = require("../node_modules/@pauleliet/winston-pg-native");
const winston = require("winston");
const options = {
  connectionString: "postgres://postgres:ztech@44@localhost:5432/mlogger",
  level: "info",
  poolConfig: {
    // number of milliseconds to wait before timing out when connecting a new client
    // by default this is 0 which means no timeout
    connectionTimeoutMillis: 0,
    // number of milliseconds a client must sit idle in the pool and not be checked out
    // before it is disconnected from the backend and discarded
    // default is 10000 (10 seconds) - set to 0 to disable auto-disconnection of idle clients
    idleTimeoutMillis: 10000,
    // maximum number of clients the pool should contain
    // by default this is set to 10.
    max: 10
  },
  tableName: "winston_logs"
};

const logger = new winston.createLogger({
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
    })
  ]
});
module.exports = logger;
