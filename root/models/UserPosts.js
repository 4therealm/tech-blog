const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User')
const Post = require('./Post')

class UserPost extends Model {}

UserPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'UserPost'
  }
);

// Define the associations
UserPost.belongsTo(User, { foreignKey: 'user_id' });
UserPost.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = UserPost;
