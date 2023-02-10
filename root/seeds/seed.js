const { User, Post, Comment } = require('../models');
const sequelize = require('../config/connection');

const seed = async () => {
  await sequelize.sync({ force: false });

  // Create users
  const user1 = await User.create({
    username: 'JaneDoe',
    password: 'password456',
  });
  const user2 = await User.create({
    username: 'BobSmith',
    password: 'password789',
  });

  // Create posts
  const post1 = await Post.create({
    title: 'How to Make a Website',
    content: 'This is a guide to making a simple website',
    user_id: 1,
  });
  const post2 = await Post.create({
    title: 'The Benefits of Meditation',
    content: 'This is an article about the benefits of meditation',
    user_id: 2,
  });

  // Create comments
  const comment1 = await Comment.create({
    comment_text: 'Thanks for the helpful guide!',
    user_id: user2.id,
    post_id: post1.id,
  });
  const comment2 = await Comment.create({
    comment_text: 'I have been practicing meditation and it has improved my life',
    user_id: user1.id,
    post_id: post2.id,
  });
};

seed().then(() => {
  console.log('Seed data created successfully!');
  process.exit();
});
