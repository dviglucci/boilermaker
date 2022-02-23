// The sole purpose of this file is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// Remember to change the name of the database on line 7!

// If you are using Heroku as a deployment service and Heroku Postgres
// as your database, remember that the database url in your Heroku
// environment will be available in an environment variable DATABASE_URL.
// Prepare your sequelize instance to take advantage of this, and only
// use your local database url if no DATABASE_URL is available.

const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/boilermaker', {
  logging: false
});

module.exports = db;
