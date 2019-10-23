/**
 * Logs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "logbeta",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
      unique: true
    },
    timestamp: {
      type: "string",
      required: true,
      custom: value => Date.parse(value)
    },

    level: {
      type: "string"
    },
    message: {
      type: "string"
    },
    meta: {
      type: "json"
    },
    appendix: {
      type: "string"
    }
  }
};
