const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


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

console.log(`UserPost model connection =`)
console.log(UserPost === sequelize.models.UserPost)
module.exports = UserPost;
