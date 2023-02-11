const router = require("express").Router();
const { Error } = require("sequelize");
const sequelize = require("../config/connection");
const Post = require("../models/Post");
const User = require("../models/User");
const Comment = require("../models/Comments");
const withAuth = require("../utils/auth");

//login redirect
//not quite sure how this works with the post /login
//same for logout
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//logout redirect
router.get("/logout", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("home");
});

//get all posts, main page
router.get("/", async (req, res) => {
  console.log(req.session.userId);
  //i think this is where i am getting my session user id
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("home", {
    posts,
    loggedIn: req.session.loggedIn,
  });
});


router.get('/post/:id', async (req, res) => {
  try {
  const post = await Post.findByPk(req.params.id, {
  include: [
  { model: User, as: 'user' },
  { model: Comment, as: 'comments' },
  ],
  });
  

  
  const plainPost = post.get({ plain: true });
  res.render('post', { post: plainPost, user_id: req.session.userId });
  
  } catch (err) {
  res.status(500).json({ message: 'Error retrieving post information' });
  }
  });

//get clicked on post, loads post and comments with post
//the postData is reading null,
// router.get("/post/:id", async (req, res) => {
//   const userId = req.session.userId;
//   const postData = await Post.findByPk(req.params.id, { raw: true });

//   res.render("post", postData);
//   // res.render(postData)
// });

// user dashboard, restrict withAuth()
//works when typed into address bar, but not when nav link is clicked.
//should show the users posts, and have a form to write a new post
router.get("/user/:userId", async (req, res) => {
  console.log(req.session.userId);
  const userId = req.params.userId;
  const postData = await Post.findAll({
    where: {
      user_id: userId,
    },
    include: [
      {
        model: User,
        as: "user",
      },
    ],
  }).catch((err) => {
    res.json({ message: err });
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("dashboard", {
    posts,
    loggedIn: req.session.loggedIn,
    userId: req.session.userId,
  });
  console.log(req.session.userId);
});

// const individualPostData = await Post.findOne({
//   where: {
//     id: req.params.id,
//   },

//   attributes: ["id", "post_date", "post_title", "post_content"],

//   include: [
//     {
//       model: Comment,

//       attributes: [
//         "id",

//         "user_id",

//         "post_id",

//         "created_at",

//         "comment_content",
//       ],

//       include: {
//         model: User,

//         attributes: ["username"],
//       },
//     },

//     {
//       model: User,

//       attributes: ["username"],
//     },
//   ],
// });

module.exports = router;
