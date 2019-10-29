const loggerConfigs = require("./loggerConfig");
module.exports = {
  log: (type, error,reqMessage) => {
    loggerConfigs.logger.log({
      level: type,
      message: error,
      short: reqMessage,
    });
  }
};
