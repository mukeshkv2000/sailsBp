const loggerConfigs = require("./loggerConfig");
module.exports = {
  log: (type, error) => {
    loggerConfigs.logger.log({
      level: type,
      message: error,
      short: error
    });
    if (loggerConfigs.sendErrorLogOnEmail == "true" && type == "error") {
      // TODO use email function to send error on email(loggerConfigs.errorLogEmail)
    }
  }
};
