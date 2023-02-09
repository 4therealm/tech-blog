const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


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



console.log(`PostComment model connection =`)
console.log(PostComment === sequelize.models.PostComment)
module.exports = PostComment;
