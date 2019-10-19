/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "logalpha",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
      unique: true
    },
    timestamp: {
      type: "string"
    },
    level: {
      type: "string"
    },
    message: {
      type: "string"
    },

    meta: {
      type: "json"
    }
  }
};
