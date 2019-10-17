var loggerConfigs = require("./loggerConfig");
module.exports = {
  log: (type, error) => {
    loggerConfigs.logger.log({
      level: type,
      message: error.stack,
      short: error.message
    });
    if (loggerConfigs.sendErrorLogOnEmail == "true" && type == "error") {
      // TODO use email function to send error on email(loggerConfigs.errorLogEmail)
    }
  }
};
