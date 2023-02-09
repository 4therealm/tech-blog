const { User, Post, Comment } = require('../models');
const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: false });
  
  // Create a user
  const user = await User.create({
    username: 'JohnDoe',
    password: 'password123',
  });
  
  // Create a post
  const post = await Post.create(
  {
    title: 'How to Build a Blog',
    content: 'This is a guide to building a simple blog',
    user_id: user.id,
  }
  );
  
  // Create a comment
  const comment = await Comment.create({
    comment_text: 'This is a great guide!',
    user_id: user.id,
    post_id: post.id,
  });
};

seed().then(() => {
  console.log('Seed data created successfully!');
  process.exit();
});
