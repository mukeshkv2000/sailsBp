/**
 * LogsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const log = require("../../services/log").log;
module.exports = {
  show: async function(req, res) {
    try {
      let logs = await Logs.find()
        .sort("timestamp DESC")
        .paginate({ page: 0, limit: 100 });

      if (!logs) {
        log("info", err);
        throw new Error("Logs not found");
      } else {
        // return res.json(logs);

        return res.view("pages/loggerList", {
          logs: logs
        });
      }
    } catch (err) {
      log("warn", err);
      return res.send(err);
    }
  },
  showFilter: async function(req, res) {
    try {
      let logs = await User.find()
        .where({ level: req.body.loglevel })
        .sort("timestamp DESC");

      if (!logs) {
        log("info", err);
        throw new Error("Logs not found");
      } else {
        return res.view("pages/loggerList", {
          logs: logs
        });
      }
    } catch (err) {
      log("error", err);
      return res.json(err);
    }
  }
};
