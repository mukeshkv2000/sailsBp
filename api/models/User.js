/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "user",
  attributes: {
    name: {
      type: "string",
      required: true
    },

    id: {
      type: "number",
      autoIncrement: true,
      unique: true
    }
  }
};
