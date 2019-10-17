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
      // let users = await User.find();
      let users = await User.findOne({
        name: "srim"
      });
      if (!users) {
        // log("info", err);
        throw "User not found";
      } else {
        return res.json(users);
      }
    } catch (err) {
      log("error", err);
      // logger.log("info", "message::", err, {});
      return res.json(err);
    }
  }
};
