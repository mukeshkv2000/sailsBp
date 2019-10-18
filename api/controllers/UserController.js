/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const log = require("../../services/log").log;
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
      //   name: "srim"
      // });
      sails.log(logs);
      if (!logs) {
        log("info", err);
        throw "Logs not found";
      } else {
        return res.json(logs);
      }
    } catch (err) {
      log("warn", err);
      // logger.log("info", "message::", err, {});
      return res.json(err);
    }
  }
};
