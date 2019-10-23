const loggerConfigs = require("./loggerConfig");
module.exports = {
  log: (type, error) => {
    loggerConfigs.logger.log({
      level: type,
      message: error,
      short: error
    });
  }
};
