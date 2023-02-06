// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Post extends Model {}
Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contents: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'post'
});

module.exports = Post