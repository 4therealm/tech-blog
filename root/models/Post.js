const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.hasMany(models.Comment, {
      foreignKey: 'post_id',
      as: 'comments',
    });
    this.belongsToMany(models.User, {
      through: 'UserPost',
      as: 'users',
      foreignKey: 'post_id',
    });
  }
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  }
);
module.exports = Post