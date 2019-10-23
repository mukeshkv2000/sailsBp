/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "Userlist",
  attributes: {
    id: {
      type: "number",
      autoIncrement: true,
      unique: true
    },
    name: {
      type: "string",
      required: true
    },
    lastname: {
      type: "string"
    }
  }
};
