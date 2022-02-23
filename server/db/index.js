// The purpose of this file is to bring your Sequelize instance (`db`)
// together with your models.

const db = require('./database')
const User = require('./user')
const Post = require('./post')

User.hasMany(Post); 
Post.belongsTo(User);
// Post model will have foreign key 'UserId'

module.exports = {
  db,
  User,
  Post,
};
