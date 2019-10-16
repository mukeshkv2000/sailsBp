/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  add: async function(req, res) {
    try {
      sails.log("Mukesh ::", req.body);
      let user = {
        name: req.body.name
      };
      let users = await User.create(user).fetch();
      if (!users) {
        sails.log.error("Logger to show ", users);
        return res.json({ status: 405, error: err });
      } else {
        return res.json(users);
      }
    } catch (err) {
      return res.json(err);
    }
  },
  show: async function(req, res) {
    try {
      sails.log("hit");
      sails.log("show mukesh", req.body);
      let users = await User.find();
      if (!users) throw err;
      else {
        return res.json(users);
      }
    } catch (err) {
      sails.log.error(err);

      return res.json(err);
    }
  }
};
