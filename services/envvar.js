envvar = async envvar => {
  try {
    let envvar = await EnvVar.find();
    localEnvdb = envvar[0].SAVE_ERROR_LOG_IN_DB;

    // const localEnvdb = await envvar[0].SAVE_ERROR_LOG_IN_DB;
    sails.log("env var = ", envvar[0].SAVE_ERROR_LOG_IN_DB);
    sails.log("local var = ", localEnvdb);
    res.send(localEnvdb);
  } catch (e) {
    log("warn", e);
    // logger.log("info", "message::", err, {});
    return res.json(e);
  }
};

module.exports = envvar;
