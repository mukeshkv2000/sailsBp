/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const logger = require("../../services/logger");
module.exports = {
  add: async function(req, res) {
    try {
      let user = {
        name: req.body.name
      };
      let users = await User.create(user).fetch();
      if (!users) {
        sails.log.error("alpha to show ", users);
        logger.info("beta save error", err);
        return res.json({ status: 405, error: err });
      } else {
        return res.json(users);
      }
    } catch (err) {
      logger.warn("gamma error", err);
      return res.json(err);
    }
  },
  show: async function(req, res) {
    try {
      // let users = await User.find();
      let users = await User.findOne({
        name: "ficaso"
      });
      if (!users) {
        throw err;
      } else {
        return res.json(users);
      }
    } catch (err) {
      return res.json(err);
    }
  }
};
