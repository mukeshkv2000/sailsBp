/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const log = require("../../services/log").log;
const saveLogInFile = process.env.SAVE_ERROR_LOG_IN_FILE;
module.exports = {
  add: async function(req, res) {
    try {
      let user = {
        name: req.body.name
      };
      let users = await User.create(user).fetch();
      if (!users) {
        sails.log.error("alpha to show ", users);
        // logger.info("beta save error", err);
        log("error", err);
        return res.json({ status: 405, error: err });
      } else {
        return res.json(users);
      }
    } catch (err) {
      log("info", err);
      return res.json(err);
    }
  },
  show: async function(req, res) {
    try {
      sails.log("hit");
      let logs = await User.find();
      // let logs = await User.findOne({
      //   level: "warn"
      // });

      if (!logs) {
        log("info", err);
        throw "Logs not found";
      } else {
        // return res.json(logs);
        return res.view("pages/loggerList", {
          logs: logs
        });
      }
    } catch (err) {
      log("warn", err);
      // logger.log("info", "message::", err, {});
      return res.json(err);
    }
  },
  showenv: async function(req, res) {
    try {
      let envvar = await EnvVar.find();
      sails.log("env var", envvar[0].SAVE_ERROR_LOG_IN_DB);
      process.env.SAVE_ERROR_LOG_IN_DB = envvar[0].SAVE_ERROR_LOG_IN_DB;
      sails.log("process env var", process.env.SAVE_ERROR_LOG_IN_DB);
      res.send(process.env.SAVE_ERROR_LOG_IN_DB);
    } catch (e) {
      log("warn", e);
      // logger.log("info", "message::", err, {});
      return res.json(e);
    }
  },
  switchDb: async function(req, res) {
    try {
      let envvar = await EnvVar.find();
      // sails.log("env var", envvar[0].SAVE_ERROR_LOG_IN_DB);
      const _switch = envvar[0].SAVE_ERROR_LOG_IN_DB;
      const updateDb = await EnvVar.update({ id: 1 })
        .set({ SAVE_ERROR_LOG_IN_DB: !_switch })
        .fetch();
      res.send(updateDb);
    } catch (e) {
      log("warn", e);
      // logger.log("info", "message::", err, {});
      return res.json(e);
    }
  },
  switchFile: async function(req, res) {
    try {
      let envvar = await EnvVar.find();
      sails.log("before:: ", process.env.SAVE_ERROR_LOG_IN_FILE);

      const _switch = envvar[0].SAVE_ERROR_LOG_IN_FILE;
      const updateFile = await EnvVar.update({ id: 1 })
        .set({ SAVE_ERROR_LOG_IN_FILE: !_switch })
        .fetch();
      process.env.SAVE_ERROR_LOG_IN_FILE = !_switch;
      res.send(updateFile);
      sails.log("after:: ", process.env.SAVE_ERROR_LOG_IN_FILE);
    } catch (e) {
      log("warn", e);
      // logger.log("info", "message::", err, {});
      return res.json(e);
    }
  }
};
