const Sequelize = require("sequelize");
const db = require("./database.js");

module.exports = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  birthday: {
    type: Sequelize.DATE,
  },
});
