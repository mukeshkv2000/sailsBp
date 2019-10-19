/**
 * EnvVar.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  tableName: "envvar",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
      unique: true
    },
    ERROR_LOGS_EMAIL: {
      type: "boolean"
    },
    SAVE_ERROR_LOG_IN_DB: {
      type: "boolean"
    },
    SAVE_ERROR_LOG_IN_FILE: {
      type: "boolean"
    }
  }
};
