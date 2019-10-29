/**
 * LogsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const log = require("../../services/log").log;
var useragent = require('useragent');
useragent(true);
module.exports = {
  show: async function (req, res) {
    var agent = useragent.parse(req.headers['user-agent']);
    agent.toString();
    let msg = req.baseUrl + req.originalUrl + " Method :" + req.method + " user-agent :" + agent;
    try {
      let logs = await Logs.find()
        .sort("timestamp DESC")
        // .paginate({ page: 0, limit: 100 });

      if (!logs) {
        log("info", err, msg);
        throw new Error("Logs not found");
      } else {
        let metaTag = [];
        for (let i = 0; i < logs.length; i++) {
          let metaValue = logs[i].meta;
          detail = JSON.parse(logs[i].message);
          // console.log("Details", detail)
          let add = {
            level: metaValue.level,
            short: metaValue.short,
            details: detail
          }
          metaTag.push(add)
        }
        // console.log(metaTag)
        return res.render("pages/loggerList", {
          logs: logs,
          metaTag: metaTag

        });
      }
    } catch (err) {
      if(err.length > 0){
        log("warn", err, msg);
      }

      return res.send(err);
    }
  },
  showFilter: async function (req, res) {
    var agent = useragent.parse(req.headers['user-agent']);
    agent.toString();
    let msg = req.baseUrl + req.originalUrl + " Method :" + req.method + " user-agent :" + agent;
    try {
      let logs = await Logs.find()
        .where({ level: req.body.loglevel })
        .sort("timestamp DESC");

      if (!logs) {
        log("info", err, msg);
        throw new Error("Logs not found");
      } else {
        return res.view("pages/loggerList", {
          logs: logs
        });
      }
    } catch (err) {
      log("error", err, msg);
      return res.json(err);
    }
  }
};
