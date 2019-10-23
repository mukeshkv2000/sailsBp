const loggerConfigs = require("./loggerConfig");
module.exports = {
  log: (type, error) => {
    loggerConfigs.logger.log({
      level: type,
      message: error,
      short: error
    });

    if (process.env.SAVE_ERROR_LOG_IN_FILE == "true") {
      loggerConfigs.savefile();
    }
    if (loggerConfigs.sendErrorLogOnEmail == "true" && type == "error") {
      // TODO use email function to send error on email(loggerConfigs.errorLogEmail)
    }
  }
};
