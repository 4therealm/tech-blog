const Post = require('./Post')
const User = require('./User')
const Comment = require('./Comments')
const UserPost = require('./UserPosts')


Post.belongsTo(User, {
  foreignKey: 'user_id',
   as: 'user'
  })
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  as: 'comments'
})
Post.belongsToMany(User, {
  through: 'UserPost',
  as: 'users',
  foreignKey: 'post_id'
})
User.hasMany(Post, {
   foreignKey: 'user_id',
   as: 'posts'
  })
User.belongsToMany(Post, {
  through: 'UserPosts',
  foreignKey: 'user_id'
})
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  as: 'post'
});



module.exports = {
Post,
User,
Comment,
UserPost,


}
