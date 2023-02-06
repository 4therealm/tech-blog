// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

class Comment extends Model {}
Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  contents: {
    Type: DataTypes.TEXT,
    allowNull: false
  },
  postId: {
    Type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id'
    }
  },
  userId: {
    Type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'comment'
});