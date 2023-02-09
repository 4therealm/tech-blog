const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comments')

class PostComment extends Model {}

PostComment.init(
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
    modelName: 'PostComment'
  }
);

// Define the associations
PostComment.belongsTo(User, { foreignKey: 'user_id' });
PostComment.belongsTo(Post, { foreignKey: 'post_id' });
PostComment.belongsTo(Comment, { foreignKey: 'comment_id' });

module.exports = PostComment;
