const router = require("express").Router();
const sequelize = require("../config/connection");
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });

  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("home", {
    posts,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
router.get("/logout", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("home");
});

module.exports = router;
