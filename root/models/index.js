const Post = require('./Post')
const User = require('./User')
const Comment = require('./Comments')
const UserPost = require('./UserPosts')
const PostComment = require('./PostComment')
Comment.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Comment.belongsTo(Post, { foreignKey: 'post_id', as: 'post' });


module.exports = {
Post,
User,
Comment,
UserPost,
PostComment

}
